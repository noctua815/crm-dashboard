<template lang="pug">
main.main
  section.main-section
    NavItem
    section.content
      router-view(v-slot="{Component}")
        component(:is="Component")
</template>

<script setup>
import NavItem         from '@/components/layout/nav-item.vue'
import {ref} from 'vue'

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
}


</style>
