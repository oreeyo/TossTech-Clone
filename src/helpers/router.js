// router.js
export function router() {
	const routes = {
	  '/': function() { /* 홈페이지 로직 */ },
	  '/article': function() { /* 아티클 목록 페이지 로직 */ },
	  '/article/:id': function(id) { /* 아티클 상세 페이지 로직 */ }
	};
  
	// 현재 경로 가져오기
const path = window.location.pathname;
   // 동적 경로 처리를 위한 정규 표현식을 정의
   const articleDetailRegex = /^\/article\/(\d+)$/;
   const match = path.match(articleDetailRegex);
 
   // 정규 표현식에 일치하는 경우, 적절한 함수를 실행
   if (match) {
	 const id = match[1]; // 첫 번째 캡쳐 그룹이 ID
	 // 아티클 상세 페이지 로직을 실행하고, 필요한 ID를 전달
	 articleDetailPage(id);
   } else if (routes[path]) {
	 // 정적 경로에 해당하는 함수를 실행합니다.
	 routes[path]();
   } else {
	 // 경로가 정의되지 않았을 경우, 404 페이지 로직 등을 실행
	 notFoundPage(); // 404 페이지 로직을 위한 함수 호출
   }
 }
  // 페이지 로드 시 및 URL 변경 시 라우터 함수 실행
  window.addEventListener('DOMContentLoaded', router);
  window.addEventListener('popstate', router);

  // 아티클 상세 페이지를 처리하는 함수
function articleDetailPage(id) {
	fetch(`'/__data__/articleDetail.json`)
	.then(response => response.json())
	.then(article => {
	  // Detail.js에 정의된 contentTemplate를 사용하여 HTML을 구성
	  const mainContent = document.getElementById('main');
	  mainContent.innerHTML = contentTemplate({
		createdDate: article.createdDate,
		title: article.title,
		image: article.image,
		detailContent: article.content
	  });
	})
	.catch(error => console.error('Error fetching article details:', error));
	console.log(`Loading article with ID: ${id}`);
  }
  

  function notFoundPage() {
	console.log('404 Not Found');
  }