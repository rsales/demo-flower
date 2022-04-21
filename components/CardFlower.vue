<template>
  <div v-editable="blok" class="card-flower cursor-pointer">
    <img :src="blok.image" class="w-full">
    <div class="title-card flex py-2">
      <h1 class="text-lg font-bold flex-auto">{{ blok.title }}</h1>
      <p>{{ blok.price }}</p>
    </div>
    <span class="text-sm flex-none">{{ blok.description }}</span>
  </div>
</template>

<script>
export default {
  name: 'CardFlower',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>