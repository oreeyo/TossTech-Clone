export default class Router {
	constructor() {
		this.routes = {}
	}

	addRoute(path, controller) {
		this.routes[path] = controller
	}

	navigate(path = '') {
		const controller = this.routes[path]
		if (controller) {
			controller()
		}
	}
}
