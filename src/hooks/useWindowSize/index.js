import React from 'react'

export default function useWindowSize() {
  const [{ width, height }, setState] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setState({ width: window.innerWidth, height: window.innerHeight })
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [width, height])

  return {
    width,
    height
  }
}
