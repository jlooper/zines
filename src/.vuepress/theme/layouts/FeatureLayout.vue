<template>
  <div class="flex md:flex-row-reverse flex-wrap">
    <div class="w-full md:w-4/5">


      <div class="mx-auto">
        <div class="flex z-0">
          <div class="w-3/5 p-5">
            <h1 class="font-sans text-4xl mb-4">
              {{ $frontmatter.title }}
            </h1>
            <p class="text-2xl font-sans">
              {{ $frontmatter.description }}
            </p>
            <div class="flex mt-10">
              <a :href="$frontmatter.downloadLink" target="_blank"
                ><img alt="download" src="/images/download.png"
              /></a>
            </div>
          </div>
          <div class="w-2/5">
            <img
              alt="Zine Image"
              :src="$frontmatter.zineImage"
            />
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
          <li class="border-b-2 border-color-black mr-3 flex-1" v-for="item in nav">
            <router-link :to="item.link">
              <span
                class="pt-3 pb-1 md:pb-0 text-xs md:text-base text-gray-800 md:text-gray-800 block md:inline-block hover:text-red-800"
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
