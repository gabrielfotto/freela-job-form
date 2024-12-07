import { onMounted } from 'vue'

export function useScrollToTop(mount = true) {
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	onMounted(() => {
		if (mount) {
			scrollToTop()
		}
	})

	return {
		scrollToTop,
	}
}
