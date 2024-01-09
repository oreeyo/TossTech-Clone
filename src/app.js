import { initialize } from '../src/controllers/Controller.js'
import { ContentController } from '../src/controllers/ContentController.js'

document.addEventListener('DOMContentLoaded', () => {
	initialize()
	const _ContentController = new ContentController()
	_ContentController.init()
})
