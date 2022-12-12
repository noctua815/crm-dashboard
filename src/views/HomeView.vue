<script setup>
import PageLayout from '@/components/layout/page-layout.vue'
import CardBlock from '@/components/welcome/card-block.vue'
import InfoBlock from '@/components/welcome/info-block.vue'
</script>

<template lang="pug">
page-layout
  .home-section
    .welcome-section
      .welcome-section__title
    .summary-section Welcome
    .info-section
      card-block
      info-block
</template>

<style scoped lang="scss">
.home-section {
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'welcome info'
  'summary info';
  grid-template-columns: 1fr minmax(rem(400), 33%);
  grid-template-rows: 2fr 3fr;

  & > div {
    border: 1px solid black;
  }
}

.welcome-section {
  background-color: var(--color-light-gray);
}

.info-section {
  grid-area: info;
}
</style>
