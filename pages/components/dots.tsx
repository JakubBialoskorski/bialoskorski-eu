import { useEffect } from 'react'

function useDots() {
	useEffect(() => {
		const menuEl = document.querySelector<HTMLElement>('.menu')
		const menuItems = document.querySelectorAll<HTMLElement>('.menu-item')

		if (!menuEl) return

		const handleMouseOver = (index: number) => {
			menuEl.dataset.activeIndex = String(index)
		}

		const listeners = Array.from(menuItems).map((element, index) => {
			const listener = () => handleMouseOver(index)
			element.addEventListener('mouseover', listener)
			return { element, listener }
		})

		return () => {
			listeners.forEach(({ element, listener }) => {
				element.removeEventListener('mouseover', listener)
			})
		}
	}, [])
	return
}

export default useDots
