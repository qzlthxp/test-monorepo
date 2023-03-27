<template>
  <button @click="handleClick">
    <slot>{{ p.size }}||{{ p.type }}</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'CustomButton'
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { buttonProps } from './types'

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

function handleClick(e) {
  emits('click', e)
}

const p = computed(() => {
  const { size = 'meduim', type = 'text' } = props
  return { size, type }
})
</script>
