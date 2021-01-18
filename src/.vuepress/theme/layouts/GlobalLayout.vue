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
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import ContactLayout from "@theme/layouts/ContactLayout.vue";
import SideNavLayout from "@theme/layouts/SideNavLayout.vue";

export default {
  components: {
    Nav,
    Footer,
    HomeLayout,
    BasicLayout,
    ContactLayout,
    SideNavLayout,
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
