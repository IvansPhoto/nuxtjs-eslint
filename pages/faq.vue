<template>
	<main id="FAQ">
		<h1>{{ $t('FAQ.FAQ') }}</h1>
		<h2>{{ $t('FAQ.P1.question') }}</h2>
		<p>{{ $t('FAQ.P1.answer') }}</p>
		<h2>{{ $t('FAQ.P2.question') }}</h2>
		<p>{{ $t('FAQ.P2.answer') }}</p>
		<h2>{{ $t('FAQ.P3.question') }}</h2>
		<p>{{ $t('FAQ.P3.answer') }}</p>
		<h2>{{ $t('FAQ.P4.question') }}</h2>
		<p>{{ $t('FAQ.P4.answer') }}</p>
		<h2>{{ $t('FAQ.P4.question') }}</h2>
		<p>{{ $t('FAQ.P4.answer') }}</p>
	</main>
</template>

<script>
export default {
	name: 'HowToUse',
	scrollToTop: true,
	head () {
		return {
			title: 'F.A.Q.',
			meta: [{ hid: 'description', name: 'description', content: this.$t('FAQ.Description') }]
		}
	}
}
</script>

<style lang="scss">
	#FAQ {
		align-items: flex-start;
		padding: 0 1.5rem;
		margin-bottom: 3rem;
		h1 {
			margin-top: 7rem;
		}
		h2 {
			padding-top: 3rem;
		}
		p {
			padding-top: 1rem;
			padding-left: 2rem;
		}
	}
	@media (max-width: 1000px) {
		#FAQ {
			h2 {
				padding-top: 2rem;
			}
			p {
				padding-top: 0.5rem;
				padding-left: 0;
			}
		}
	}
</style>
