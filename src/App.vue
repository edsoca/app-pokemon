<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Titol from './components/Titol.vue'
import { computed } from '@vue/reactivity';

let themeValue = localStorage.getItem('theme') || 'dark'

const changeTheme = e => {
  if (e.target.value == 'system') {
    themeValue = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  else {
    themeValue = e.target.value;
  }
  document.body.className = themeValue;
  document.getElementsByClassName('themed')[0].className = 'themed ' + themeValue
  localStorage.setItem('theme', e.target.value);
}

onMounted(() => {
    document.getElementById(themeValue).checked = true
    if(themeValue == 'system'){
      themeValue = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
    }

    document.body.className = themeValue;
    document.getElementsByClassName('themed')[0].className = 'themed ' + themeValue
  })


</script>

<template>
  <!-- Per posar una variable com a valor d'un atribut podem posar davant v-bind: o directament : -->
  <main class="themed">
    <header>
      <img alt="Pokedex logo" class="logo"
        src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png" width="125"
        height="125" />

      <div class="wrapper">
        <Titol msg="POKEDEX" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/combat">Combat</RouterLink>
        </nav>
      </div>

      <div class="settings">
        <span>
          <label for="dark">Dark</label>
          <input type="radio" name="theme" id="dark" value="dark" @change="changeTheme" checked>
        </span>

        <span>
          <label for="light">Light</label>
          <input type="radio" name="theme" id="light" value="light" @change="changeTheme">
        </span>

        <span>
          <label for="system">System</label>
          <input type="radio" name="theme" id="system" value="system" @change="changeTheme">
        </span>

      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
:root {
  --bg-color: #181818;
  --text-color: hsla(160, 100%, 37%, 1);
  --bg-card: hsla(160, 100%, 37%, 1);
  --text-card: #222;
  --input-border: #ddd;
}

.themed.dark {
  --bg-color: #181818;
  --text-color: hsla(160, 100%, 37%, 1);
  --bg-card: hsla(160, 100%, 37%, 1);
  --text-card: #999;
  --input-border: #ddd;
}

.themed.light {
  --bg-color: #eee;
  --text-color: #111;
  --bg-card: #ddd;
  --text-card: #333;
  --input-border: #222;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.settings span {
  display: flex;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 130px auto 130px;
}

.themed {
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
    grid-template-columns: 300px auto 300px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .settings {
    display: flex;
    flex-direction: row;
  }

  .settings span {
    flex-direction: column;
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
