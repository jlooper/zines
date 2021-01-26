<template>
  <div class="p-5 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
    <div class="md:flex">
      <div class="w-full md:w-2/3 lg:w-2/3 sm:w-full px-2">
        <h1 class="text-4xl font-sans">MaZine Learning</h1>
        <h2 class="text-3xl pt-5 font-sans">
          Learn about Machine Learning with Free Printable Zines*
        </h2>

        <p class="text-2xl font-sans pt-5">
          Welcome! Are you trying to learn about Machine Learning topics without
          having a data science or developer background? What about math and
          statistics? If you're looking for a gentle introduction, look no
          further! Professor Puff and her friends are here to help you learn all
          about ML in a fun, collectible way!
        </p>

        <p class="mt-3 text-sm font-sans">
          *What's a "zine"? It's a cool printable DIY magazine
        </p>
      </div>
      <div class="ml-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="border-double border-4 m-auto w-full rounded-md">
            <a href="/zines/introduction"
              ><img class="h-64" alt="zine 1" src="/images/1.png"
            /></a>
          </div>
          <div class="border-double border-4 rounded-md m-auto w-full">
            <a href="/zines/supervisedlearning"
              ><img class="h-64" alt="zine 2" src="/images/2.png"
            /></a>
          </div>
          <div
            class="border-double border-4 rounded-md m-auto w-full h-64 text-center"
          >
            <p class="text-2xl font-sans">More coming soon!</p>
          </div>

          <div
            class="border-double border-4 rounded-md m-auto w-full h-64 text-center"
          >
            <p class="text-2xl font-sans">More coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
  mounted() {
    let tiktokScript = document.createElement("script");
    tiktokScript.setAttribute("src", "https://www.tiktok.com/embed.js");
    document.head.appendChild(tiktokScript);
  },
};
</script>
