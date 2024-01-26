import { renderHeader } from '../views/Header/headerView.js'
import { articleDetailPage } from '../models/DetailModel.js'
import { showArticleDetail } from '../views/Detail/DetailView.js'
import { renderFooter } from '../views/Footer/FooterView.js'

export function renderContent(articleId) {
  articleDetailPage(articleId)
    .then(articleData => {
      const mainContent = document.querySelector('main')
      mainContent.innerHTML = showArticleDetail(articleData)
    })
    .catch(error => {
      console.error('아티클 상세페이지 렌더링 실패:', error)
    })
}

export async function initialize(articleItem) {
  renderHeader()
  renderContent(articleItem)
  renderFooter()
}
