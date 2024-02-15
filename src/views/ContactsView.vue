<template>
    <div class="body">
      <header>
          <h1>My Website</h1>
          <nav>
              <router-link :to="{ name: 'home' }">Home</router-link>
              <router-link :to="{ name: 'gallary' }">Gallary</router-link>
              <router-link :to="{ name: 'contacts' }">Contacts</router-link>
          </nav>
      </header>
       
      <section>
          <h2>AAAAAAAAAAAAAAAAAAAAAAAA</h2>
          <p>+34895348593495483959</p>
      </section>
      
      <footer>
          <p>&copy; 2024 My Dark Theme Website. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
        .body {
              margin: 0;
              padding: 0;
              background-color: #111;
              color: #fff;
          }
          
          header {
              background-color: #000;
              padding: 20px;
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
          
          section {
              padding: 50px;
              text-align: center;
              height: 1000px;
          }
          
          footer {
              background-color: #000;
              padding: 20px;
              text-align: center;
              bottom: 0;
          }
  </style>
  