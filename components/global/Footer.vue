<template>
  <div class="footer w-screen flex flex-row items-center mt-7 p-5 justify-center bg-white shadow-xs">
    <div class="content grid justify-items-center">
      <FooterFlower />
      <p class="text-sm text-black mt-2">Created <strong>demo</strong> by <strong>Storyblok</strong> 2022</p>
    </div>
  </div>
</template>

<script>
import FooterFlower from '../FooterFlower.vue'

export default {
  name: 'Footer',
  components: {
    FooterFlower
  },
};
</script>