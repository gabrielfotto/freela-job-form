<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

import { provideMultiStepForm, useMultiStepForm } from '@/composables'
import {
	lifeMapFormInjectionKeySymbol,
	lifeMapStep01FormInjectionKeySymbol,
} from '@/symbols/form'

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const CURRENT_FORM_STEP_ID = 0

const initialState = useLocalStorage(
	`${lifeMapStep01FormInjectionKeySymbol.description}`,
	{}
)

const formContext = provideMultiStepForm(lifeMapStep01FormInjectionKeySymbol, {
	initialState: initialState.value,
	steps: [
		{ to: '/step-01/01', meta: { title: 'Fase 01 - Dados Pessoais | 01' } },
		{ to: '/step-01/02', meta: { title: 'Fase 01 - Dados Pessoais | 02' } },
		{ to: '/step-01/03', meta: { title: 'Fase 01 - Dados Pessoais | 03' } },
		{ to: '/step-01/04', meta: { title: 'Fase 01 - Dados Pessoais | 04' } },
		{ to: '/step-01/05', meta: { title: 'Fase 01 - Dados Pessoais | 05' } },
	],
	onSubmit: data => handleSubmitForm(data),
})

async function handleSubmitForm(data) {
	console.log('STEP 01 DATA', data)
	lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
}

onBeforeMount(() => {
	// defini a etapa do form principal -> Fase 01 - Dados Pessoais
	lifeMapFormContext.setCurrentStepId(CURRENT_FORM_STEP_ID)
})
</script>

<template>
	<v-row>
		<v-col cols="12">
			<MultiStepFormTimeline :form-context="formContext" />
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
