<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Titol from './components/Titol.vue'

const theme = ref('dark')

const changeTheme = e => document.body.className = e.target.value
</script>

<template>
  <!-- Per posar una variable com a valor d'un atribut podem posar davant v-bind: o directament : -->
  <main class="themed" :class="theme">
    <header>
      <img alt="Pokedex logo" class="logo" src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png" width="125" height="125" />

      <div class="wrapper">
        <Titol msg="POKEDEX" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/combat">Combat</RouterLink>
        </nav>
      </div>

      <div class="settings">
        <label for="dark">Dark</label>
        <input type="radio" name="theme" id="dark" value="dark" @change="changeTheme" v-model="theme" checked>
        <label for="light">Light</label>
        <input type="radio" name="theme" id="light" value="light" @change="changeTheme" v-model="theme">
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
  --input-border: #ddd;
}

.themed.dark{
  --bg-color: #181818;
  --text-color: hsla(160, 100%, 37%, 1);
  --bg-card: hsla(160, 100%, 37%, 1);
  --text-card: #999;
  --input-border: #ddd;
}

.themed.light{
  --bg-color: #eee;
  --text-color: #111;
  --bg-card: #ddd;
  --text-card: #333;
  --input-border: #222;
}

.settings{
  display:flex;
  gap: 1em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display:flex;
  justify-content: center;
}

.themed{
  background-color: var(--bg-color);
  color: var(--text-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1.5em;
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
  border-left: 1px solid var(--input-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1.5em;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
