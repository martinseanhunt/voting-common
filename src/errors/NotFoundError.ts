import { CustomError } from './CustomError'

export class NotFoundError extends CustomError {
  statusCode = 404
  message = '404: Route not found'

  constructor() {
    super()
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}