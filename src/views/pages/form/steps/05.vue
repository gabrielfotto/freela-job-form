<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm, useScrollToTop } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

useScrollToTop()
const router = useRouter()
const { mobile } = useDisplay()

const CURRENT_FORM_STEP_ID = 4

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const defaultValues = {
	abandonment: {
		checked: false,
		level: null,
	},
	illnesses: {
		checked: false,
		level: null,
	},
	death: {
		checked: false,
		level: null,
	},
	poverty: {
		checked: false,
		level: null,
	},
	loneliness: {
		checked: false,
		level: null,
	},
	oldAge: {
		checked: false,
		level: null,
	},
}

const formGroupLocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${CURRENT_FORM_STEP_ID}`,
	defaultValues
)

const initialValues = computed(() => ({
	...defaultValues,
	...formGroupLocalAnswers.value,
}))

// const validationSchema = yup.object({

// })

const { meta, values, setValues, defineField, handleSubmit } = useForm({
	// validationSchema,
	initialValues: initialValues.value,
})

const [abandonment] = defineField('abandonment')
const [illnesses] = defineField('illnesses')
const [death] = defineField('death')
const [poverty] = defineField('poverty')
const [loneliness] = defineField('loneliness')
const [oldAge] = defineField('oldAge')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value = {
		...values,
	}

	router.push('/form/capture')
	// await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
})

onBeforeMount(() => {
	lifeMapFormContext.setCurrentStepId(CURRENT_FORM_STEP_ID)
})
</script>

<template>
	<v-card elevation="10" class="rounded-xl-i">
		<v-card-item class="px-0">
			<v-row class="px-4">
				<v-col cols="12">
					<div class="d-flex flex-column">
						<span class="text-h4 mb-2">
							Em relação ao futuro, algum desses temas te trazem medo, angústia
							ou desconforto?
						</span>
						<span class="text-grey400 fs-14">
							Selecione os temas que despertam em você sentimentos como medo,
							angústia ou desconforto ao pensar no futuro. Informe uma nota de 1
							a 10, onde 1 significa "baixo desconforto" e 10 significa "alto
							desconforto".
						</span>
					</div>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="abandonment.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Abandono</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="abandonment.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="abandonment.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="illnesses.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Doenças</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="illnesses.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="illnesses.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="death.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Morte</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="death.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="death.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="poverty.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Pobreza</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="poverty.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="poverty.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="loneliness.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Solidão</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="loneliness.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="loneliness.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="oldAge.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Velhice</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="oldAge.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="oldAge.level"
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
							:width="!lifeMapFormContext.getPrevStep() ? '100%' : '49.5%'"
							class="rounded-xl-i"
						>
							Finalizar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
