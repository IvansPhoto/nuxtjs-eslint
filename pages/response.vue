<template>
	<main id="Response">
		<h1>{{ $t('ResponseHeader') }}</h1>
		<p>{{ $t('ResponseThanks') }}</p>
		<p>{{ $t('ResponseOurTeam') }}</p>
		<nuxt-link class="linkWrapper" to="/">
			{{ $t('GoHomePage') }}
		</nuxt-link>
	</main>
</template>

<script>
export default {
	name: 'MessageReceived',
	scrollToTop: true,
	head () {
		return {
			title: 'Message received',
			meta: [{ hid: 'description', name: 'description', content: 'Contacts form response' }]
		}
	}
}
</script>

<style lang="scss">
	#Response {
		// height: 85vh;
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
