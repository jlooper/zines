<template>
  <div class="flex md:flex-row-reverse flex-wrap">
    <div class="w-full p-5">
      <h1 class="font-sans text-4xl mb-4">
        {{ $frontmatter.title }}
      </h1>
      <p class="text-2xl font-sans">
        {{ $frontmatter.description }}
      </p>
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLayout",
};
</script>
