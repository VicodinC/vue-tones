<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

let transitionName = ref('none')
let isGoingBack = false

const route = useRoute();

window.addEventListener('popstate', () => {
  isGoingBack = true
})



watch(
  () => route.name,
  (to, from) => {
    console.log("watch");
    transitionName.value = "none";
    if (isGoingBack) {
      // 뒤로 가기 버튼 눌렸을 시 왼쪽에서 덮임
      transitionName.value = "slide-left";
      isGoingBack = false;
    } else {
      if (from === undefined) return; // 새로고침시
      transitionName.value = "slide-right";
    }
  }
)


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/sound-grid">SoundGrid</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </RouterView>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  z-index: 100;
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


/* 슬라이드 START */
.none-enter-active,
.none-leave-active {
  display: none;
}

.none-enter-from {
  display: none;
}

.none-leave-to {
  display: none;
}

/* slide right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.2s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}

/* slide left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.2s ease;
}

.slide-left-enter-from {
  transform: translateX(-100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}

/* 슬라이드 END */
</style>
