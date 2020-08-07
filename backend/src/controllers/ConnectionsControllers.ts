import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionsControllers {
  async index(req: Request, res: Response) {
    const connections = await db('connections').select('*')
    return res.json({
      totalConnections: connections.length,
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
