<template>
	<picture :class="imageClass">
		<source
			:srcset="
				'/images/' +
					imageName +
					'_250.webp 250w,' +
					'/images/' +
					imageName +
					'_500.webp 500w,' +
					'/images/' +
					imageName +
					'_1000.webp 1000w'
			"
			type="image/webp"
			:sizes="finalSizes"
		>
		<source :srcset="'/images/' + imageName + '_1000.png 1000w'" type="image/jpeg">
		<img :sizes="finalSizes" :src="'/images/' + imageName + '_1000.png'" :alt="imageAlt" loading="lazy">
	</picture>
</template>

<script>
export default {
	name: 'Picture',
	props: { imageName: String, imageAlt: String, imageClass: String, imageSizes: String },
	computed: {
		finalSizes () {
			return this.imageSizes === undefined || ''
				? '(max-width: 800px) 90vw, (max-width: 1439px) 500px, 1000px'
				: this.imageSizes
		}
	}
}
</script>
