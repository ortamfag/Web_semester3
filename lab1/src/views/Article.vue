<template>
	<main class="main">
		<ArticleBlock
			v-if="article"
			:key="article.id"
			v-bind="article"
			showFull
		/>
		<div v-else>Такой статьи не существует</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleBlock from '@/components/ArticleBlock'

export default {
	components: { ArticleBlock },

	computed: {
		article() {
			const id = +this.$route.params.id

			return this.getArticleById(id);
		},

		...mapGetters(['getArticleById'])
	}
}
</script>
