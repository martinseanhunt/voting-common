import { Subjects } from '../types/Subjects'

export interface CauseUpdatedEvent {
  subject: Subjects.CauseUpdated
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
