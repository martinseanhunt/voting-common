import { Subjects } from '../types/Subjects'

export interface CauseCreatedEvent {
  subject: Subjects.CauseCreated
  data: {
    id: string
    title: string
    image: string
    decription: string
    url: string
    totalPointsAllocated: number
    version: number
  }
}
