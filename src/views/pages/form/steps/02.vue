<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useDisplay } from 'vuetify'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm, useScrollToTop } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

useScrollToTop()
const { mobile } = useDisplay()

const CURRENT_FORM_STEP_ID = 1

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const defaultValues = {
	abandonment: {
		checked: false,
		level: null,
	},
	sexualAbuse: {
		checked: false,
		level: null,
	},
	verbalAbuse: {
		checked: false,
		level: null,
	},
	familyConflicts: {
		checked: false,
		level: null,
	},
	despair: {
		checked: false,
		level: null,
	},
	financialDifficulties: {
		checked: false,
		level: null,
	},
	humiliations: {
		checked: false,
		level: null,
	},
	trauma: {
		checked: false,
		level: null,
	},
	violence: {
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

// const fields = Object.keys(defaultValues).reduce((acc, key) => {
// 	// @ts-ignore
//   acc[key] = defineField(key)[0]
//   return acc
// }, {} as Record<string, ReturnType<typeof defineField>[0]>)

const [abandonment] = defineField('abandonment')
const [sexualAbuse] = defineField('sexualAbuse')
const [verbalAbuse] = defineField('verbalAbuse')
const [familyConflicts] = defineField('familyConflicts')
const [despair] = defineField('despair')
const [financialDifficulties] = defineField('financialDifficulties')
const [humiliations] = defineField('humiliations')
const [trauma] = defineField('trauma')
const [violence] = defineField('violence')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value = {
		...values,
	}

	await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
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
							Você já vivenciou alguma dessas experiências ao longo da sua vida?
						</span>
						<span class="text-grey400 fs-14">
							Marque as situações que você já enfrentou em qualquer fase da sua
							vida. Informe uma nota de 1 a 10, onde 1 significa "baixo
							desconforto" e 10 significa "alto desconforto".
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
					<v-checkbox
						v-model="sexualAbuse.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Abusos Sexuais</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="sexualAbuse.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="sexualAbuse.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="verbalAbuse.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Abusos Verbais</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="verbalAbuse.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="verbalAbuse.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="familyConflicts.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Conflitos Familiares</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="familyConflicts.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="familyConflicts.level"
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
					cols="12"
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
						v-model="financialDifficulties.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Dificuldades Financeiras</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="financialDifficulties.checked"
					col="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="financialDifficulties.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox
						v-model="humiliations.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium">Humilhações</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="humiliations.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="humiliations.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="trauma.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Traumas</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="trauma.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="trauma.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider class="mx-3"></v-divider>
				<v-col cols="12" md="4" :class="['px-1', mobile ? 'py-1' : '']">
					<v-checkbox v-model="violence.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Violência</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col
					v-if="violence.checked"
					cols="12"
					md="4"
					:class="mobile ? 'pt-0' : 'pt-3'"
				>
					<v-select
						v-model="violence.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
			</v-row>
		</v-card-item>
		<v-card-actions class="px-3 pb-10">
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
							Continuar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
