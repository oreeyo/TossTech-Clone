import './Content.css'

class ContentView {
	constructor() {
		this.contentEl = document.getElementById('content')
	}

	renderContent(articles) {
		// articles 객체의 값들을 배열로 변환
		const articlesArray = Object.values(articles)

		// 배열에 map 함수 적용
		this.contentEl.innerHTML = articlesArray
			.map(article => {
				// 반환할 HTML 문자열 구성
				return `
					<div class="article">
						<img src="${article.thumbnail_image}" alt="${article.title}">
						<div class="article-info">
							<h2>${article.title}</h2>
							<p>${article.summary}</p>
						</div>
					</div>
				`
			})
			.join('')
	}
}

export default ContentView
