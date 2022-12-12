<script setup>
import CardDetails from '@/components/welcome/card-details.vue'
import {reactive, ref, computed} from 'vue'
</script>

<template lang="pug">
.info-block
  //.info-block__select select
  .info-block__table
    card-details
  .info-block__subscribe sub
</template>

<style lang="scss" scoped>
.info-block {
  padding: 2rem;
}
</style>
