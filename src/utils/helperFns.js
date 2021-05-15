import moment from 'moment'

export const formatTime = time => moment(Date.parse(time)).fromNow()

export const truncateWord = string => {
  return string?.length > 25 ? `${string.substring(0, 25)}...` : string
}

export const handleNullLogo = (logo, svg) => {
  return !logo ? svg : logo
}

const colors = ['#DF6DAE', '#3DB3D1', '#3D3B94', '#F0B62A', '#60DCAD', '#FF585F']

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
