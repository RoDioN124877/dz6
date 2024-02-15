<template>
  <div>
    <div class="slider">
      <div class="slides">
        <router-link
          v-for="photo in photoData"
          :key="photo.id"
          :to="{
            name: 'photo',
            params: {
              id: photo.id
            }
          }"
        >
          <img class="slide" :src="photo.url" alt="" v-show="currentIndex === photo.id" />
        </router-link>
      </div>
      <button @click="prevSlide" class="prev">Предыдущий</button>
      <button @click="nextSlide" class="next">Следующий</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const photoData = ref()

let currentIndex = ref(1)

const prevSlide = () => {
  if (currentIndex.value > 1) currentIndex.value--
}

const nextSlide = () => {
  if (currentIndex.value < 5) currentIndex.value++
  console.log(photoData.value)
}

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
  photoData.value = await response.json()
})
</script>

<style scoped>
.slider {
  width: 600px;
  overflow: hidden;
}

.slides {
  display: flex;
}

.slide {
  flex: 0 0 100%;
}

button {
  cursor: pointer;
}
</style>
