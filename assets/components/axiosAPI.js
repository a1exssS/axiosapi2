import axios from 'axios'

export default async function axiosAPI() {
	const options = {
		method: 'GET',
		url: 'https://api.jikan.moe/v4/anime',
	}

	const response = await (await axios.request(options)).data.data
	let createElement = ''
	let btnCounter = 6
	// fetch('https://api.jikan.moe/v4/anime')
	// 	.then(response => response.json())
	// 	.then(quote => console.log(quote))

	for (let i = 0; i < 6; i++) {
		createElement = `

			<div class="topics__item">
				<a href="${response[i].url}" class="topics__video-link">
					<img src="${response[i].images.jpg.image_url}" alt="" class="topics__video-image">
				</a>
				<span class="topics__video-subtitle">
					${response[i].status}
				</span>
				<span class="topics__video-title">
					${response[i].title}
				</span>
				<a href="${response[i].url}" class="topics__play-link">
					Play
					<svg class="topics__item-image">
						<use xlink:href="/assets/images/sprite.svg#play-btn" />
					</svg>
				</a>
			</div>
				`

		document.querySelector('.topics__box').insertAdjacentHTML('beforeend', createElement)
	}

	document.querySelector('.topics__button').addEventListener('click', () => {
		btnCounter += 6
		for (let i = btnCounter - 6; i < btnCounter; i++) {
			if (i >= response.length) {
				document.querySelector('.topics__button').textContent = `The End`
				document.querySelector('.topics__button').style.pointerEvents = 'none'
				return
			}
			createElement = `

				<div class="topics__item">
					<a href="${response[i].url}" class="topics__video-link">
						<img src="${response[i].images.jpg.image_url}" alt="" class="topics__video-image">
					</a>
					<span class="topics__video-subtitle">
						${response[i].status}
					</span>
					<span class="topics__video-title">
						${response[i].title}
					</span>
					<a href="${response[i].url}" class="topics__play-link">
						Play
						<svg class="topics__item-image">
							<use xlink:href="/assets/images/sprite.svg#play-btn" />
						</svg>
					</a>
				</div>
				`
			document.querySelector('.topics__box').insertAdjacentHTML('beforeend', createElement)
		}
	})
}
axiosAPI()
