<template>
  <div v-editable="blok" class="cta-flower grid gap-6 grid-cols-12 px-7 h-48 rounded-md" :style="`background-color: ${blok.color.color}`">
    <div class="cta-image col-span-3 relative">
      <img :src="blok.image" class="absolute inset-x-0 bottom-0">
    </div>
    <div class="cta-description col-span-9 self-center">
      <h2 class="text-5xl mb-3 title-higlight text-black">{{ blok.title }}</h2>
      <p class="text-base text-black">{{ blok.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaFlower',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');

.title-higlight {
  font-family: 'Square Peg', cursive;
}
</style>