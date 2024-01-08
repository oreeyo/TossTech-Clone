import { renderHeader } from '../views/Header/headerView.js'
import { renderFooter } from '../views/Footer/FooterView.js'

export async function initialize() {
	renderHeader()
	renderFooter()
}
