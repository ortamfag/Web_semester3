import { createStore } from 'vuex'

export default createStore({
	state: {
		news: [],
	},
	mutations: {
		updateNews(state, news) {
			state.news = news
		},
	},
	actions: {
		async fetchNews({ commit }) {
			const res = await fetch('/articles.json')
			const data = await res.json()
			
			commit('updateNews', data)
		},
	},

	getters: {
		getArticleById: state => id => {
			return state.news.find(article => article.id === id)
		},
	},
})
