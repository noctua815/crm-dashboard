<template lang="pug">
main.main
  section.main-section
    NavItem
    section.content Content
</template>

<script setup>
import NavItem         from '@/components/layout/nav-item.vue'
import {ref, nextTick} from 'vue'

const loading = ref(true)
</script>

<style scoped lang="scss">
.main {
  position: relative;
  background-color: var(--color-light);
}

.main-section {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: rem(74) 1fr;
  grid-template-areas: 'nav content';
}



</style>
