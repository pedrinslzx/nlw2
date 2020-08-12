export interface Connection {
  id: number,
  user_id: number,
  create_at: string,
  name: string,
  avatar: string,
  whatsapp: string,
  subject: string,
  bio: string
}
export interface Ranking {
  id: number,
  count: number,
  name: string,
  bio: string,
  avatar: string,
  subject: string,
  whatsapp: string
}

export interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

