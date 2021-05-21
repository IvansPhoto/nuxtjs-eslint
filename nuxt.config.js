export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'hemoflex-nuxt-i18n',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Hemoflex' }
		],
		link: [{ rel: 'icon', type: 'image/svg+xml', href: '/BloodDroplet.svg' }]
	},

	loading: { color: 'rgb(210, 35, 35)' },

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/scss/main.scss'],
	pageTransition: 'main-transition',

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'nuxt-i18n'
	],
	eslint: {
		formatter: 'codeframe'
	},
	i18n: {
		baseUrl: 'https://www.hemoflex.ru',
		strategy: 'prefix_and_default',
		seo: true,
		lazy: true,
		defaultLocale: 'en',
		langDir: 'locales/',
		locales: [
			{ code: 'en', iso: 'en', file: 'en.js' },
			{ code: 'ru', iso: 'ru', file: 'ru.js' }
		],
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			onlyOnRoot: false
		}
	},
	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
