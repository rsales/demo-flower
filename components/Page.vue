<template>
  <div v-editable="blok" class="antialiased text-gray-600 min-h-full flex flex-col">
    <NavBar />
    <section class="container mx-auto px-8 lg:px-24">
      <component
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"
      />
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from './global/NavBar.vue'
import Footer from './global/Footer.vue'

export default {
  name: 'Page',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  components: {
    NavBar,
    Footer
  },
}
</script>
