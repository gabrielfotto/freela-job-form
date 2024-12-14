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
	failure: {
		checked: false,
		level: null,
	},
	frigidity: {
		checked: false,
		level: null,
	},
	insecurity: {
		checked: false,
		level: null,
	},
	fears: {
		checked: false,
		level: null,
	},
	moodSwing: {
		checked: false,
		level: null,
	},
	panic: {
		checked: false,
		level: null,
	},
	uncontrolledAnger: {
		checked: false,
		level: null,
	},
	remorse: {
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

const [failure] = defineField('failure')
const [frigidity] = defineField('frigidity')
const [insecurity] = defineField('insecurity')
const [fears] = defineField('fears')
const [moodSwing] = defineField('moodSwing')
const [panic] = defineField('panic')
const [uncontrolledAnger] = defineField('uncontrolledAnger')
const [remorse] = defineField('remorse')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value = {
		...values,
	}

	// await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
	await formContext.goToStep(formContext.getNextStep())
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
								>Parte 3</span
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
					<v-checkbox v-model="failure.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Fracasso</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="failure.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="failure.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="frigidity.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Frigidez</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="frigidity.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="frigidity.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="insecurity.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Insegurança</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="insecurity.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="insecurity.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="fears.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Medos</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="fears.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="fears.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="moodSwing.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Oscilação de Humor</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="moodSwing.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="moodSwing.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="panic.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Pânico</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="panic.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="panic.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="uncontrolledAnger.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Raiva Sem Controle</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="uncontrolledAnger.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="uncontrolledAnger.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="remorse.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Remorso</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="remorse.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="remorse.level"
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
