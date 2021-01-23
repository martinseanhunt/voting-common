import { Subjects } from '../types/Subjects'

export interface AllocationsUpdatedEvent {
  subject: Subjects.AllocationsUpdated
  data: {
    causeId: string
    causeVersion: number
    totalPoints: number
    allocationsToCause: number
  }[]
}
