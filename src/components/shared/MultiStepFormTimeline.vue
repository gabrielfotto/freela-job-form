<script setup lang="ts">
import type { MultiStepFormContext } from '@/composables'
import { onMounted } from 'vue'

const props = defineProps<{
	formContext: MultiStepFormContext
	step?: number
}>()

function getTimelineDotColor(stepId: number, index: number) {
	if (
		props.formContext.currentStepId.value > index ||
		props.formContext.currentStepId.value === stepId
	) {
		return 'primary'
	} else {
		return '#D9D9D9'
	}
}

function handleRemoveTimelineItemBody() {
	const timelineItemBodyEls = document.querySelectorAll(
		'.v-timeline-item__body'
	)
	timelineItemBodyEls.forEach(el => el.remove())
}

onMounted(() => {
	handleRemoveTimelineItemBody()
})
</script>

<template>
	<v-timeline direction="horizontal" density="compact" class="mb-2">
		<v-timeline-item
			v-for="(step, index) in props.formContext.steps.value"
			size="small"
			:dot-color="getTimelineDotColor(step.id, index)"
		>
			<template #icon>
				<v-icon
					v-if="props.formContext.currentStepId.value > index"
					size="small"
					>mdi-check</v-icon
				>
				<span v-else-if="props.formContext.currentStepId.value === step.id">{{
					index + 1
				}}</span>
				<span v-else>{{ index + 1 }}</span>
			</template>
		</v-timeline-item>
	</v-timeline>
</template>
