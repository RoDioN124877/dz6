<template>
  <div>
    <header>
      <h1>My Website</h1>
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'gallary' }">Gallary</router-link>
        <router-link :to="{ name: 'contacts' }">Contacts</router-link>
      </nav>
    </header>
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
header {
  background-color: #000;
  padding: 20px;
  color: #fff;

  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #444;
}
</style>
