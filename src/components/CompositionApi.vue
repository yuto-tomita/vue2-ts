<template>
	<div>
		{{ props.test }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    test: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      props
    }
  }
})
</script>

<style>

</style>
