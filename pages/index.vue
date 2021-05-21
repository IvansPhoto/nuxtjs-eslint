<template>
	<main id="AboutHemoflex">
		<h1 id="Header">
			{{ $t('Hemoflex') }}<span>®</span>
		</h1>
		<section>
			<!-- Has been developed by Ivan Pavlov. -->
			<div class="section-images">
				<img v-if="IsLocaleRU" id="Hemoflex-package-img" src="~assets/img/package/ru/Hemoflex-RU-130x107-p1.svg" alt="Hemoflex package">
				<picture v-else>
					<source
						srcset="
							~assets/img/package/en/Hemoflex-EN-130x107-2000px.webp 2000w,
							~assets/img/package/en/Hemoflex-EN-130x107-750px.webp  1500w,
							~assets/img/package/en/Hemoflex-EN-130x107-1000px.webp 1000w,
							~assets/img/package/en/Hemoflex-EN-130x107-500px.webp   500w
						"
						type="image/webp"
						sizes="(max-width: 1000px) 85vw, (max-width: 1440px) and (min-width: 901px) 55vw, 45wv"
					>
					<source
						srcset="
							~assets/img/package/en/Hemoflex-EN-130x107-2000px.png 2000w,
							~assets/img/package/en/Hemoflex-EN-130x107-750px.png  1500w,
							~assets/img/package/en/Hemoflex-EN-130x107-1000px.png 1000w,
							~assets/img/package/en/Hemoflex-EN-130x107-500px.png   500w
						"
						type="image/png"
						sizes="(max-width: 1000px) 85vw, (max-width: 1440px) and (min-width: 901px) 55vw, 45wv"
					>
					<img
						id="Hemoflex-package-img"
						src="~assets/img/package/en/Hemoflex-EN-130x107-1000px.png"
						alt="Hemoflex package"
						loading="lazy"
					>
				</picture>
			</div>
			<div class="section-content">
				<h2>{{ $t('TopHemAgent') }}</h2>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
				<p><strong>{{ $t('Hemoflex') }}<span>®</span></strong> {{ $t('HemoDescr') }}</p>
			</div>
		</section>

		<section v-if="!showVideo" class="video">
			<input
				class="YouTubeVideo"
				type="image"
				src="/hemoflex-video-poster-1000px.webp"
				alt="video"
				@click="showVideo = !showVideo"
			>
		</section>
		<section v-else-if="IsLocaleRU" class="video">
			<client-only placeholder="Loading...">
				<iframe
					class="YouTubeVideo"
					src="https://www.youtube.com/embed/FkPQVyTM4-Q"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</client-only>
		</section>
		<section v-else class="video">
			<client-only placeholder="Loading...">
				<iframe
					class="YouTubeVideo"
					src="https://www.youtube.com/embed/Bm5frp3CZLQ"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</client-only>
		</section>

		<LinkToDownload />

		<LinkInFooter link-rout="/efficiency" :link-text="$t('Nav.Efficiency')" />
	</main>
</template>

<script>
import LinkInFooter from '../components/LinkInFooter'
import LinkToDownload from '../components/LinkToDownload'

export default {
	name: 'Index',
	components: {
		LinkInFooter,
		LinkToDownload
	},
	scrollToTop: true,
	data () {
		return {
			showVideo: false
		}
	},
	head () {
		return {
			title: this.$t('TitleIndex'),
			meta: [{
				hid: 'description',
				name: 'description',
				content: this.$t('DescriptionIndex')
			}]
		}
	},
	methods: {
		IsLocaleRU () {
			return this.$i18n.locale === 'ru'
		},
		IsLocaleEN () {
			return this.$i18n.locale === 'en'
		}
	}
}
</script>

<style lang="scss">
#AboutHemoflex {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	justify-content: center;
	h2 {
		text-align: center;
	}
	section {
		display: grid;
		width: 70vw;
		grid-template-columns: 1fr 1fr;
		align-items: start;

		.video {
			grid-column: 1 / 3;
		}
		.section-images {
			display: flex;
			flex-direction: column;
		}
	}
}

ul {
	margin: 0;
}

li {
	font-size: 1.25rem;
	padding-top: 0.25em;
	padding-bottom: 0.25em;

	:first-child {
		padding-top: 0;
	}

	:last-child {
		padding-bottom: 0;
	}
}

.linkInFooter {
	margin-top: 6rem;
}

#Hemoflex-package-img {
	height: calc(var(--section-content-width) * 0.607);
	width: 30vw;
}

.YouTubeVideo {
	width: calc(var(--section-content-width) + 20vw);
	height: calc((var(--section-content-width) + 20vw) / 16 * 9);
}

@media (max-width: 1000px) {
	.linkInFooter {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	#Hemoflex-package-img {
		height: calc(var(--mainWidth) * 0.65);
	}
	#SolderMedicalTent-img {
		height: calc(var(--mainWidth) * 0.488);
	}
	#Hemoflex-application-img {
		height: calc(var(--mainWidth) * 0.535);
	}
	#Innovation-img {
		height: calc(var(--mainWidth) * 0.5);
	}

	.YouTubeVideo {
		width: var(--mainWidth);
		height: calc(var(--mainWidth) / 16 * 9);
	}
}
</style>
