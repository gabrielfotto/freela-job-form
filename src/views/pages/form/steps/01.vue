<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const CURRENT_STEP_ID = 1

const formGroupLocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}`,
	{
		[CURRENT_STEP_ID]: {} as any,
	}
)

const initialValues = computed<{
	text: string
}>(() => formGroupLocalAnswers.value[CURRENT_STEP_ID])

const validationSchema = yup.object({
	text: yup.string().required('Campo obrigatório'),
})

const { meta, values, setValues, defineField, handleSubmit } = useForm({
	validationSchema,
	initialValues: initialValues.value,
})

const [text] = defineField('text')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value[CURRENT_STEP_ID] = {
		...formGroupLocalAnswers.value[CURRENT_STEP_ID],
		...values,
	}

	await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
})
</script>

<template>
	<v-card elevation="10" class="rounded-xl-i">
		<v-card-item class="px-4">
			<div class="d-flex flex-column">
				<span class="text-h4 mb-2">O que te trouxe até aqui hoje?</span>
				<span
					>Para que seu terapeuta possa trazer o melhor atendimento para você,
					por favor, responda as perguntas a seguir:</span
				>
				<v-divider class="my-6"></v-divider>
				<span class="text-h6 mb-2">Qual a sua queixa principal?</span>
				<v-textarea
					v-model="text"
					placeholder="Escreva aqui..."
					variant="outlined"
					color="primary"
				/>
				<v-divider class="my-6"></v-divider>
				<span class="text-h6 mb-2"
					>O quanto você se sente feliz com a sua vida hoje?</span
				>
				<div class="d-flex align-center">
					<v-select
						:items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
						placeholder="Selecione o grau de felicidade"
					></v-select>
					<v-tooltip>
						<template #activator="{ props }">
							<v-icon v-bind="props" class="text-grey400 ml-4 mb-5"
								>mdi-information-outline</v-icon
							>
						</template>
						<span></span>
					</v-tooltip>
				</div>
			</div>
			<v-divider class="mt-6"></v-divider>
		</v-card-item>
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
							color="#F7F7F7"
							variant="flat"
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
