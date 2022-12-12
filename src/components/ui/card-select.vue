<script setup>
import {reactive, ref, computed} from 'vue'
import {MaskForCard} from '@/helpers/maskForCard'

const options = reactive([
  { number: '1111 2222 3333 9374', value: 0 },
  { number: '2984 3982 2900 0417', value: 1 },
  { number: '9302 9235 7910 0129', value: 2 }
])

const selected = ref(options[0])
const showList = ref(false)
const selectOption = (item) => {
  if (item.value === selected.value.value) return
  selected.value = item
  showList.value = false
}
const computedSelectedCard = computed(() => {
  return MaskForCard(selected.value.number, 'X', '-')
})
const computesList = computed(() => {
  return options.map(item => {
    item.number = MaskForCard(item.number, 'X', '-')
    return item
  })
})
</script>

<template lang="pug">
.card-select(:class="{'is-opened': showList}")
  .card-select__head(@click="showList = !showList")
    .card-select__head-value {{computedSelectedCard}}
    .card-select__head-arrow
      font-awesome-icon(icon="fa-solid fa-angle-down")
  .card-select__list
    .card-select__item(v-for="item of computesList"
      @click="selectOption(item)"
      :class="{'is-selected': selected.value === item.value}") {{item.number}}
</template>

<style lang="scss" scoped>
.card-select {
  position: relative;
  z-index: 10;

  &.is-opened {
    .card-select__list {
      box-shadow: var(--shadow-default);
      opacity: 1;
      visibility: visible;
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(20) 0;
    border-bottom: var(--border-default);
    text-transform: uppercase;
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    user-select: none;
  }

  &__list {
    position: absolute;
    width: 100%;
    top: calc(100% - 2px);
    border: var(--border-default);
    background-color: var(--color-light);
    transition: box-shadow 0.25s ease;
    box-shadow: 0 0 0 var(--color-dark);
    visibility: hidden;
    opacity: 0;
  }

  &__item {
    padding: rem(16) rem(8);
    cursor: pointer;
    font-size: 1rem;

    & + & {
      border-top: var(--border-default);
    }

    &.is-selected {
      cursor: default;
      background-color: var(--color-blue);
    }

    &:hover:not(.is-selected) {
      background-color: var(--color-blue);
    }
  }
}
</style>
