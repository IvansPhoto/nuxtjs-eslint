<template>
  <main id="WhereToBuy">
    <h1>{{ $t('WhereToBuy.H1') }}</h1>
    <h2>{{ $t('WhereToBuy.locationCode.1') }}</h2>
    <section class="shops">
      <article v-for="shop in getShopsByLocationCode(1)" :key="shop.slug" class="shop-article">
        <a :href="shop.link" target="_blank">
          <picture>
            <source
              :src="getImageRouteWebp(shop.shopIcon)"
              type="image/webp"
              sizes="(max-width: 1000px) 20vw,
						(max-width: 1440px) and (min-width: 901px) 20vw, 90wv"
            >
            <img
              class="shop-img"
              :src="getImageRoutePng(shop.shopIcon)"
              :alt="'Логотип магазина ' + shop.title"
              loading="lazy"
            >
          </picture>
          <h3>{{ shop.title }}</h3>
        </a>
        <p>{{ shop.location[$i18n.locale] }}</p>
      </article>
    </section>
    <h2>{{ $t('WhereToBuy.locationCode.2') }}</h2>
    <section class="shops">
      <article v-for="shop in getShopsByLocationCode(2)" :key="shop.slug" class="shop-article">
        <a :href="shop.link" target="_blank">
          <picture>
            <source
              :src="getImageRouteWebp(shop.shopIcon)"
              type="image/webp"
              sizes="(max-width: 1000px) 20vw,
						(max-width: 1440px) and (min-width: 901px) 20vw, 90wv"
            >
            <img
              class="shop-img"
              :src="getImageRoutePng(shop.shopIcon)"
              :alt="'Логотип магазина ' + shop.title"
              loading="lazy"
            >
          </picture>
          <h3>{{ shop.title }}</h3>
        </a>
        <p>{{ shop.location[$i18n.locale] }}</p>
      </article>
    </section>
    <h2>{{ $t('WhereToBuy.locationCode.3') }}</h2>
    <section class="shops">
      <article v-for="shop in getShopsByLocationCode(3)" :key="shop.slug" class="shop-article">
        <a :href="shop.link" target="_blank">
          <picture>
            <source
              :src="getImageRouteWebp(shop.shopIcon)"
              type="image/webp"
              sizes="(max-width: 1000px) 20vw,
						(max-width: 1440px) and (min-width: 901px) 20vw, 90wv"
            >
            <img
              class="shop-img"
              :src="getImageRoutePng(shop.shopIcon)"
              :alt="'Логотип магазина ' + shop.title"
              loading="lazy"
            >
          </picture>
          <h3>{{ shop.title }}</h3>
        </a>
        <p>{{ shop.location[$i18n.locale] }}</p>
      </article>
    </section>
    <h2>{{ $t('WhereToBuy.locationCode.4') }}</h2>
    <section class="shops">
      <article v-for="shop in getShopsByLocationCode(4)" :key="shop.slug" class="shop-article">
        <a :href="shop.link" target="_blank">
          <picture>
            <source
              :src="getImageRouteWebp(shop.shopIcon)"
              type="image/webp"
              sizes="(max-width: 1000px) 20vw,
						(max-width: 1440px) and (min-width: 901px) 20vw, 90wv"
            >
            <img
              class="shop-img"
              :src="getImageRoutePng(shop.shopIcon)"
              :alt="'Логотип магазина ' + shop.title"
              loading="lazy"
            >
          </picture>
          <h3>{{ shop.title }}</h3>
        </a>
        <p>{{ shop.location[$i18n.locale] }}</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
	async asyncData (ctx) {
		const { $content } = ctx
		const shops = await $content('shops').sortBy('locationCode').fetch()
		return { shops }
	},
	head () {
		return {
			title: this.$t('WhereToBuy.Title'),
			meta: [{ hid: 'description', name: 'description', content: this.$t('WhereToBuy.Description') }]
		}
	},
	computed: {},
	methods: {
		getImageRouteWebp (image) {
			return require(`~/assets/img/shops/${image}.webp`)
		},
		getImageRoutePng (image) {
			return require(`~/assets/img/shops/${image}.png`)
		},
		getShopsByLocationCode (locationCode) {
			return this.shops.filter(c => c.locationCode === locationCode)
		}
	}
}
</script>

<style lang="scss">
	:root {
		--imgageWidth: 20vw;
	}
	#WhereToBuy {
		align-items: center;
		justify-content: center;
		h1 {
			align-self: center;
			justify-self: center;
			margin: 2rem 0.75rem 3rem;
			text-align: center;
		}
		h2 {
			width: 100%;
			align-self: center;
			text-align: center;
			font-weight: 900;
			margin-top: 5rem;
			padding-top: 0.5rem;
			color: var(--colorFont);
			border-top: 0.1rem solid var(--colorRed);
		}
	}

	.shops {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		column-gap: 4rem;
		row-gap: 4rem;
	}

	.shop-article {
		width: 20vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		a {
			text-align: center;
		}
	}

	.shop-img {
		max-width: 20vw;
		max-height: 10vw;
		min-height: 5vw;
	}

	@media (max-width: 1000px) {
		#Shops {
			flex-direction: column;
		}
		.shop-article {
			width: 90vw;
		}
		.shop-img {
			max-width: 90vw;
			max-height: 20vw;
		}
		#WhereToBuy {
			h2 {
				margin-top: 1rem;
			}
		}
	}
</style>
