import BANNER_LOGO from '../../../public/images/logo-image2.png'
import './Footer.css'

export function renderFooter() {
	document.getElementById('footer').innerHTML = `
    <footer id="banner_container">
    <div id="banner_logo_container">
        <img src="${BANNER_LOGO}" alt="로고 아이콘" />
    </div>
    <section>
        <div id="banner_title_container">
            <h3>토스팀이 만드는 수만은 혁신의 순간들</h3>
        </div>
        <div id="banner_summary_container">
            <p>당신과 함께 만들고 싶습니다.</p>
            <p>지금, 토스팀에 합류하세요.</p>
        </div>
    </section>
</div>
</footer>
    `
}
