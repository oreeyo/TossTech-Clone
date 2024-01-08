import './Content.css'
import ContentModel from '../../models/ContentModel.js';

class ContentView {
	constructor() {
		this.contentEl = document.getElementById('content')
	}

	renderContent() {
		ContentModel.loadArticles()
		.then(data => {
		  const articlesArray = Object.values(data.articles);
		  const contentHtml = articlesArray.map(article => {
			return `
			<div id="content-area">
			  <div class="article">
				<img src="${article.thumbnail_image}" alt="${article.title}" class="article-image">
				<div class="article-details">
				  <h2 class="article-title">${article.title}</h2>
				  <p class="article-date">${formatDate(article.created_date)}</p>
				  <p class="article-summary">${article.summary}</p>
				</div>
			  </div>
			</div>
			`;
		  }).join('');
		  document.getElementById('content').innerHTML = contentHtml;
		})
		.catch(error => console.error('Error fetching articles:', error));
	  
	  function formatDate(dateString) {
		const [year, month, day] = dateString.match(/(\d{4})(\d{2})(\d{2})/).slice(1);
		return `${year}-${month}-${day}`;
	  }
}
}
export default ContentView
