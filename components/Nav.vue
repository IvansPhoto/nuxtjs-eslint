<template>
	<nav>
		<div id="NavDesktop">
			<nuxt-link exact-active-class="activeLink" :to="localePath('/')">
				{{ $t('Nav.Hemoflex') }}
			</nuxt-link>
			<nuxt-link exact-active-class="activeLink" :to="localePath('/efficiency')">
				{{ $t('Nav.Efficiency') }}
			</nuxt-link>
			<nuxt-link exact-active-class="activeLink" :to="localePath('/how-to-use')">
				{{ $t('Nav.HowToUse') }}
			</nuxt-link>
			<nuxt-link exact-active-class="activeLink" :to="localePath('/shops')">
				{{ $t('Nav.WhereToBuy') }}
			</nuxt-link>
			<nuxt-link exact-active-class="activeLink" :to="localePath('/contacts')">
				{{ $t('Nav.Contacts') }}
			</nuxt-link>
			<LangSwitcher />
		</div>
		<transition name="showingMenu">
			<div v-if="showNavMobile" id="NavMobile">
				<div class="showingMenuItems" @click="showNavMobile = !showNavMobile">
					<nuxt-link exact-active-class="activeLink" :to="localePath('/')">
						{{ $t('Nav.Hemoflex') }}
					</nuxt-link>
					<nuxt-link exact-active-class="activeLink" :to="localePath('/efficiency')">
						{{ $t('Nav.Efficiency') }}
					</nuxt-link>
					<nuxt-link exact-active-class="activeLink" :to="localePath('/how-to-use')">
						{{ $t('Nav.HowToUse') }}
					</nuxt-link>
					<nuxt-link exact-active-class="activeLink" :to="localePath('/contacts')">
						{{ $t('Nav.Contacts') }}
					</nuxt-link>
					<nuxt-link exact-active-class="activeLink" :to="localePath('/shops')">
						{{ $t('Nav.WhereToBuy') }}
					</nuxt-link>
					<LangSwitcher />
				</div>
			</div>
		</transition>
		<input
			type="image"
			src="/BloodDroplet.svg"
			:class="{ buttonRotate: showNavMobile }"
			class="button buttonInitialState"
			aria-label="Menu button"
			alt=""
			@click="showNavMobile = !showNavMobile"
		>
		<button :key="isDarkTheme" class="changeColor" aria-label="The button to change color scheme" @click="darkTheme">
			<span class="changeColorText">{{ isDarkTheme ? 'Light' : 'Dark' }}</span>
		</button>
	</nav>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
	name: 'Nav',
	components: {
		LangSwitcher
	},
	data () {
		return {
			showNavMobile: false,
			isDarkTheme: false
		}
	},
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	},
	methods: {
		darkTheme () {
			const bodyStyle = document.body.style
			if (this.isDarkTheme) {
				bodyStyle.setProperty('--colorFont', 'rgb(41, 41, 41)')
				bodyStyle.setProperty('--colorBackground', 'rgb(250, 250, 250)')
				bodyStyle.setProperty('--colorFontGrey', 'rgb(48, 48, 48)')
				bodyStyle.setProperty('--colorBackgroundGrey', 'rgb(214, 214, 214)')
			} else {
				bodyStyle.setProperty('--colorFont', 'rgb(250, 250, 250)')
				bodyStyle.setProperty('--colorBackground', 'rgb(41, 41, 41)')
				bodyStyle.setProperty('--colorFontGrey', 'rgb(214, 214, 214)')
				bodyStyle.setProperty('--colorBackgroundGrey', 'rgb(48, 48, 48))')
			}
			this.isDarkTheme = !this.isDarkTheme
		}
	}
}
</script>

<style lang="scss">
@import "assets/scss/scss-variables";

	.showingMenu-enter-active,
	.showingMenu-leave-active {
		transition: opacity 1.5s;
	}

	.showingMenu-enter,
	.showingMenu-leave-to {
		opacity: 0;
	}
	.activeLink {
		color: var(--colorRed);
	}

	.UpCa {
		text-transform: uppercase;
	}

	.lang {
		height: 2rem;
	}
	nav {
		width: 100%;
	}
	#NavDesktop {
		min-height: $footer-min-height;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		font-size: 1.5rem;
		border-bottom: 0.1rem solid var(--colorRed);
		z-index: 10;
		color: var(--colorFont);
		background-color: var(--colorBackground);

		> * {
			cursor: pointer;
		}
	}

	#NavMobile {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		max-width: 35vw;
		min-width: 20rem;
		display: flex;
		font-size: 1.5rem;
		padding-top: 3em;
		padding-left: 3em;
		color: var(--colorFont);
		background-color: var(--colorBackground);
		border-left: var(--colorRed) solid 0.1rem;
		transition: opacity 0.3s;
		z-index: 10;

		.showingMenuItems {
			display: flex;
			flex-direction: column;
			cursor: pointer;

			> * {
				margin: 1rem 0;
			}
		}
	}

	.mobileLang {
		display: flex;
		align-items: center;

		> * {
			margin-right: 1rem;
		}
	}

	.button {
		all: unset;
		cursor: pointer;
		position: fixed;
		top: 1rem;
		right: 1rem;
		width: 3rem;
		height: 3rem;
		z-index: 100;

		.nav-image {
			height: 2.7rem;
		}
	}

	.buttonInitialState {
		transition: all 0.3s;
	}

	.buttonRotate {
		transform: scale(0.75);
	}

	.changeColor {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		bottom: 1rem;
		left: 1rem;
		width: auto;
		height: 1.5rem;
		border: none;
		border-radius: 0.75rem;
		color: var(--colorBackground);
		background-color: var(--colorFont);
		padding: 0 0.5em;
		z-index: 100;
	}

	.changeColorSVG {
		display: none;
	}

	@media (max-width: 1000px) {
		#NavDesktop {
			display: none;
		}

		#NavMobile {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			min-width: 100%;
			margin: 0;
			padding: 1rem 2rem;
			box-sizing: border-box;

			> * {
				font-size: 2.5rem;
			}
		}

		.button {
			width: 2rem;
			height: 2rem;
			box-sizing: border-box;
			.nav-image {
				height: 1.8rem;
			}
		}

		.changeColor {
			width: 1.5rem;
			padding: 0;
			left: unset;
			right: 1rem;
			border: 0.1rem solid var(--colorRed);
			box-sizing: border-box;
		}

		.changeColorText {
			display: none;
		}

		.changeColorSVG {
			display: block;
		}
	}
</style>
