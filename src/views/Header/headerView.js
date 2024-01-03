import logoIMG from '../../../public/images/logo-image.png'
import './Header.css'

export function renderHeader() {
	document.getElementById('header').innerHTML = `
   <header>
    <div class="container">
        <div class="logo">
            <a href="/">
                <img src="${logoIMG}" alt="Toss Tech Logo">
            </a>
        </div>
        <nav class="navigation">
            <a href="/digital">디지털</a>
            <a href="/business">개발</a>
            <a href="/news">채용 바로가기</a>
        </nav>
    </div>
</header>
    `
}
