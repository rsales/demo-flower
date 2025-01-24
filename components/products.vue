<template>
  <div v-editable="blok" class="products">
    <h1 class="text-4xl font-bold text-center w-full mb-10 text-black">{{ blok.title }}</h1>
    <div class="list-skill grid gap-6 grid-cols-12">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="col-span-12 sm:col-span-6 lg:col-span-3"
      >
        <img :src="product.image" :alt="product.name" class="w-full h-52 object-cover mb-3 rounded-md" />
        <h2 class="text-xl font-bold">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Buy for R$ {{ product.price ? (product.price.amount | currency) : 'Carregando preço...' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: [],
    }
  },
  async mounted() {
    this.products = this.blok.products.items
    await this.fetchProductPrices();
    console.log('products', this.products)
  },
  methods: {
    async fetchProductPrices() {
      try {
        const productIds = this.products.map(product => product.id);
        const productsWithPrices = await Promise.all(productIds.map(async (id) => {
          const product = await this.$shopify.product.fetch(id);
          return {
            ...product,
            price: product.variants[0].price
          };
        }));
        this.products = this.products.map(product => {
          const productWithPrice = productsWithPrices.find(p => p.id === product.id);
          return {
            ...product,
            price: productWithPrice ? productWithPrice.price : null
          };
        });
      } catch (error) {
        console.error('Error fetching product prices:', error);
      }
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }
  }
};
</script>

<style lang="postcss">
.list-section {
  @apply mt-16;
  @apply mb-24;
}
</style>