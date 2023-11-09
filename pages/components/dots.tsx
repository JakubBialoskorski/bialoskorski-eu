import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Dots() {
  const router = useRouter()

  useEffect(() => {
    let menu
    menu = document.querySelector('.menu')
    const menuItems = document.querySelectorAll('.menu-item')

    const handleMouseOver = (index) => {
      menu.dataset.activeIndex = index
    }

    const handleMouseOut = () => {
      menu.dataset.activeIndex = ''
    }

    Array.from(menuItems).forEach((item, index) => {
      const element = item as HTMLElement
      element.addEventListener('mouseover', () => {
        handleMouseOver(index)
      })
      element.addEventListener('mouseout', () => {
        handleMouseOut()
      })
    })
  }, [router])

  return 
}

export default Dots;
