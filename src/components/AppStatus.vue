<template>
  <span :class="['badge', color]">{{ name }}</span>
</template>
<script>
import { computed, ref } from 'vue'
import { getColor, getName } from '../utils/converter'
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup(props) {
    const name = computed(() => getName(ref(props.type).value))
    const color = computed(() => getColor(ref(props.type).value))
    return  {
      name,
      color
    }
  }
}
</script>
