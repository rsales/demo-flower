<template>
  <div class="nav-bar w-screen flex flex-row items-center p-5 justify-center bg-white shadow-xs">
    <DemoLogo />
  </div>
</template>

<script>
import DemoLogo from '../DemoLogo.vue'

export default {
  name: 'NavBar',
  components: {
    DemoLogo
  },
};
</script>