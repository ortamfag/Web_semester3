<template>
	<header class="header">
		<router-link to="/" class="header__logo">Жидов А.В. 201-322</router-link>

		<nav class="nav">
			<router-link to="/" class="nav__link">Главная</router-link>
			<router-link to="/news" class="nav__link">Ньюс</router-link>
		</nav>
	</header>
	
	<router-view/>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('fetchNews')
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Roboto', sans-serif;
	background-color: #fff;
}

a {
	text-decoration: none;
	color: inherit;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 30px;

	height: $header-height;

	background-color: $primary-bg;
	color: #fff;
	
	&__logo {
		font-size: 1.5em;
	}
}

.nav {
	display: flex;
	gap: 20px;
}

.main {
	padding: 30px;
}
</style>
