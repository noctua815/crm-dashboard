<script setup>
import {ref} from 'vue'

const showFullMenu = ref(false)

const mouseEnter = () => {
  console.log('mouseOver', showFullMenu.value)
  if (showFullMenu.value) return
  showFullMenu.value = true
}

const mouseLeave = (e) => {
  console.log('mouseLeave', showFullMenu.value)
  setTimeout(() => {
    showFullMenu.value = false
  }, 300)
}
</script>

<template lang="pug">
nav.nav(@mouseenter="mouseEnter" @mouseleave="mouseLeave" :class="{'show-full': showFullMenu}")
  .nav__bg
  .nav__top
    .nav__logo
      .logo
  .nav__bottom
    .nav__menu
      .menu(:class="{'show-full': showFullMenu}")
        .menu-item
          .menu-item__icon
            font-awesome-icon(icon="fa-solid fa-house")
          .menu-item__text Home
        .menu-item
          .menu-item__icon
            font-awesome-icon(icon="fa-solid fa-credit-card")
          .menu-item__text Account
        .menu-item
          .menu-item__icon
            font-awesome-icon(icon="fa-solid fa-chart-simple")
          .menu-item__text Statistic
        .menu-item
          .menu-item__icon
            font-awesome-icon(icon="fa-solid fa-gear")
          .menu-item__text Settings
</template>

<style lang="scss" scoped>
.nav {
  position: relative;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: rem(40) 0;

  &.show-full {
    .nav__bg {
      width: rem(180);
    }
  }

  &__top {
    position: relative;
    z-index: 1;
    height: rem(40);
    margin-bottom: rem(40);
  }

  &__bottom {
    position: relative;
    width: 100%;
    z-index: 1;
    flex: 1;
  }

  &__bg {
    @include absolut-position;
    z-index: 0;
    background-color: var(--color-dark);
    transition: width 0.3s ease;
  }

  &__menu {
    @include absolut-position;
  }
}

.logo {
  position: relative;
  width: rem(24);
  height: rem(24);
  cursor: pointer;
  transform: translateX(-10px);

  &:before,
  &:after {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: inherit;
    height: inherit;
    transform-origin: center center;
  }

  &:before {
    background-color: var(--color-light-gray);
    transform: rotate(45deg);
  }

  &:after {
    background-color: var(--color-yellow);
    transform: rotate(45deg) translate(15px, -14px);
  }
}

.menu {
  position: absolute;
  width: 100%;

  &.show-full {
    .menu-item__text {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.menu-item {
  display: flex;
  align-items: baseline;
  color: var(--color-light);
  cursor: pointer;
  padding: rem(4) rem(22);
  transition: color 0.3s ease;

  & + & {
    margin-top: rem(10);
  }

  &:hover {
    color: var(--color-blue);
  }

  &__icon {
    height: rem(30);
    width: rem(30);
    font-size: rem(20);
    margin-right: rem(8);
    text-align: center;
    flex-shrink: 0;
  }

  &__text {
    font-size: 1rem;
    opacity: 0;
    visibility: hidden;
    transform: translateX(0.5rem);
    transition: all 0.3s ease;
    will-change: transform;
  }
}
</style>
