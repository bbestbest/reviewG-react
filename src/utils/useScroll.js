import { useEffect, useState } from 'react'

function useScroll ({ scrollRange = 50 } = {}) {
  const [isScroll, setScroll] = useState(false)

  function handleScrollEvent () {
    return (window.scrollY > scrollRange ? setScroll(true) : setScroll(false))
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent)

    return () => document.removeEventListener('scroll', handleScrollEvent)
  }, [])
  return isScroll
}

export default useScroll
