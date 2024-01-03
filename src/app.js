import { initialize } from '../src/controllers/Controller.js'
import { ContentController } from '../src/controllers/ContentController.js'

document.addEventListener('DOMContentLoaded', () => {
	initialize()
	const ContentController_ = new ContentController()
	ContentController_.init()
})
