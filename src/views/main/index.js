import { formatDate, html } from '../../utils'

const setupTemplate = () => {
	const $content = document.getElementById('content')
	$content.innerHTML = html`
		<div class="${styles['content-inner']}" id="articles">
			<div class="${styles['main-title-container']}">
				<h1>메인 페이지</h1>
			</div>
		</div>
	`
}
