<template>
  <div v-editable="blok" class="card-flower cursor-pointer mb-5">
    <img :src="blok.image" class="w-full">
    <div class="title-card flex py-2">
      <h1 class="text-lg font-bold flex-auto text-black">{{ blok.title }}</h1>
      <p class="text-lg text-slate-800	">{{ blok.price }}</p>
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