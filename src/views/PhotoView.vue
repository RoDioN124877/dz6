<template>
  <div>
    <img :src="photoURL" alt="">
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
interface Props {
  id: string
}
const props = defineProps<Props>()
const photoURL = ref()

onMounted(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.id}`)
  const photoData = await response.json()
  photoURL.value = photoData.url
})
</script>

<style scoped></style>
