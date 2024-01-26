export async function articleDetailPage(id) {
	try {
		const response = await fetch(`/__data__/articleDetail.json`)
		const article = await response.json()
		return {
			createdDate: article[id].createDate,
			title: article[id].title,
			image: article[id].image,
			detailContent: article[id].content
		}
	} catch (error) {
		return console.error('아티클 상세 데이터 가져오기 실패:', error)
	}
}
