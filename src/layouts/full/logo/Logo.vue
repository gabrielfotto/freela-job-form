<script setup>
import { computed } from 'vue'
import LogoLight from './LogoLight.vue'
import LogoDark from './LogoDark.vue'
import { useCustomizerStore } from '@/stores/customizer'

const customizer = useCustomizerStore()

//const dark = ref(false);
const dark = computed(() => {
	if (
		customizer.theme === 'DARK_BLUE_THEME' ||
		customizer.theme === 'DARK_AQUA_THEME' ||
		customizer.theme === 'DARK_ORANGE_THEME' ||
		customizer.theme === 'DARK_PURPLE_THEME' ||
		customizer.theme === 'DARK_GREEN_THEME' ||
		customizer.theme === 'DARK_CYAN_THEME'
	) {
		return true
	} else {
		return false
	}
})
</script>
<template>
	<LogoLight v-if="dark" />
	<LogoDark v-else />
</template>
