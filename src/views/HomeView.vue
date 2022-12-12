<script setup>
import PageLayout from '@/components/layout/page-layout.vue'
import CardItem from '@/components/welcome/card-item.vue'
</script>

<template lang="pug">
page-layout
  .home-section
    .welcome-section
      .welcome-section__title
    .card-section
      CardItem
    .summary-section Welcome
    .info-section Welcome
</template>

<style scoped lang="scss">
.home-section {
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'welcome card'
  'summary info';
  grid-template-columns: 1fr minmax(rem(300), 33%);
  grid-template-rows: 2fr 3fr;

  & > div {
    border: 1px solid black;
  }
}

.welcome-section {
  background-color: var(--color-light-gray);
}

.card-section {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}
</style>
