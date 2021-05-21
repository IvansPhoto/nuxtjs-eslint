<template>
	<main id="Efficiency">
		<div id="Header">
			<h1>{{ $t('ProvenH1') }}</h1>
		</div>

		<section id="Blood">
			<div class="section-header">
				<h2>{{ $t('PreStudies') }}<span>10</span></h2>
			</div>
			<div class="section-content">
				<p>{{ $t('PreStudiesText1') }}.</p>
				<p class="pictureSign">
					{{ $t('PreStudiesText2') }}.
				</p>
				<div class="bloodComparison" style="grid-template-columns: 1fr 3fr">
					<div class="frontBox" style="background: var(--colorRed)">
						<svg
							class="image"
							viewBox="0 0 802 1080"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xml:space="preserve"
							style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
						>
							<g transform="matrix(0.75,0,0,1,0,0)">
								<g transform="matrix(-30.2989,-0.00234372,-0.00315613,22.4997,4773.55,-4955.82)">
									<path
										d="M139.688,220.276C139.688,220.276 157.48,237.87 157.478,250.005C157.477,260.776 149.505,268.277 139.688,268.276C129.87,268.275 121.921,260.894 121.922,250.001C121.924,237.866 139.688,220.276 139.688,220.276"
										style="fill: white; fill-rule: nonzero"
									/>
								</g>
								<g transform="matrix(-30.2989,-0.00290229,-0.00390832,22.4997,4773.67,-4902.91)">
									<path
										d="M139.686,223.721C139.686,223.721 154.058,237.93 154.056,247.729C154.055,256.427 147.614,262.484 139.686,262.483C131.759,262.482 125.341,256.523 125.342,247.725C125.344,237.926 139.686,223.721 139.686,223.721"
										style="fill: rgb(215, 35, 35); fill-rule: nonzero"
									/>
								</g>
							</g>
						</svg>
						<p v-if="this.$i18n.locale === 'ru'" class="pfB">
							Гемофлекс®
						</p>
						<p v-else class="pfB">
							Hemoflex®
						</p>
					</div>
					<p class="backgroundBox">
						248g
					</p>
				</div>
				<div class="bloodComparison" style="grid-template-columns: 3fr 1fr">
					<div class="frontBox" style="background: rgb(128, 128, 128)">
						<p class="pfB">
							{{ $t('ControlGroup') }}
						</p>
					</div>
					<p class="backgroundBox">
						396g
					</p>
				</div>
			</div>
		</section>

		<section id="Microbiology">
			<div class="section-header">
				<h2>{{ $t('MicroStudies') }}<span>11</span></h2>
			</div>
			<div class="section-content">
				<p>{{ $t('MicroStudiesText') }}</p>
				<div class="bacterialTableWrapper">
					<div class="bacterialTable">
						<p style="grid-row: span 2">
							<strong>{{ $t('Culture') }}</strong>
						</p>
						<p style="grid-column: span 5">
							<strong>{{ $t('ContactTime') }}</strong>
						</p>
						<p style="grid-row: span 2">
							<strong>{{ $t('Control') }}</strong>
						</p>
						<p>3</p>
						<p>6</p>
						<p>8</p>
						<p>12</p>
						<p>24</p>
						<p>S. Aureus ATCC 29213</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>480 {{ $t('Colonies') }}</p>
						<p>E. Coli ATCC 25922</p>
						<p>10 {{ $t('Colonies') }}</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>95 {{ $t('Colonies') }}</p>
						<p>S. Pyogenes (clinical isolate)</p>
						<p>20 {{ $t('Colonies') }}</p>
						<p>17 {{ $t('Colonies') }}</p>
						<p>4 {{ $t('Colonies') }}</p>
						<p>-</p>
						<p>-</p>
						<p>27 {{ $t('Colonies') }}</p>
						<p>C. Albicans ATCC 90028</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>-</p>
						<p>6 {{ $t('Colonies') }}</p>
						<p style="border: none !important">
							Myc. Smegmatis ATCC 437RW
						</p>
						<p style="border: none !important">
							±±
						</p>
						<p style="border: none !important">
							±±
						</p>
						<p style="border: none !important">
							±
						</p>
						<p style="border: none !important">
							-
						</p>
						<p style="border: none !important">
							-
						</p>
						<p style="border: none !important">
							±±
						</p>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="section-header">
				<h2>{{ $t('Testing') }}<span>12</span></h2>
			</div>
			<div class="section-content">
				<img src="~assets/img/Chart.svg" alt="Chart">
				<p>{{ $t('TestingText') }}</p>
			</div>
		</section>

		<LinkToDownload />

		<LinkInFooter link-rout="/how-it-works" :link-text="$t('Nav.HowItWorks')" />
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
			showReferences: false
		}
	},
	head () {
		return {
			title: this.$t('TitleEf'),
			meta: [{ hid: 'description', name: 'description', content: this.$t('DescriptionEf') }]
		}
	}
}
</script>

<style lang="scss">
	.bloodComparison {
		display: grid;
		height: calc(var(--tableCellHeight) * 0.75);
		align-items: center;
		align-content: center;
		justify-items: stretch;
		justify-content: center;
		margin: 0.5em 0;
		background: rgb(196, 196, 196);
		border-radius: 0 2em 2em 0;
	}

	.frontBox {
		height: calc(var(--tableCellHeight) * 0.75);
		border-radius: 0 2em 2em 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.image {
			height: calc(var(--tableCellHeight) * 0.35);
			margin: 0.5em 0 0;
		}

		.pfB {
			color: white;
			margin: 0.2em;
			font-size: 1.75rem;
		}
	}

	.backgroundBox {
		place-self: center;
		font-size: 3rem;
	}

	.pictureSign {
		margin-top: 2em;
	}

	.bacterialTableWrapper {
		margin: 0 !important;
		padding: 0 !important;
	}

	.bacterialTable {
		display: grid;
		grid-template-columns: 12rem repeat(5, 1fr) 6rem;
		grid-auto-rows: 4.5rem;
		align-items: center;
		justify-items: center;
		margin: 1em 0;
		color: var(--colorFontGrey);
		background-color: var(--colorBackgroundGrey);
		border-radius: 0.75rem;
		box-sizing: border-box;
		overflow: auto;
		scrollbar-width: 0.5rem;

		> * {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 0.1rem solid var(--colorRed);
			text-align: center;
			font-size: 1rem;
		}
	}

	@media (max-width: 800px) {
		.backgroundBox {
			font-size: 1.5rem;
		}

		.frontBox .pfB {
			font-size: 1.5rem;
		}

		.section-how-to-use .image {
			height: 15rem;
		}

		.bacterialTableWrapper {
			overflow: auto;
		}

		.bacterialTable {
			grid-template-columns: 22rem repeat(5, 8rem) 9rem;
			grid-auto-rows: 3.5rem;
			border-radius: 0;
			overflow: auto;
		}

		#Microbiology {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
