const images = document.querySelectorAll('[data-src]')
const imgOptions = {
	threshold: 0,
	rootMargin: '300px 0px 300px 0px',
}

function preloadImage(img) {
	const srcset = img.getAttribute('data-src')

	if (!srcset) {
		return
	}
	if (img.tagName === 'IMG') {
		img.src = srcset
	} else {
		img.srcset = srcset
	}
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return
		} else {
			preloadImage(entry.target)
			imgObserver.unobserve(entry.target)
		}
	})
}, imgOptions)

images.forEach(image => {
	imgObserver.observe(image)
})
