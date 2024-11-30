<script setup lang="ts">
import { provideMultiStepForm } from '@/composables'

const props = defineProps<{
	injectionKey: symbol
	initialState: Record<string, unknown>
	steps: Array<{ to: string; meta: Record<string, unknown> }>
}>()

const context = provideMultiStepForm(props.injectionKey, {
	initialState: props.initialState,
	steps: props.steps,
})

defineExpose({
	context,
})
</script>

<template>
	<slot />
</template>
