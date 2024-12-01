<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'

import { provideMultiStepForm, useMultiStepForm } from '@/composables'
import {
	lifeMapFormInjectionKeySymbol,
	lifeMapStep02FormInjectionKeySymbol,
} from '@/symbols/form'

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const CURRENT_STEP_ID = 1
const formContext = provideMultiStepForm(lifeMapStep02FormInjectionKeySymbol, {
	initialState: {},
	steps: [
		{ to: '/step-02/01', meta: { title: 'Fase 02 - Mental | 01' } },
		{ to: '/step-02/02', meta: { title: 'Fase 02 - Mental | 02' } },
		{ to: '/step-02/03', meta: { title: 'Fase 02 - Mental | 03' } },
		{ to: '/step-02/04', meta: { title: 'Fase 02 - Mental | 04' } },
		{ to: '/step-02/05', meta: { title: 'Fase 02 - Mental | 05' } },
	],
	onSubmit: data => handleSubmitForm(data),
})

async function handleSubmitForm(data) {
	console.log('STEP 02 DATA', data)
	lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
}

onBeforeMount(() => {
	// defini a etapa do form principal -> Fase 02 - Mental
	lifeMapFormContext.setCurrentStepId(CURRENT_STEP_ID)
})
</script>

<template>
	<v-row>
		<v-col cols="12">
			<MultiStepTimeline :form-context="formContext" />
		</v-col>
		<v-col cols="12">
			<form
				action=""
				method="POST"
				novalidate
				@submit.prevent="formContext.handleSubmit"
			>
				<RouterView />
			</form>
		</v-col>
	</v-row>
</template>
