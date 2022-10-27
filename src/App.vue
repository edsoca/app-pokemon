<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const theme = ref('dark')

const changeTheme = e => document.body.className = e.target.value
</script>

<template>
  <!-- Per posar una variable com a valor d'un atribut podem posar davant v-bind: o directament : -->
  <main class="themed" :class="theme">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/for">For</RouterLink>
          <RouterLink to="/component">Component</RouterLink>
          <RouterLink to="/api">API</RouterLink>
        </nav>
      </div>

      <div class="settings">
        <label for="dark">Dark</label>
        <input type="radio" name="theme" id="dark" @change="changeTheme" v-model="theme" checked>
        <label for="light">Light</label>
        <input type="radio" name="theme" id="light" @change="changeTheme" v-model="theme">
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>

:root{
  --bg-color: #181818;
  --text-color: hsla(160, 100%, 37%, 1);
  --bg-card: hsla(160, 100%, 37%, 1);
  --text-card: #222;
}

.themed.dark{
  --bg-color: #181818;
  --text-color: hsla(160, 100%, 37%, 1);
  --bg-card: hsla(160, 100%, 37%, 1);
  --text-card: #222;
}

.themed.light{
  --bg-color: #eee;
  --text-color: #111;
  --bg-card: #ddd;
  --text-card: #333;
}

.settings{
  display:flex;
  gap: 1em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.themed{
  background-color: var(--bg-color);
  color: var(--text-color);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
