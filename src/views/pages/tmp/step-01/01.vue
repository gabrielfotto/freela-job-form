<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useMultiStepForm } from '@/composables'
import { lifeMapStep01FormInjectionKeySymbol } from '@/symbols'

const CURRENT_FORM_GROUP = 1 // identificador para o grupo de inputs - 01

const formGroupLocalAnswers = useLocalStorage(
	`${lifeMapStep01FormInjectionKeySymbol.description}`,
	{
		[CURRENT_FORM_GROUP]: {},
	}
)

const {
	data: formData,
	goToStep,
	getPrevStep,
	getNextStep,
} = useMultiStepForm(lifeMapStep01FormInjectionKeySymbol)

// TODO: criar tipagem para initialValues

const initialValues = computed(
	() =>
		formGroupLocalAnswers.value[CURRENT_FORM_GROUP] ||
		formData.value[CURRENT_FORM_GROUP]
)

const validationSchema = yup.object({
	text: yup.string().required('Campo obrigatório'),
})

const { meta, values, setValues, defineField, handleSubmit } = useForm({
	validationSchema,
	initialValues: initialValues.value,
})

const [text] = defineField('text')

const handleSubmitForm = handleSubmit(async () => {
	formGroupLocalAnswers.value[CURRENT_FORM_GROUP] = {
		...formGroupLocalAnswers.value[CURRENT_FORM_GROUP],
		...values,
	}

	await goToStep(getNextStep())
})

watch(
	values,
	newValues => {
		formData.value = {
			...formData.value,
			...newValues,
		}
	},
	{
		deep: true,
	}
)

onMounted(() => {
	setValues(initialValues.value || {})
})
</script>

<template>
	<v-card elevation="10" class="rounded-xl">
		<v-card-item class="px-4">
			<div class="d-flex flex-column">
				<span class="mb-2 font-weight-medium"
					>É casada(o), solteira(o) ou divorciada(o) - VOCÊ É FELIZ ASSIM?</span
				>
				<v-textarea
					v-model="text"
					placeholder="Escreva aqui..."
					variant="outlined"
					color="primary"
				/>
			</div>
		</v-card-item>
		<v-card-actions class="px-4">
			<v-row>
				<v-col>
					<div class="d-flex align-center justify-center">
						<v-btn
							v-if="getPrevStep()"
							@click="goToStep(getPrevStep() as any)"
							:disabled="!getPrevStep"
							color="#F7F7F7"
							variant="flat"
							width="49.5%"
							size="large"
						>
							Voltar
						</v-btn>
						<div v-if="getPrevStep()" class="mx-1"></div>
						<v-btn
							@click="handleSubmitForm"
							color="primary"
							variant="flat"
							size="large"
							:width="!getPrevStep() ? '100%' : '49.5%'"
							:disabled="!meta.valid"
						>
							Continuar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
