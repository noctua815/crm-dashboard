<script setup>
import {reactive, computed} from 'vue'

const card = reactive({
  holder: 'Peter Crouch',
  number: '1111 2222 3333 9374',
  date: '09/24'
})

const protectedNumber = computed(() => {
  const len = card.number.length
  const lastPart = card.number.slice(len - 4, len)
  let firstPart = ''
  for (let i = 0; i < 3; i++) {
    firstPart += '*'.repeat(4) + ' '
  }
  return firstPart + lastPart
})

</script>

<template lang="pug">
.card
  .card__main
    .card__main-wr
      .card__main-top
        .card__logo
          font-awesome-icon(icon="fa-solid fa-burst")
        .card__bg
        .card__number {{ protectedNumber }}
      .card__main-bottom
        .card__holder {{ card.holder }}
        .card__date {{ card.date }}
        .card__type
          .type-logo
  .card__pse.card__pse--1
  .card__pse.card__pse--2
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  max-width: rem(340);
  width: 100%;

  &__main {
    position: relative;
    z-index: 2;
    width: inherit;
    overflow: hidden;

    &:after {
      content: '';
      padding-top: 61.7%;
      float: left;
    }

    &-wr {
      @include absolut-position;
      display: flex;
      flex-direction: column;
      background-color: #242424;
      border: 2px solid var(--color-dark);
    }

    &-top {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem 1rem 2rem;
      color: var(--color-light);
    }

    &-bottom {
      display: grid;
      grid-template-areas: 'holder logo'
      'date logo';
      grid-template-columns: 1fr 40px;
      grid-template-rows: 1fr 1fr;
      height: rem(76);
      padding: 1rem;
      background-color: var(--color-light-peach);
    }
  }

  &__pse {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    border: 2px solid var(--color-dark);
    transform-origin: bottom right;
    overflow: hidden;

    &:after {
      content: '';
      padding-top: 61.7%;
      float: left;
    }

    &--1 {
      z-index: 1;
      background-color: #ced6dc;
      transform: rotate(-3deg) translate(-3px, 0px);
    }

    &--2 {
      z-index: 0;
      background-color: #e1e0e5;
      transform: rotate(-7deg) translate(-6px, 0px);
    }
  }

  &__number {
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    text-align: right;
  }
  &__logo {
    font-size: rem(24);
  }

  &__holder {
    grid-area: holder;
    font-size: 14px;
    margin-bottom: rem(8);
    font-weight: var(--font-weight-bold);
  }

  &__date {
    grid-area: date;
    font-size: rem(12);
    color: var(--color-dark);
    opacity: 0.5;
  }

  &__type {
    grid-area: logo;
    align-self: center;
  }
}

.type-logo {
  position: relative;
  width: rem(40);
  height: rem(24);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: rem(24);
    height: rem(24);
    border-radius: 50%;
    border: 2px solid var(--color-dark);
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
    opacity: 0.5;
  }
}
</style>
