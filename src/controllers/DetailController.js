import { renderHeader } from '../views/Header/headerView.js'
import { contentComponet } from '../views/Detail/Detail.js'
import { renderFooter } from '../views/Footer/FooterView.js'

export async function initialize(articleItem) {
	renderHeader()
    contentComponet(articleItem);
	renderFooter()
}
