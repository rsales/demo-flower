<template>
  <div v-editable="blok" class="list-section">
    <h1 class="text-4xl font-bold text-center w-full mb-10">{{ blok.title }}</h1>
    <div class="list-skill grid gap-6 grid-cols-12">
      <component
        v-for="blok in blok.items"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"
        class="col-span-12 sm:col-span-6 lg:col-span-3"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSection',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss">
.list-section {
  @apply py-16 ;
}
</style>