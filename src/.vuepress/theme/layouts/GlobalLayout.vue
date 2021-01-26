<template>
  <div class="wrapper">
    <div
      class="bg-white markdown-body font-serif m-2 sm:m-6 md:m-10 lg:m-15 text-lg"
    >
      <Nav />
      <component :is="layout"></component>
      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from "@theme/components/Nav.vue";
import Footer from "@theme/components/Footer.vue";
import HomeLayout from "@theme/layouts/HomeLayout.vue";
import FeatureLayout from "@theme/layouts/FeatureLayout.vue";
import ContactLayout from "@theme/layouts/ContactLayout.vue";
import BasicLayout from "@theme/layouts/BasicLayout.vue";

export default {
  components: {
    Nav,
    Footer,
    HomeLayout,
    FeatureLayout,
    ContactLayout,
    BasicLayout
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "HomeLayout";
    },
  },
};
</script>

<style lang="stylus">
@import '../../styles/index.styl';
</style>
