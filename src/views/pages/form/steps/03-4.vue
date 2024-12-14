<script setup lang="ts">
import { computed, inject } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useDisplay } from 'vuetify'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm, useScrollToTop } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

const CURRENT_STEP_ID = inject('CURRENT_STEP_ID')
const formInjectionKeySymbol = inject<Symbol>('FORM_INJECTION_KEY_SYMBOL')

useScrollToTop()
const { mobile } = useDisplay()

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)
const formContext = useMultiStepForm(formInjectionKeySymbol)

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const defaultValues = {
	feelingOfGuilt: {
		checked: false,
		level: null,
	},
	loneliness: {
		checked: false,
		level: null,
	},
	toc: {
		checked: false,
		level: null,
	},
	deepSadness: {
		checked: false,
		level: null,
	},
	shame: {
		checked: false,
		level: null,
	},
	bodyShame: {
		checked: false,
		level: null,
	},
	drugAddictions: {
		checked: false,
		level: null,
	},
	gamingAddictions: {
		checked: false,
		level: null,
	},
}

const formGroupLocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${CURRENT_STEP_ID}-${formContext.currentStepId.value}`,
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

const [feelingOfGuilt] = defineField('feelingOfGuilt')
const [loneliness] = defineField('loneliness')
const [toc] = defineField('toc')
const [deepSadness] = defineField('deepSadness')
const [shame] = defineField('shame')
const [bodyShame] = defineField('bodyShame')
const [drugAddictions] = defineField('drugAddictions')
const [gamingAddictions] = defineField('gamingAddictions')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value = {
		...values,
	}

	const nextStepIp = formContext.getNextStep()
	if (nextStepIp) {
		await formContext.goToStep(nextStepIp)
	} else {
		await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
	}
})

async function handlePrevStep() {
	const prevStepId = formContext.getPrevStep()
	if (prevStepId) {
		await formContext.goToStep(prevStepId)
	} else {
		await lifeMapFormContext.goToStep(lifeMapFormContext.getPrevStep())
	}
}
</script>

<template>
	<v-card elevation="10" class="rounded-xl-i">
		<v-card-item class="px-0">
			<v-row class="px-4">
				<v-col cols="12">
					<div class="d-flex flex-column">
						<span class="text-h4 mb-2">
							Você possui alguns desses transtornos?
							<span class="font-weight-medium text-decoration-underline"
								>Parte 4</span
							>
						</span>
						<span class="text-grey400 fs-14">
							Selecione os transtornos que você já foi diagnosticado ou que
							acredita enfrentar e qual o grau de desconforto atual. Informe uma
							nota de 1 a 10, onde 1 significa "baixo desconforto" e 10
							significa "alto desconforto".
						</span>
					</div>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="feelingOfGuilt.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Sentimento de Culpa</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="feelingOfGuilt.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="feelingOfGuilt.level"
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
					<v-checkbox v-model="toc.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">TOC</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="toc.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="toc.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="deepSadness.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Tristeza Profunda</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="deepSadness.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="deepSadness.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="shame.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Vergonha</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="shame.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="shame.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="bodyShame.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Vergonha do Próprio Corpo</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="bodyShame.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="bodyShame.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="drugAddictions.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Vícios em Drogas</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="drugAddictions.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="drugAddictions.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="gamingAddictions.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Vícios em Jogos</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="gamingAddictions.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="gamingAddictions.level"
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
							@click="handlePrevStep"
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
							Continuar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
