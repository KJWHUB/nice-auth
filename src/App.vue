<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'

const countStore = useCounterStore()
const { startIncrement } = countStore
const { count } = storeToRefs(countStore)

startIncrement()
</script>

<template>
  <header>
    <p style="font-size: 50px">{{ count }}</p>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/auth/sign-up">회원가입</RouterLink>
        <RouterLink to="/auth/sign-up/result">나이스 인증 결과</RouterLink>
      </nav>
    </div>
  </header>

  <div class="wrap"><RouterView /></div>
</template>

<style scoped>
.wrap {
  border: 2px solid #333;

  padding: 1rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin: 2rem auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: 900;
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
