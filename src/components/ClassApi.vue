<template>
	<div>
		this is ClassApi
		{{ test }}
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class ClassApi extends Vue {
  @Prop({ required: true }) private test!: string
}
</script>

<style>

</style>
