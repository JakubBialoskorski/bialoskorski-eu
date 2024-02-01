import { useEffect } from 'react'

function Dots() {
	useEffect(() => {
		let menuEl: any
		menuEl = document.querySelector('.menu')
		const menuItems = document.querySelectorAll('.menu-item')

		const handleMouseOver = index => {
			menuEl.dataset.activeIndex = index
		}

		Array.from(menuItems).forEach((item, index) => {
			const element = item as HTMLElement
			element.addEventListener('mouseover', () => {
				handleMouseOver(index)
			})
		})
	})
	return
}

export default Dots
