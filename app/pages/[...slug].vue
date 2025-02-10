<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(() => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})
</script>

<template>
  <div v-if="post">
    <nuxt-link to="/">
      <small>« Back </small>
    </nuxt-link>
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </div>
  <div v-else>
    <!-- Show a loading state or a default message -->
    Loading...
  </div>
</template>