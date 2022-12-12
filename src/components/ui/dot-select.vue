<script setup>
import {ref} from 'vue'
const showList = ref(false)
defineProps({
  options: {
    type: Array,
    required: true
  }
})
</script>

<template lang="pug">
.dot-select(@mouseover="showList = true" @mouseleave="showList = false")
  .dot-select__btn
    font-awesome-icon(icon="fa-solid fa-ellipsis")
  .dot-select__list(v-if="showList")
    .dot-select__item(v-for="item of options") {{item.name}}
</template>

<style lang="scss" scoped>
.dot-select {
  position: relative;
  z-index: 10;
  cursor: pointer;

  &__btn {
    position: relative;
    z-index: 1;
    width: rem(32);
    height: rem(32);
    border: 2px solid var(--color-dark);
    text-align: center;
    line-height: rem(28);

    &:hover {
      background-color: var(--color-blue);
    }
  }

  &__list {
    position: absolute;
    z-index: 2;
    top: rem(30);
    right: 0;
    width: rem(120);
    background-color: var(--color-light);
    border: var(--border-default);
  }

  &__item {
    padding: rem(8) rem(8);
    font-size: rem(16);
    cursor: pointer;
    border-bottom: var(--border-default);

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: var(--color-blue);
    }
  }
}
</style>

