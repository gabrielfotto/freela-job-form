<script setup lang="ts">
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { RouterView } from 'vue-router'

import { provideMultiStepForm, useMultiStepForm } from '@/composables'
import {
	lifeMapFormInjectionKeySymbol,
	lifeMapStep01FormInjectionKeySymbol,
} from '@/symbols/form'

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const formContext = provideMultiStepForm(lifeMapStep01FormInjectionKeySymbol, {
	initialState: {},
	steps: [
		{
			to: '/step-01/01',
			meta: {
				title: 'Fase 01 - Vida Pessoal | 01',
			},
		},
		{ to: '/step-01/02', meta: { title: 'Fase 01 - Vida Pessoal | 02' } },
		{ to: '/step-01/03', meta: { title: 'Fase 01 - Vida Pessoal | 03' } },
		{ to: '/step-01/04', meta: { title: 'Fase 01 - Vida Pessoal | 04' } },
	],
})

function hadleRemoveTimelineItemBody() {
	const timelineItemBodyEls = document.querySelectorAll(
		'.v-timeline-item__body',
	)
	timelineItemBodyEls.forEach(el => el.remove())
}

onBeforeMount(() => {
	// checkPreviousSteps()
})

onMounted(() => {
	hadleRemoveTimelineItemBody()
})
</script>

<template>
	<v-row>
		<v-col cols="12">
			<v-timeline direction="horizontal" density="compact">
				<v-timeline-item dot-color="primary" size="small" icon="mdi-check">
				</v-timeline-item>
				<v-timeline-item dot-color="primary" size="small" icon="mdi-check">
				</v-timeline-item>
				<v-timeline-item dot-color="primary" size="small" icon="mdi-check">
				</v-timeline-item>
			</v-timeline>
		</v-col>
		<v-col cols="12">
			<RouterView />
		</v-col>
	</v-row>
</template>
