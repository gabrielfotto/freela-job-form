<script setup lang="ts">
import { RouterView } from 'vue-router'

import { provideMultiStepForm } from '@/composables'

import { lifeMapFormInjectionKeySymbol } from '@/symbols'
import { FORM_STEPS } from '@/constants'

const lifeMapFormContext = provideMultiStepForm(lifeMapFormInjectionKeySymbol, {
	initialState: {},
	steps: FORM_STEPS,
})
</script>

<template>
	<v-container class="px-3 pb-10">
		<v-col cols="12">
			<MultiStepFormTimeline :form-context="lifeMapFormContext" />
		</v-col>
		<v-row>
			<v-col cols="12">
				<RouterView />
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="px-4">
				<div class="d-flex justify-center">
					<!-- <TrgClubLogo /> -->
					<TerapeutaDeResultadosLogo />
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
