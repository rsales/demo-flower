<template>
  <header 
    class="hero-section grid gap-4 grid-cols-12 py-10 h-96 text-white relative"
    :style="`background-image: url('${blok.background_image}'); background-repeat: no-repeat; background-size: cover; background-position: center;`"
  >
    <div class="content-header col-span-5 pl-5 z-10">
      <h1 class="text-5xl">{{ blok.title }}</h1>
      <p class="text-base">{{ blok.description }}</p>
    </div>
    <div class="filter w-full h-full absolute z-0" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.filter {
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 51%);
  opacity: 0.8;
}
</style>