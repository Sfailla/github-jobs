import moment from 'moment'

export const formatTime = time => moment(Date.parse(time)).fromNow()

export const formatToUrl = string => string.toLowerCase().split(' ').join('') + '.co'

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

export const getColorSchemePreference = () => {
  const darkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  return darkScheme ? 'dark' : 'light'
}
