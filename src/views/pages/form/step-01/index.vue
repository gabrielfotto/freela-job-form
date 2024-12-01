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
		{ to: '/step-01/01', meta: { title: 'Fase 02 - Mental | 01' } },
		{ to: '/step-01/02', meta: { title: 'Fase 02 - Mental | 02' } },
		{ to: '/step-01/03', meta: { title: 'Fase 02 - Mental | 03' } },
		{ to: '/step-01/04', meta: { title: 'Fase 02 - Mental | 04' } },
		{ to: '/step-01/05', meta: { title: 'Fase 02 - Mental | 05' } },
	],
})

async function handleSubmitForm() {
	console.log('lifeMapFormContext', lifeMapFormContext.getStep())
	lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
}

onBeforeMount(() => {
	lifeMapFormContext.setCurrentStepId(0)
})

onMounted(() => {})
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
				@submit.prevent="handleSubmitForm"
			>
				<RouterView />
			</form>
		</v-col>
	</v-row>
</template>
