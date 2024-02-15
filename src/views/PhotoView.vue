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

<style scoped>
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
