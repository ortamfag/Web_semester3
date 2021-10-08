<template>
	<main class="main">
		<h1 class="title">Это новости</h1>
		<router-link to="/news" class="news-link">Посмотреть новости</router-link>
	</main>
</template>

<style lang="scss" scoped>
.main {
	padding: 30px;
	height: calc(100vh - $header-height);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.title {
	margin-top: 50px;
	text-align: center;	
	font-weight: 400;
	font-size: 2em;
}

.news-link {
	margin-top: 20px;
	font-size: 1.3em;
	background-color: $primary-bg;
	color: #fff;
	padding: 8px 32px;
	border-radius: 3px;
	font-weight: 100;
}
</style>
