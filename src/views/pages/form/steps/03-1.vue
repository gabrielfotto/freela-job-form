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
	alcoholism: {
		checked: false,
		level: null,
	},
	anguish: {
		checked: false,
		level: null,
	},
	anorexia: {
		checked: false,
		level: null,
	},
	anxiety: {
		checked: false,
		level: null,
	},
	generalizedAnxiety: {
		checked: false,
		level: null,
	},
	lowSelfEsteem: {
		checked: false,
		level: null,
	},
	borderline: {
		checked: false,
		level: null,
	},
	bulimia: {
		checked: false,
		level: null,
	},
	burnout: {
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

const [alcoholism] = defineField('alcoholism')
const [anguish] = defineField('anguish')
const [anorexia] = defineField('anorexia')
const [anxiety] = defineField('anxiety')
const [generalizedAnxiety] = defineField('generalizedAnxiety')
const [lowSelfEsteem] = defineField('lowSelfEsteem')
const [borderline] = defineField('borderline')
const [bulimia] = defineField('bulimia')
const [burnout] = defineField('burnout')

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
								>Parte 1</span
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
					<v-checkbox v-model="alcoholism.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Alcoolismo</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="alcoholism.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="alcoholism.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="anguish.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Angústia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="anguish.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="anguish.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="anorexia.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Anorexia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="anorexia.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="anorexia.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="anxiety.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Ansiedade</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="anxiety.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="anxiety.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="generalizedAnxiety.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Ansiedade Generalizada</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="generalizedAnxiety.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="generalizedAnxiety.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="lowSelfEsteem.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Autoestima Baixa</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="lowSelfEsteem.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="lowSelfEsteem.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="borderline.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Borderline</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="borderline.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="borderline.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="bulimia.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Bulimia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="bulimia.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="bulimia.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="burnout.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Burnout</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="burnout.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="burnout.level"
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
