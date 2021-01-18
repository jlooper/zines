<template>
  <div class="flex md:flex-row-reverse flex-wrap">
    <!--Main Content-->
    <div class="w-full md:w-4/5">
      <!--<div class="container pt-10 pb-10 px-6">
        <h1 class="text-center font-sans text-2xl pb-5">
          {{ $frontmatter.title }}
        </h1>
        <span class="font-sans"><Content /></span>
      </div>-->

      <div class="mx-auto">
        <div class="flex z-0">
          <div class="w-3/5 p-5">
            <h1 class="text-gray-800 font-sans text-4xl mb-4">
              {{ $frontmatter.title }}
            </h1>
            <p class="text-gray-700 text-2xl font-sans">
              {{ $frontmatter.description }}
            </p>
            <div class="flex mt-10">
              <a :href="$frontmatter.downloadLink" target="_blank"
                ><img alt="download" src="/images/download.png"
              /></a>
            </div>
          </div>
          <div class="w-2/5">
            <img alt="Zine Image" :src="$frontmatter.zineImage" />
          </div>
        </div>
      </div>
    </div>

    <!--Sidebar-->
    <div
      class="w-full md:w-1/5 bg-gray-200 md:bg-gray-200 px-2 text-center md:pb-8 md:pt-8 md:top-0 md:left-0"
    >
      <div class="md:relative mx-auto lg:px-6">
        <ul
          class="font-sans list-reset flex flex-row md:flex-col text-center md:text-left"
        >
          <li class="mr-3 flex-1" v-for="item in nav">
            <router-link
              :to="item.link"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline"
            >
              <span
                class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block hover:text-red-800"
                >{{ item.title }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureLayout",
  data() {
    return {
      sidebar: [],
      nav: [],
    };
  },
  created() {
    this.sidebar = this.$themeConfig.sidebar;
    var firstProp;
    for (var key in this.sidebar) {
      firstProp = this.sidebar[key];
      this.nav = firstProp[0].children;
      break;
    }
  },
};
</script>
