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
	excessiveJealousy: {
		checked: false,
		level: null,
	},
	bingeEating: {
		checked: false,
		level: null,
	},
	sexualCompulsion: {
		checked: false,
		level: null,
	},
	depression: {
		checked: false,
		level: null,
	},
	despair: {
		checked: false,
		level: null,
	},
	erectileDysfunction: {
		checked: false,
		level: null,
	},
	financialScarcity: {
		checked: false,
		level: null,
	},
	lackOfLibido: {
		checked: false,
		level: null,
	},
	phobias: {
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

const [excessiveJealousy] = defineField('excessiveJealousy')
const [bingeEating] = defineField('bingeEating')
const [sexualCompulsion] = defineField('sexualCompulsion')
const [depression] = defineField('depression')
const [despair] = defineField('despair')
const [erectileDysfunction] = defineField('erectileDysfunction')
const [financialScarcity] = defineField('financialScarcity')
const [lackOfLibido] = defineField('lackOfLibido')
const [phobias] = defineField('phobias')

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
								>Parte 2</span
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
						v-model="excessiveJealousy.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Ciúmes Excessivos</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="excessiveJealousy.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="excessiveJealousy.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="bingeEating.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Compulsão Alimentar</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="bingeEating.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="bingeEating.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="sexualCompulsion.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Compulsão Sexual</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="sexualCompulsion.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="sexualCompulsion.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="depression.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Depressão</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="depression.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="depression.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="despair.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Desespero</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="despair.checked"
					col="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="despair.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="erectileDysfunction.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Disfunção Erétil</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="erectileDysfunction.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="erectileDysfunction.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="financialScarcity.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Escassez Financeira</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="financialScarcity.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="financialScarcity.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="lackOfLibido.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Falta de Libido</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="lackOfLibido.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="lackOfLibido.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="phobias.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Fobias</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="phobias.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="phobias.level"
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
