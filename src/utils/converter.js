import { Status } from './config'
export const getName = (type) => {
  switch (type) {
    case  Status.PENDING:
      return 'В ожидании'
    break
    case Status.ACTIVE:
      return 'Активна'
    break
    case Status.CANCELLED:
      return 'Отменена'
    break
    case Status.DONE:
      return 'Выполнена'
    break
    default:
      return 'Статус неизвестен'
  }
}

export const getColor = (type) => {
  switch (type) {
    case  Status.PENDING:
      return 'pending'
      break
    case Status.ACTIVE:
      return 'warning'
      break
    case Status.CANCELLED:
      return 'danger'
      break
    case Status.DONE:
      return 'primary'
      break
    default:
      return 'Unknown'
  }
}
