export default function initAnimacaoScroll() {
	const sections = document.querySelectorAll('[data-anime="scroll"]')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.75

		function animaScroll() {
			sections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top
				const isSectionVisible = sectionTop - windowMetade < 0
				if (isSectionVisible) {
					section.classList.add('scrollAnima')
				} else if (section.classList.contains('scrollAnima')) {
					section.classList.remove('scrollAnima')
				}
			})
		}

		animaScroll()

		window.addEventListener('scroll', animaScroll)
	}
}
