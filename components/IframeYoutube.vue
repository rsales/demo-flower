<template>
  <div class="w-full">
    <iframe 
      class="w-full aspect-video"
      src="https://www.youtube.com/embed/pltIUe_ANmQ?si=ZJ6jnK4G-BjLwypL" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
    ></iframe>
    <h1>Hello World</h1>
  </div>
</template>

<script>
export default {
  name: 'IframeYoutube',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // console.log(JSON.parse(this.blok));
  }
}
</script>
