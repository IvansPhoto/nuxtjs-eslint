<template>
	<main id="Contacts">
		<h1>{{ $t('ContactsH1') }}</h1>
		<div id="Address">
			<p>
				<strong>{{ $t('OurAddress') }}</strong>
			</p>
			<p>{{ $t('Address1') }}</p>
			<p>{{ $t('Address2') }}</p>
			<p>+7 812 385-14-15</p>
			<p>WhatsApp: +7 911 166-33-01</p>
			<p>mail@hemoflex.ru</p>
		</div>

		<form netlify name="contact" method="POST" netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
			<label style="display: none">Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>

			<label for="Name">{{ $t('Name') }}:</label>
			<input
				id="Name"
				:key="name"
				v-model="userName"
				type="text"
				name="name"
				:placeholder="[[$t('NameText')]]"
				required
			/>

			<label for="Email">Email:</label>
			<input
				id="Email"
				:key="email"
				v-model="userEmail"
				type="email"
				name="email"
				:placeholder="[[$t('EmailText')]]"
				required
			/>

			<label for="Telephone">{{ $t('Phone') }}:</label>
			<input
				id="Telephone"
				:key="telephone"
				v-model="userTelephone"
				type="tel"
				name="telephone"
				:placeholder="[[$t('PhoneText')]]"
				required
			/>

			<label for="Role">{{ $t('Role') }}:</label>
			<input id="Role" :key="role" v-model="userRole" type="text" name="role" :placeholder="[[$t('RoleText')]]" />

			<label for="Message">{{ $t('Message') }}:</label>
			<textarea
				id="Message"
				:key="message"
				v-model="userMessage"
				name="message"
				:placeholder="[[$t('MessageText')]]"
				autocomplete="off"
				rows="4"
				cols="50"
				required
			></textarea>

			<div data-netlify-recaptcha="true"></div>

			<button>{{ $t('Send') }}</button>
		</form>
	</main>
</template>

<script>
	export default {
		scrollToTop: true,
		name: 'Contacts',
		data() {
			return { userName: '', userEmail: '', userTelephone: '', userRole: '', userMessage: '' };
		},
		methods: {
			createFormDataObj(data) {
				const formData = new FormData();
				for (const key of Object.keys(data)) {
					formData.append(key, data[key]);
				}
				return formData;
			},
			handleSubmit() {
				const data = {
					'form-name': 'contact',
					name: this.userName,
					email: this.userEmail,
					telephone: this.userTelephone,
					role: this.userRole,
					message: this.userMessage
				};

				fetch('/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: new URLSearchParams(this.createFormDataObj(data)).toString()
				})
					.then(() => this.$router.push('response'))
					.catch((error) => alert(error));
			}
		},
		head() {
			return {
				title: this.$t('TitleCon'),
				meta: [{ hid: 'description', name: 'description', content: this.$t('DescriptionCon') }]
			};
		}
	};
</script>

<style lang="scss">
	#Contacts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		justify-items: center;
		justify-content: center;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		color: var(--colorFont);

		input,
		textarea {
			all: unset;
			max-width: 100%;
			white-space: pre-wrap;
			overflow-wrap: break-word;
			margin-bottom: 1.5rem;
			font-size: 1.5rem;
			border-top: none;
			border-left: none;
			border-right: none;
			border-bottom: 0.1rem solid var(--colorFont);
		}

		form {
			width: 35vw;
			font-size: 1.5rem;
			display: flex;
			flex-direction: column;
		}

		label {
			font-size: 1.5rem;
		}

		button {
			width: 100%;
			height: 3rem;
			font-size: 1.5rem;
			color: var(--colorFont);
			text-transform: uppercase;
			text-align: center;
			background-color: var(--colorRed);
			border: none;
		}

		h1 {
			align-self: flex-end;
			justify-self: center;
			grid-column: 1 / 3;
			margin: 3rem 0 2rem 0;
		}
	}

	#Address {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 1000px) {
		#Contacts {
			grid-template-columns: 1fr;
			grid-auto-rows: auto;
			gap: 1.5rem;
			justify-items: stretch;

			button {
				font-size: 1.25rem;
			}

			h1 {
				grid-column: span 1;
			}

			form {
				width: 80vw;
			}
		}
	}
</style>
