<template>
	<main id="TermsOfUse">
		<h1>TERMS OF USE</h1>
		<p>
			In accordance with article 437 of the Civil Code of the Russian Federation, this document is an official public
			offer that determines the conditions for the use of materials and services posted on the website at the following
			address: <a href="www.hemoflex.com" class="link-animation">www.hemoflex.com"</a> by visitors and users of this
			website (hereinafter referred to as the “Site”).
		</p>
		<h2>1. General conditions</h2>
		<p>1.1. The website is created in order to inform visitors about the Hemoflex® hemostatic agent.</p>
		<p>
			1.2. The use of materials and services of the Site is governed by the applicable laws of the Russian Federation.
		</p>
		<p>1.3. By accessing the materials of the Site, the User is considered to have acceded to this agreement.</p>
		<h2>2. User Responsibilities</h2>
		<p>
			2.1. The user agrees not to take actions and not to leave comments and entries that may be considered as violating
			Russian law or international law, including in the field of intellectual property, copyright and/or related
			rights, universally accepted norms of morality, as well as any actions, that lead or may lead to violation of the
			normal operation of the Site and services of the Site.
		</p>
		<p>2.2. Using the materials of the Site without the consent of the copyright holders is not allowed.</p>
		<p>2.3. When quoting materials from the Site, including copyrighted works, a link to the Site is required.</p>
		<p>
			2.4. The Site Administration is not liable for visiting and using external resources, links to which may be
			contained on the Site.
		</p>
		<p>
			2.5. The Site Administration is not liable and does not have direct or indirect obligations to the User in
			connection with any possible or resulting losses or losses associated with any content of the Site, copyright
			registration and information about such registration, goods or services available on or received through external
			sites or resources or other contacts of the User into which he entered using the information posted on the Site or
			links to external resources.
		</p>
		<p>
			2.6. The User agrees that the Site Administration does not bear any responsibility and does not have any
			liabilities in connection with advertising that can be placed on the Site.
		</p>
		<h2>3. Other conditions</h2>
		<p>
			3.1. All possible disputes arising out of or in connection with this Agreement shall be finally settled under the
			current legislation of the Russian Federation.
		</p>
		<p>
			3.2. If a provision of this Agreement is or becomes illegal or unenforceable, it shall not affect the validity or
			enforceability of any other provision of this Agreement.
		</p>
		<p>
			3.3. Inaction on the part of the Site Administration in case of a violation by any of the Users of the provisions
			of the Agreement does not deprive the Site Administration of the right to take later appropriate actions in
			defense of its interests and in defense of the copyright of the Website materials that are protected under the
			laws.
		</p>
		<p>
			3.4. The Site Administration has the right to unilaterally change the terms of this Agreement at any time. Such
			changes shall enter into effect upon posting a new version of the Agreement on the Site. In case of the User's
			disagreement with the changes, they shall have to refuse the access to the Site, to terminate the use of materials
			and services of the Site.
		</p>
		<p>
			3.5. Following the link <a href="http://www.hemoflex.com">www.hemoflex.com</a>, the User confirms that he accepts
			the terms of this Agreement, as well as the Privacy Policy of the Site, which is an integral part of this
			Agreement and posted on the page at
			<a href="http://www.hemoflex.com/privacy-policy/">www.hemoflex.com/privacy-policy/</a>.
		</p>
	</main>
</template>

<script>
export default {
	name: 'TermsOfUse',
	scrollToTop: true
}
</script>

<style lang="scss">
	#TermsOfUse {
		display: flex;
		flex-direction: column;
		width: var(--mainWidt);
		margin: 5rem 0;
		align-self: center;
		justify-self: center;
	}

	@media (max-width: 1000px) {
		#TermsOfUse {
			width: var(--mainWidth);
			padding: 1rem;
		}
	}
</style>
