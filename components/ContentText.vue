<template>
  <div>
    <div v-editable="blok" class="content-text grid gap-6 grid-cols-12 justify-items-center py-10">
      <h1 class="col-span-8 col-start-3 justify-self-center text-5xl font-bold">{{ blok.title }}</h1>
      <div class="col-span-8 col-start-3 justify-self-center text-justify" v-html="template"></div>
      <!-- <article class="col-span-8 col-start-3 justify-self-center text-justify">
        <VRuntimeTemplate :template="richtext"></VRuntimeTemplate>
      </article> -->
    </div>

    <!-- <div class="container">
      <code class="w-full text-gray-600">
        {{ template }}
      </code>
      <br>
      <code class="w-full text-blue-600">
        {{ richtext }}
      </code>
    </div> -->
  </div>
</template>

<script>
import { RichTextSchema, renderRichText } from "@storyblok/nuxt-2"
import cloneDeep from 'clone-deep';
import VRuntimeTemplate from "v-runtime-template";
import iframeYoutube from '~/components/IframeYoutube.vue'

export default {
  name: 'ContentText',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    mySchema: cloneDeep(RichTextSchema),
    template: `
      <component :blok='JSON.stringify(blok.description)' is="iframeYoutube" />
    `,
  }),
  components: {
    VRuntimeTemplate,
    iframeYoutube
  },
  mounted() {
    this.template = this.resolvedRichText
  },
  computed: {
    richtext() {
      return this.blok.description ? this.$storyapi.richTextResolver.render(this.blok.description) : ''
    },
    resolvedRichText() {
      return renderRichText(this.blok.description, {
        schema: this.mySchema,
        resolver: (component, blok) => {
          switch (component) {
            case 'iframeYoutube':
              return `<component :blok='${JSON.stringify(blok)}' is="${component}" />`
              break;
            default:
              return 'Resolver not defined'
          };
        },
      })
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