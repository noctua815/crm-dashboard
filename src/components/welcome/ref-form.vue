<script setup="">
import {reactive, ref, computed} from 'vue'
</script>

<template lang="pug">
.ref-form
  .ref-form__title
    h3 Refer someone you know and get lower rates
</template>

<style lang="scss" scoped>
.ref-form {
  width: 100%;
  padding: rem(16) rem(20);
  background-color: var(--color-blue);
  border: var(--border-default);
  overflow: hidden;


  &__title {
    margin-bottom: 1rem;
  }
}
</style>
