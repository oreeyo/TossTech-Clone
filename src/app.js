import { html } from './utils'
import logoImage from '../public/images/logo-image.png'
import { createRouter } from './router'

const app = document.getElementById('root')
app.innerHTML = html`
	<section>
		<header class="main-header">
			<div class="header-container">
				<div class="logo-image">
					<img alt="로고 이미지" src="${logoImage}" />
				</div>
			</div>
		</header>
	</section>
	<section>
		<div class="content" id="content"></div>
	</section>
`
