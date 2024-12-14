<script setup lang="ts">
import { onBeforeMount, provide } from 'vue'
import { RouterView } from 'vue-router'

import {
	provideMultiStepForm,
	useMultiStepForm,
	useScrollToTop,
} from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

useScrollToTop()

const CURRENT_FORM_STEP_ID = 2

const formInjectionKeySymbol = Symbol('life-map-form-step-03')
provide('FORM_INJECTION_KEY_SYMBOL', formInjectionKeySymbol)
provide('CURRENT_STEP_ID', CURRENT_FORM_STEP_ID)

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const formContext = provideMultiStepForm(formInjectionKeySymbol, {
	initialState: {},
	steps: [
		{ to: '/form/steps/03/1', meta: { title: '' } },
		{ to: '/form/steps/03/2', meta: { title: '' } },
		{ to: '/form/steps/03/3', meta: { title: '' } },
		{ to: '/form/steps/03/4', meta: { title: '' } },
	],
	// só é nnecessário onSubmit caso tenha form como wrapper
	// onSubmit: data => handleSubmitForm(data),
})

// async function handleSubmitForm(data) {
// 	lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
// }

onBeforeMount(() => {
	lifeMapFormContext.setCurrentStepId(CURRENT_FORM_STEP_ID)
})
</script>

<template>
	<RouterView />
</template>
