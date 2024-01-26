import './Detail.css'

export const contentTemplate = (createdDate, title, image, detailContent) => ` 
<main id="main">
  <div id="detail_container">
    <div id="detail_inner_container">
      <div id="detail_img_container">
        <img src="${image}" alt="대표이미지" />
      </div>
      <section>
        <div id="detail_title_container">
          <h1>${title}</h1>
        </div>
        <div id="detail_createdDate_container">
          <p>${formatDate(createdDate)}</p>
        </div>
        <div id="detail_content_container">
          <p>${detailContent}</p>
        </div>
      <section>
    </div>
  </div>
</main>
`

const contentComponet = articleItem => {
	console.log(createdDate)
	const { created_date: createdDate, detailContent, thumbnail_image: image, title } = articleItem
	const main = document.getElementById('main')
	main.innerHTML = contentTemplate(createdDate, detailContent, image, title)
}

export const formatDate = dateString => {
	const [year, month, day] = dateString.createdDate.match(/(\d{4})(\d{2})(\d{2})/).slice(1)
	console.log(`${year}-${month}-${day}`)
	return `${year}-${month}-${day}`
}

export default contentComponet
