<template>
	<footer>
		<p>{{ $t('RightsReserved') }} {{ new Date().getFullYear() }}<span>©</span></p>
		<nuxt-link :to="localePath('/terms-of-use')" no-prefetch>
			{{ $t('TermsOfUse') }}
		</nuxt-link>
		<nuxt-link :to="localePath('/privacy-policy')" no-prefetch>
			{{ $t('PrivacyPolicy') }}
		</nuxt-link>
		<nuxt-link :to="localePath('/faq')" no-prefetch>
			F.A.Q.
		</nuxt-link>
		<LangSwitcher />
	</footer>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
	name: 'Footer',
	components: {
		LangSwitcher
	}
}
</script>

<style lang="scss">
@import "assets/scss/scss-variables";
	footer {
		width: 100%;
		min-height: $footer-min-height;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 0 1rem;
		border-top: 0.1rem solid var(--colorRed);
		color: var(--colorFont);
		background-color: var(--colorBackground);

		p {
			font-size: 1.5rem;
			text-align: center;
		}
	}

	@media (max-width: 1000px) {
		footer {
			flex-direction: column;
			justify-content: center;
			align-items: center;

			p {
				padding: 0.5em;
				font-size: 1rem;
			}
		}
	}
</style>
