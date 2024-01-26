import { ContentController } from '../controllers/ContentController'
import { renderContent } from '../controllers/DetailController.js'

export function router() {
  const routes = {
    '/': () => new ContentController().init(),
    '/article/:id': id => renderContent(id)
  }

  const path = window.location.pathname
  const articleDetailRegex = /^\/article\/(\d+)$/
  const match = path.match(articleDetailRegex)

  match ? routes['/article/:id'](match[1]) : routes[path] ? routes[path]() : notFoundPage()
}
window.addEventListener('DOMContentLoaded', router)
window.addEventListener('popstate', router)

function notFoundPage() {
  console.log('404 Not Found')
  window.alert('준비중인 페이지 입니다.')
}
