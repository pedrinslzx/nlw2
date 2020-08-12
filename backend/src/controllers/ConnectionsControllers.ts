import { Request, Response } from "express";
import { Connection, Ranking } from "./../types";
import db from "../database/connection";

export default class ConnectionsControllers {
  async index(req: Request, res: Response) {
    const connections = await
      db('connections')
        .join('users', 'connections.user_id', '=', 'users.id')
        .select(['connections.*', 'users.*']) as Connection[]
    const rankCounter = [] as Ranking[]
    connections.forEach(connection => {
      if (rankCounter[connection.user_id]) rankCounter[connection.user_id].count = rankCounter[connection.user_id].count + 1
      else {
        rankCounter[connection.user_id] = {
          id: connection.user_id,
          count: 1,
          name: connection.name,
          bio: connection.bio,
          avatar: connection.avatar,
          whatsapp: connection.whatsapp,
          subject: connection.subject
        }
      }
    })

    const ranking = rankCounter.sort((a, b) => b.count - a.count);
    return res.json({
      totalConnections: connections.length,
      ranking,
      rankCounter,
      connections
    })
  }
  async create(req: Request, res: Response) {
    const { user_id } = req.body
    await db('connections').insert({
      user_id
    })
    return res.status(201).send()
  }
}
