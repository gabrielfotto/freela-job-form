<script setup lang="ts">
import { computed } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm, useScrollToTop } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

useScrollToTop()
const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const formGroupLocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${lifeMapFormContext.currentStepId.value}`,
	{
		mainComplaint: '',
		lifeSatisfactionLevel: null,
	}
)

const validationSchema = yup.object({
	mainComplaint: yup.string().required('Campo obrigatório'),
	lifeSatisfactionLevel: yup.number().required('Campo obrigatório'),
})

const { meta, values, setValues, defineField, handleSubmit } = useForm({
	validationSchema,
	initialValues: formGroupLocalAnswers.value,
})

const [mainComplaint] = defineField('mainComplaint')
const [lifeSatisfactionLevel] = defineField('lifeSatisfactionLevel')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value = {
		...values,
	}

	await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
})
</script>

<template>
	<v-card elevation="10" class="rounded-xl-i">
		<v-card-item class="px-0">
			<v-row class="px-4">
				<v-col>
					<div class="d-flex flex-column">
						<span class="text-h4 mb-2">Qual sua queixa principal?</span>
						<span class="text-grey400 fs-14 mb-3"
							>Descreva o que mais incomoda ou preocupa você neste momento. Pode
							ser algo relacionado à sua vida pessoal, profissional, emocional
							ou qualquer outro aspecto.</span
						>
						<v-textarea
							v-model="mainComplaint"
							placeholder="Descreva aqui suas principais queixas"
							variant="outlined"
							color="primary"
							hide-details
						/>
						<v-divider class="mt-6 mb-4"></v-divider>
						<span class="font-weight-medium mb-2"
							>Quão feliz você está hoje?</span
						>
						<span class="text-grey400 fs-14 mb-3"
							>Avalie sua felicidade com uma nota de 1 a 10, onde 1 significa
							"nada feliz" e 10 significa "extremamente feliz".</span
						>
						<v-select
							v-model="lifeSatisfactionLevel"
							:items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
							placeholder="Selecione o grau de felicidade"
							hide-details
						></v-select>
					</div>
				</v-col>
			</v-row>
		</v-card-item>
		<v-divider class="mx-4 mb-4"></v-divider>
		<v-card-actions class="px-4 pb-10">
			<v-row>
				<v-col>
					<div class="d-flex align-center justify-center">
						<v-btn
							v-if="lifeMapFormContext.getPrevStep()"
							@click="
								lifeMapFormContext.goToStep(
									lifeMapFormContext.getPrevStep() as any
								)
							"
							:disabled="!lifeMapFormContext.getPrevStep()"
							color="primary"
							variant="outlined"
							width="49.5%"
							size="large"
						>
							Voltar
						</v-btn>
						<div v-if="lifeMapFormContext.getPrevStep()" class="mx-1"></div>
						<v-btn
							@click="handleSubmitForm"
							color="primary"
							variant="flat"
							size="large"
							:disabled="!meta.valid"
							:width="!lifeMapFormContext.getPrevStep() ? '100%' : '49%'"
							class="rounded-xl-i"
						>
							Continuar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
