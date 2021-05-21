<template>
	<div class="link-to-download">
		<a v-if="IsLocaleRU" href="/About-Hemoflex.pdf" download="/About-Hemoflex.pdf" target="_blank">
			<img class="link-to-download--icon" src="~assets/img/download-pdf.svg" alt="Download icon" loading="lazy">
			<p>Гемофлекс<span>®</span> {{ $t('Brochure') }}</p>
		</a>
		<!--TODO:Change the english brochure-->
		<a v-else href="/brochure-hemoflex-2018.pdf" download="/About-Hemoflex.pdf" target="_blank">
			<img class="link-to-download--icon" src="~assets/img/download-pdf.svg" alt="Download icon" loading="lazy">
			<p>Hemoflex<span>®</span> {{ $t('Brochure') }}</p>
		</a>
	</div>
</template>

<script>
export default {
	name: 'LinkToDownload',
	methods: {
		IsLocaleRU () {
			return this.$i18n.locale === 'ru'
		}
	}
}
</script>

<style lang="scss">
	.link-to-download {
		margin: 5.5rem calc((100% - var(--mainWidt)) / 2);

		a {
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}

		p {
			font-size: 2.5rem;
			margin-left: 1rem;
		}
	}

	.link-to-download--icon {
		height: 5rem;
		width: 5rem;
	}

	@media (max-width: 1000px) {
		.link-to-download {
			margin: 3rem 1rem;

			p {
				font-size: 1.5rem;
				margin-left: 1rem;
			}
		}

		.link-to-download--icon {
			height: 4rem;
			width: 4rem;
		}
	}
</style>
