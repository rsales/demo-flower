<template>
  <div v-editable="blok" class="content-text grid gap-6 grid-cols-12 justify-items-center py-10">
    <h1 class="col-span-8 col-start-3 justify-self-center text-5xl font-bold">{{ blok.title }}</h1>
    <div class="col-span-8 col-start-3 justify-self-center text-justify" v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentText',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    richtext() {
      return this.blok.description ? this.$storyapi.richTextResolver.render(this.blok.description) : ''
    }
  }
};
</script>

<style lang="postcss">
.content-text p {
  @apply my-5
}
.content-text p:last-of-type {
  @apply mb-0
}
</style>