import { Subjects } from '../types/Subjects'

export interface AllocaionsUpdatedEvent {
  subject: Subjects.AllocaionsUpdated
  data: {
    causeId: string
    totalPoints: number
    allocationsToCause: number
  }[]
}
