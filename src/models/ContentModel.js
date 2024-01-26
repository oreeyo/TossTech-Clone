// ContentModel.js - 데이터를 관리합니다.
class ContentModel {
  constructor() {
    this.articles = [] // 데이터 저장을 위한 배열
  }
  async loadArticles() {
    return await fetch('/__data__/articleList.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('네트워크 에러')
        }
        return response.json()
      })
      .catch(error => {
        console.error('아티클 가져오기 실패:', error)
      })
  }
}

export default ContentModel
