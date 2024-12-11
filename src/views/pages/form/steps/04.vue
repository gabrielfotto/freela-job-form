<script setup lang="ts">
import { computed } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useDisplay } from 'vuetify'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm, useScrollToTop } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

useScrollToTop()
const { mobile } = useDisplay()

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const defaultValues = {
	allergies: {
		checked: false,
		level: null,
	},
	skinDiseases: {
		checked: false,
		level: null,
	},
	autoimmuneDiseases: {
		checked: false,
		level: null,
	},
	headache: {
		checked: false,
		level: null,
	},
	fibromyalgia: {
		checked: false,
		level: null,
	},
}

const formGroupLocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${lifeMapFormContext.currentStepId.value}`,
	defaultValues
)

const initialValues = computed(() => ({
	...defaultValues,
	...formGroupLocalAnswers.value,
}))

// const validationSchema = yup.object({
// familyConflicts: yup.object({
// 	checked: yup.boolean().nullable(),
// 	level: yup
// 		.number()
// 		.nullable()
// 		.min(1, 'Deve ser um número entre 1 e 10')
// 		.max(10, 'Deve ser um número entre 1 e 10'),
// }),
// trauma: yup.object({
// 	checked: yup.boolean().nullable(),
// 	level: yup
// 		.number()
// 		.nullable()
// 		.min(1, 'Deve ser um número entre 1 e 10')
// 		.max(10, 'Deve ser um número entre 1 e 10'),
// }),
// })

const { meta, values, setValues, defineField, handleSubmit } = useForm({
	// validationSchema,
	initialValues: initialValues.value,
})

const [allergies] = defineField('allergies')
const [skinDiseases] = defineField('skinDiseases')
const [autoimmuneDiseases] = defineField('autoimmuneDiseases')
const [headache] = defineField('headache')
const [fibromyalgia] = defineField('fibromyalgia')

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
				<v-col cols="12">
					<div class="d-flex flex-column">
						<span class="text-h4 mb-2">
							Você possui alguma dor, doença ou desconforto no corpo físico?
						</span>
						<span class="text-grey400 fs-14">
							Indique se você enfrenta dores, doenças ou desconfortos físicos e
							qual o grau de desconforto atual. Informe uma nota de 1 a 10, onde
							1 significa "baixo desconforto" e 10 significa "alto desconforto".
						</span>
					</div>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="allergies.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Alergias</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="allergies.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="allergies.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="skinDiseases.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Doenças na Pele</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="skinDiseases.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="skinDiseases.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="autoimmuneDiseases.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Doenças Autoimune</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="autoimmuneDiseases.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="autoimmuneDiseases.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="headache.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Enxaqueca</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="headache.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="headache.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="fibromyalgia.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Fibromialgia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="fibromyalgia.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="fibromyalgia.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
			</v-row>
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
