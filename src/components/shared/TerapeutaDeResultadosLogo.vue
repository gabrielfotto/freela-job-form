<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		width?: number | string
	}>(),
	{
		width: 300,
	}
)
</script>

<template>
	<img src="@/assets/logo.png" :width="props.width" />
</template>
