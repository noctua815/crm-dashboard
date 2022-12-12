<script setup>
import CardDetails from '@/components/welcome/card-details.vue'
import CardSelect from '@/components/ui/card-select.vue'
import RefForm from '@/components/welcome/ref-form.vue'
</script>

<template lang="pug">
.info-block
  .info-block__select
    card-select
  .info-block__details
    card-details
  .info-block__form
    ref-form
</template>

<style lang="scss" scoped>
.info-block {
  padding: 2rem;

  &__select {
    margin-bottom: rem(32);
  }

  &__details {
    margin-bottom: rem(32);
  }
}
</style>
