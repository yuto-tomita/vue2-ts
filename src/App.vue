<template>
  <div>
    <ClassApi />
    <CompositionApi :test="123" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ClassApi from './components/ClassApi.vue'
import CompositionApi from './components/CompositionApi.vue'

export default defineComponent({
  components: {
    ClassApi,
    CompositionApi
  }
})
</script>
