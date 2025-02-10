<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(() => {
  // post.title?: string 
  // useSeoMeta({
  //   title: () => (post as any).title?.value
    
  // })
  return queryCollection('blog')
    .path(route.path)
    .first()
  })

</script>

<template>
  <div v-if="post">
    <nuxt-link to="/blog">
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