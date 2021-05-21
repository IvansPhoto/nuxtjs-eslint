<template>
	<div :class="sectionClass">
		<div class="linkWrapper">
			<nuxt-link class="link" :to="localePath(linkRout)">
				<h3>{{ $t(`${linkText}`) }}</h3>
				<input type="image" src="/Arrow.svg" alt="Arrow to the next page">
			</nuxt-link>
		</div>
		<h4>
			<nuxt-link style="cursor: pointer" to="/list-of-references" no-prefetch>
				{{ $t('ListOfReference') }}
			</nuxt-link>
		</h4>
	</div>
</template>

<script>
export default {
	name: 'LinkInFooter',
	props: {
		sectionClass: {
			type: String,
			default: 'nextPage'
		},
		linkRout: String,
		linkText: String
	}
}
</script>

<style lang="scss">
	.nextPage {
		margin: 1rem calc((100% - var(--mainWidt)) / 2);
	}

	.linkWrapper {
		display: flex;
		align-items: center;
		text-transform: uppercase;

		input[type='image'] {
			font-size: 2rem;
			width: 2.5rem;
			height: 2.5rem;
			margin-left: 1rem;
			border: none;
			cursor: pointer;
		}
	}

	.link {
		display: flex;
		align-items: center;
		font-size: 1.75rem;
		margin: 0;
		padding: 0;
		cursor: pointer;
		font-weight: bold;
		color: var(--colorRed);
	}

	.svg {
		margin: 0 1rem;
		height: 2.5rem;
		width: 2.5rem;
	}

	@media (max-width: 1000px) {
		.nextPage {
			margin: 3rem 1rem;
			align-self: flex-start;
			justify-self: flex-start;
		}
	}
</style>
