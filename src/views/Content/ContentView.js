import './Content.css'
import ContentModel from '../../models/ContentModel.js'
import { router } from '../../helpers/router.js'

class ContentView {
	constructor() {
		this.model = new ContentModel()
		this.contentEl = document.getElementById('content')
	}

	renderContent() {
		this.model
			.loadArticles()
			.then(data => {
				const articlesArray = Object.values(data.articles)
				const contentHtml = articlesArray
					.map(article => {
						return `
			<div id="content-area">
			  <div class="article" data-id="${article.id}">
				<img src="${article.thumbnail_image}" alt="${article.title}" class="article-image">
				<div class="article-details">
				  <h2 class="article-title">${article.title}</h2>
				  <p class="article-date">${this.formatDate(article.created_date)}</p>
				  <p class="article-summary">${article.summary}</p>
				</div>
			  </div>
			</div>
			`
					})
					.join('')
				this.contentEl.innerHTML = contentHtml

				// 각 기사에 클릭 이벤트 리스너 추가
				this.contentEl.querySelectorAll('.article').forEach(articleEl => {
					articleEl.addEventListener('click', () => {
						const id = articleEl.getAttribute('data-id')
						// URL을 변경하고 라우터 함수를 호출하여 상세 페이지 로딩
						window.history.pushState({}, '', `/article/${id}`)
						router()
					})
				})
			})
			.catch(error => console.error('Error fetching articles:', error))
	}

	formatDate(dateString) {
		const [year, month, day] = dateString.match(/(\d{4})(\d{2})(\d{2})/).slice(1)
		return `${year}-${month}-${day}`
	}
}
export default ContentView
