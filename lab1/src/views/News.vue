<template>
	<main class="main">
		<div class="news">
			<ArticleBlock 
				v-for="article in news"
				:key="article.id"
				v-bind="article"
			/>
		</div>
	</main>
</template>

<script>
import ArticleBlock from '@/components/ArticleBlock'

export default {
	components: { ArticleBlock },

	computed: {
		news() {
			return this.$store.state.news
		},
	},
}
</script>

<style lang="scss" scoped>
.news {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
}
</style>
