<template>
	<main id="Response">
		<h1>The page not found.</h1>
		<nuxt-link class="linkWrapper" :to="localePath('/')">
			{{ $t('GoHomePage') }}
		</nuxt-link>
	</main>
</template>

<script>
export default {
	name: 'PageNotFound',
	head () {
		return {
			title: '404 - Page not found',
			meta: [{ hid: 'description', name: 'description', content: '404 - Page not found' }]
		}
	}
}
</script>

<style lang="scss">
	#Response {
		height: 85vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		> * {
			margin: 1rem 0;
		}
	}

	.linkWrapper {
		font-size: 2rem;
		padding: 1em 0;
	}
</style>
