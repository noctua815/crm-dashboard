<script setup>
import DotSelect  from '@/components/ui/dot-select.vue'
import CardItem   from '@/components/welcome/card-item.vue'
import {reactive} from 'vue'

const menu = reactive([
  {
    name: 'Item 1',
    action: ''
  }, {
    name: 'Item 2',
    action: ''
  }, {
    name: 'Item 3',
    action: ''
  }
])
</script>
<template lang="pug">
.card-block
  .card-block__head
    .card-block__title
      h2 My card
    .card-block__btn
      dot-select(:options="menu")
  .card-block__body
    card-item
</template>

<style lang="scss" scoped>
.card-block {
  padding: rem(36) rem(40);
  margin-bottom: rem(48);

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
  }

  &__body {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
