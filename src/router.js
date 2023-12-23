export function createRouter() {
	// 라우터의 상태를 관리하기 위한 변수들.
	const routes = [] // 라우터의 경로 패턴과 핸들러를 저장
	let currentPath = null // 현재 경로 추적용

	// 각각의 내부함수들은 Closure를 이용해서 외부의 변수들 (routes, currentPath) 을 가져와서 사용할 수 있음.
	// addRoute 는 새로운 경로 패턴과 핸들러를 routes 배열에 추가하는 함수이다.
	function addRoute(pattern, handler) {
		const regex = new RegExp(`^${pattern}$`)
		routes.push({ regex, handler })
		return createRouter() // 새로운 라우터 인스턴스를 반환하여 체이닝 가능
	}

	/*
    주어진 경로로 이동하고, 해당 경로에 대한 핸들러를 실행하는 함수이다. 
    이미 현재 경로와 주어진 경로가 같은 경우 아무것도 하지 않고 종료한다.
    */
	function navigate(path) {
		if (currentPath === path) {
			return
		}
		const route = routes.find(r => r.regex.test(path))
		if (route) {
			const params = path.match(route.regex)
			route.handler(params)
		}
		currentPath = path
	}

	return {
		addRoute,
		navigate
	}
}

// 함수형으로 변환된 라우터 객체 생성
const router = createRouter()
