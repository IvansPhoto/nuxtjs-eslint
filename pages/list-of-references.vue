<template>
	<main id="Reference">
		<h2 style="margin: 0">
			The list of reference
		</h2>
		<p>
			<strong>1.</strong> Bennett B.L., Littlejohn L. Review of new topical hemostatic dressings for combat casualty
			care // Mil .Med. – 2014. – Vol. 179, № 5. – Р. 497-514.
		</p>
		<p>
			<strong>2.</strong> Granville- Chapman J., Jacobs N., Midwinter M.J. Pre-hospital hemostatic dressings: a
			systematic review // Injury. – 2011. – Vol. 42,№ 5. – P. 447-459.
		</p>
		<p>
			<strong>3.</strong> Mazurek P., Kuliński S., Gosk J. The possibilities of using a chitin and chitosan in wounds
			treatment // Polim. Med. 2013. – Vol. – 43, № 4. – Р. 297-302.
		</p>
		<p>
			<strong>4</strong>. Kheirabadi B. Evaluation of topical hemostatic agents for combat wound treatment // US Army
			Med. Dep. J. – 2011. – Р. 25-37.
		</p>
		<p>
			<strong>5.</strong> Malette W.G., Quigley H.J., Gaines R.D., Johnson N.D., Rainer W.G.Сhitosan: a new hemostatic
			// Ann. Thorac. Surg. – 1983. – Vol. 36,№ 1. – Р. 55-58.
		</p>
		<p>
			<strong>6.</strong> Thatte H.S., Zagarins S., Khuri S.F., Fischer T.H. Mechanisms of poly-N-acetyl glucosamine
			polymer-mediated hemostasis: platelet interactions // J. Trauma. – 2004. – Vol. 51, № 1. – P. S13-S21.
		</p>
		<p>
			<strong>7.</strong> King D.R., Cohn S.M., Proctor K.G. Modiﬁed rapid deployment hemostat bandage terminates
			bleeding in coagulopathic patients with severe visceral injuries // J. Trauma. – 2004. –Vol. 57, № 4. – P.
			756–759.
		</p>
		<p><strong>8.</strong> Russian Federation Invention Patent for No. 2487701 dated 26.07.2011.</p>
		<p><strong>9.</strong> Russian Federation Utility Patent No. 135921 dated 29.04.2013.</p>
		<p>
			<strong>10.</strong> Research Report. Pre- clinical study of Hemoflex® Combat hemostatic agent specific activity
			on a swine external artery and vein bleeding model. Saint- Petersburg State Veterinary Academy, 2013.
		</p>
		<p>
			<strong>11.</strong> The testing protocol. The Clinical Microbiology Center of the Pavlov’s First St. Petersburg
			State Medical University, 2013.
		</p>
		<p>
			<strong>12.</strong> Hemoflex Pro and Hemoflex Combat Sterile Hemostatic Agent Clinical Testing Protocol. Clinical
			Microbiology Center of the Pavlov’s First St. Petersburg State Medical University, 2014.
		</p>
	</main>
</template>

<script>
export default {
	name: 'ListOfReferences',
	scrollToTop: true,
	head () {
		return {
			title: 'The list of references',
			meta: [{ hid: 'description', name: 'description', content: 'The list of references' }]
		}
	}
}
</script>

<style lang="scss">
	#Reference {
		padding: 3em 19vw;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		p {
			margin: 1em 0;
		}
	}

	@media (max-width: 800px) {
		#Reference {
			padding: 1rem 5vw;
		}
	}
</style>
