<template>
	<div class="langSwitcher">
		<img src="~assets/img/Web-icon.svg" alt="Lang" class="langSwitcherImg" sizes="2rem">
		<nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="UpCa">
			{{ locale.code }}
		</nuxt-link>
		<!-- TODO: Add Quality link. -->
		<!--    <p>Quality</p>-->
	</div>
</template>

<script>
export default {
	name: 'LangSwitcher',
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
}
</script>

<style lang="scss">
	.langSwitcher {
		display: flex;
		align-items: center;
		justify-items: center;
		a {
			padding: 0 0 0 1rem;
		}
		.langSwitcherImg {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
