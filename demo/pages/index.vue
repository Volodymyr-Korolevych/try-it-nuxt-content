<template>
  <div class="m-8">
    <img class="w-3/4 mt-16 mx-auto" src="@/assets/images/nuxt-content.svg" />
    <h1>
      Nuxt/content  <span>Try-It-module</span>
      </h1>
    <div class="flex flex-col items-center">
      <NuxtLink  :to="{ name: 'slug', params: { slug: 'read-me' } }" >
        Module description
      </NuxtLink>
      <NuxtLink  :to="{ name: 'slug', params: { slug: 'demo' } }" >
        Demo
      </NuxtLink>
      <a href="https://github.com/Volodymyr-Korolevych/try-it-nuxt-content" target="_blank">
        Github Link
      </a>
    </div>
  </div>
</template>
<style scoped>
h1 {
  @apply w-full my-6 flex justify-center font-bold text-4xl;
}
span {
  @apply mx-4 px-2 bg-gray-300 text-green-800;
}
a {
  @apply flex m-4 justify-center text-2xl font-bold text-green-600 bg-gray-300 px-6 py-3;
}
</style>