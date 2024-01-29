import './Content.css'
import { router } from '../../helpers/router.js'

class ContentView {
  constructor() {
    this.contentEl = document.getElementById('content')
  }

  renderContent(articles) {
    const contentHtml = Object.values(articles)
      .map(article => {
        return `
			<div id="content-area">
        <div class="article" data-id="${article.id}">
          <img src="${article.thumbnail_image}" alt="${article.title}" class="article-image">
          <div class="article-details">
            <span class="article-title">${article.title}</span>
            <span class="article-summary">${article.summary}</span>
            <span class="article-date">${this.formatDate(article.created_date)}</span>
          </div>
        </div>
			</div>
			`
      })
      .join('')
    this.contentEl.innerHTML = contentHtml
    this.contentEl.querySelectorAll('.article').forEach(articleEl => {
      articleEl.addEventListener('click', () => {
        const id = articleEl.getAttribute('data-id')
        window.history.pushState({}, '', `/article/${id}`)
        router()
      })
    })
  }

  formatDate(dateString) {
    const [year, month, day] = dateString.match(/(\d{4})(\d{2})(\d{2})/).slice(1)
    return `${year}-${month}-${day}`
  }
}
export default ContentView
