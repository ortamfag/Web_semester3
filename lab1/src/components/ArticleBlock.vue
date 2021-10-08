<template>
	<div class="article">	
		<h3 class="article__title">{{ name }}</h3>
		<p class="article__body">{{ desc }}</p>
		<div class="article__footer">
			<div class="article__date">{{ date }}</div>


			<div v-if="!showFull">
				<router-link
					:to="{ name: 'Article', params: { id: id } }"
					class="article__link"
				>
					Посмотреть полностью
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		name: String,
		desc: String,
		date: String,
		showFull: Boolean
	},
}
</script>

<style lang="scss" scoped>
.article {
	&__body {
		margin: 20px 0;
	}

	&__footer {
		display: flex;
		justify-content: space-between;
		font-weight: bolder;
	}
}
</style>