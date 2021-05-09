import moment from 'moment'

export const formatTime = time => moment(Date.parse(time)).fromNow()

export const truncateWord = string => {
  return string?.length > 25 ? `${string.substring(0, 25)}...` : string
}
