import { renderHeader } from '../views/Header/headerView.js'
import { ContentController } from '../controllers/ContentController'
import { renderFooter } from '../views/Footer/FooterView.js'

export async function initialize() {
  renderHeader()
  const contentController = new ContentController()
  contentController.init()
  renderFooter()
}
