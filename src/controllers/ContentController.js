import ContentModel from '../models/ContentModel.js'
import ContentView from '../views/Content/ContentView.js'

export class ContentController {
	constructor() {
		this.model = new ContentModel()
		this.view = new ContentView()
	}

	// 페이지가 로드될 때 실행할 메소드
	init() {
		this.model.loadArticles().then(articles => {
			this.view.renderContent(articles)
		})
	}
}
