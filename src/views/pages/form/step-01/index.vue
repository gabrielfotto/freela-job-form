<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
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
		{ to: '/step-01/05', meta: { title: 'Fase 01 - Vida Pessoal | 05' } },
	],
})

function getTimelineDotColor(stepId: number, index: number) {
	if (
		formContext.currentStepId.value > index ||
		formContext.currentStepId.value === stepId
	) {
		return 'primary'
	} else {
		return '#D9D9D9' // TODO: colocar no arquivo de tema
	}
}

function hadleRemoveTimelineItemBody() {
	const timelineItemBodyEls = document.querySelectorAll(
		'.v-timeline-item__body',
	)
	timelineItemBodyEls.forEach(el => el.remove())
}

async function handleSubmitForm() {
	console.log('lifeMapFormContext', lifeMapFormContext)
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
				<v-timeline-item
					v-for="(step, index) in formContext.steps.value"
					size="small"
					:dot-color="getTimelineDotColor(step.id, index)"
				>
					<template #icon>
						<v-icon v-if="formContext.currentStepId.value > index" size="small"
							>mdi-check</v-icon
						>
						<span v-else-if="formContext.currentStepId.value === step.id">{{
							index + 1
						}}</span>
						<span v-else>{{ index + 1 }}</span>
					</template>
				</v-timeline-item>
			</v-timeline>
		</v-col>
		<v-col cols="12">
			<form
				action=""
				method="POST"
				novalidate
				@submit.prevent="handleSubmitForm"
			>
				<RouterView />
			</form>
		</v-col>
	</v-row>
</template>
