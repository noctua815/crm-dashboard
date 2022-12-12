<script setup="">
import {reactive, ref, computed} from 'vue'

defineProps({
  details: {
    type: Array,
    default() {
      return [
        {
          name: 'Statement Generate',
          type: 'date',
          value: '19 Oct 2019'
        }, {
          name: 'Payment Amount Due',
          type: 'status',
          value: 'Not Applicable'
        }, {
          name: 'Minimum Amount Due',
          type: 'amount',
          value: '$0.00'
        }, {
          name: 'Total Amount Due',
          type: 'amount',
          value: '$19.35'
        }
      ]
    }
  }
})
</script>

<template lang="pug">
.card-details
  .card-details__wr(v-if="details.length")
    .detail-item(v-for="item of details")
      .detail-item__name {{item.name}}
      .detail-item__value(:class="item.type") {{item.value}}
</template>

<style lang="scss" scoped>
.card-details {
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  font-size: rem(14);
  white-space: nowrap;

  & + & {
    margin-top: rem(20);
  }

  &__name {
    color: var(--text-color-gray);
  }

  &__value {
    color: var(--color-dark);
    font-weight: var(--font-weight-semibold);

    &.status {
      color: var(--text-color-red);
    }
  }
}
</style>
