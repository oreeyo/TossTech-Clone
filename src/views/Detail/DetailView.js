import './Detail.css'

export const showArticleDetail = articleItem => ` 
<main id="main">
  <div id="detail_container">
    <div id="detail_inner_container">
      <div id="detail_img_container">
        <img src="${articleItem.image}" alt="대표이미지" />
      </div>
      <section>
        <div id="detail_title_container">
          <h1>${articleItem.title}</h1>
        </div>
        <div id="detail_createdDate_container">
          <p>${formatDate(articleItem.createdDate)}</p>
        </div>
        <div id="detail_content_container">
          <p>${articleItem.detailContent}</p>
        </div>
      <section>
    </div>
  </div>
</main>
`
const formatDate = dateString => {
	const [year, month, day] = dateString.match(/(\d{4})(\d{2})(\d{2})/).slice(1)
	console.log(`${year}-${month}-${day}`)
	return `${year}-${month}-${day}`
}
