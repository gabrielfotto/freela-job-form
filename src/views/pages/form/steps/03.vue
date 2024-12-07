<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useDisplay } from 'vuetify'
import { useLocalStorage } from '@vueuse/core'

import { useMultiStepForm } from '@/composables'
import { lifeMapFormInjectionKeySymbol } from '@/symbols/form'

const { mobile } = useDisplay()

const lifeMapFormContext = useMultiStepForm(lifeMapFormInjectionKeySymbol)

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

const [alcoholism] = defineField('alcoholism')
const [anguish] = defineField('anguish')
const [anorexia] = defineField('anorexia')
const [anxiety] = defineField('anxiety')
const [generalizedAnxiety] = defineField('generalizedAnxiety')
const [lowSelfEsteem] = defineField('lowSelfEsteem')
const [borderline] = defineField('borderline')
const [bulimia] = defineField('bulimia')
const [burnout] = defineField('burnout')
const [excessiveJealousy] = defineField('excessiveJealousy')
const [bingeEating] = defineField('bingeEating')
const [sexualCompulsion] = defineField('sexualCompulsion')
const [depression] = defineField('depression')
const [despair] = defineField('despair')
const [erectileDysfunction] = defineField('erectileDysfunction')
const [financialScarcity] = defineField('financialScarcity')
const [lackOfLibido] = defineField('lackOfLibido')
const [phobias] = defineField('phobias')
const [failure] = defineField('failure')
const [frigidity] = defineField('frigidity')
const [insecurity] = defineField('insecurity')
const [fears] = defineField('fears')
const [moodSwing] = defineField('moodSwing')
const [panic] = defineField('panic')
const [uncontrolledAnger] = defineField('uncontrolledAnger')
const [remorse] = defineField('remorse')
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

	await lifeMapFormContext.goToStep(lifeMapFormContext.getNextStep())
})

const colsClasses = computed(() => (mobile ? 'pt-0' : 'pt-3'))
</script>

<template>
	<v-card elevation="10" class="rounded-xl-i">
		<v-card-item class="px-4">
			<v-row>
				<v-col cols="12">
					<div class="d-flex flex-column">
						<span class="text-h4 mb-2">
							Você possui alguns desses transtornos?
						</span>
						<span class="text-grey400">
							Dentre os temas listados abaixo, selecione aqueles que você deseja
							tratar na terapia:
						</span>
					</div>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="alcoholism.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Alcoolismo</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="alcoholism.checked" cols="12" md="4">
					<v-select
						v-model="alcoholism.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="anguish.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Angústia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="anguish.checked" cols="12" md="4">
					<v-select
						v-model="anguish.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="anorexia.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Anorexia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="anorexia.checked" cols="12" md="4">
					<v-select
						v-model="anorexia.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="anxiety.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Ansiedade</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="anxiety.checked" cols="12" md="4">
					<v-select
						v-model="anxiety.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="lowSelfEsteem.checked" cols="12" md="4">
					<v-select
						v-model="lowSelfEsteem.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="borderline.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Borderline</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="borderline.checked" cols="12" md="4">
					<v-select
						v-model="borderline.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="bulimia.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Bulimia</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="bulimia.checked" cols="12" md="4">
					<v-select
						v-model="bulimia.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="burnout.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Burnout</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="burnout.checked" cols="12" md="4">
					<v-select
						v-model="burnout.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="excessiveJealousy.checked" cols="12" md="4">
					<v-select
						v-model="excessiveJealousy.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="bingeEating.checked" cols="12" md="4">
					<v-select
						v-model="bingeEating.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="sexualCompulsion.checked" cols="12" md="4">
					<v-select
						v-model="sexualCompulsion.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="depression.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Depressão</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="depression.checked" cols="12" md="4">
					<v-select
						v-model="depression.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="despair.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Desespero</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="despair.checked" col="12" md="4">
					<v-select
						v-model="despair.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="erectileDysfunction.checked" cols="12" md="4">
					<v-select
						v-model="erectileDysfunction.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="financialScarcity.checked" cols="12" md="4">
					<v-select
						v-model="financialScarcity.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="lackOfLibido.checked" cols="12" md="4">
					<v-select
						v-model="lackOfLibido.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="phobias.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Fobias</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="phobias.checked" cols="12" md="4">
					<v-select
						v-model="phobias.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="failure.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Fracasso</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="failure.checked" cols="12" md="4">
					<v-select
						v-model="failure.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="frigidity.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Frigidez</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="frigidity.checked" cols="12" md="4">
					<v-select
						v-model="frigidity.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="insecurity.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Insegurança</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="insecurity.checked" cols="12" md="4">
					<v-select
						v-model="insecurity.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="fears.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Medos</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="fears.checked" cols="12" md="4">
					<v-select
						v-model="fears.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="moodSwing.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Oscilação de Humor</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="moodSwing.checked" cols="12" md="4">
					<v-select
						v-model="moodSwing.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="panic.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Pânico</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="panic.checked" cols="12" md="4">
					<v-select
						v-model="panic.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="uncontrolledAnger.checked" cols="12" md="4">
					<v-select
						v-model="uncontrolledAnger.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="remorse.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Remorso</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="remorse.checked" cols="12" md="4">
					<v-select
						v-model="remorse.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="feelingOfGuilt.checked" cols="12" md="4">
					<v-select
						v-model="feelingOfGuilt.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="loneliness.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Solidão</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="loneliness.checked" cols="12" md="4">
					<v-select
						v-model="loneliness.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="toc.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">TOC</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="toc.checked" cols="12" md="4">
					<v-select
						v-model="toc.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox
						v-model="deepSadness.checked"
						color="primary"
						hide-details
					>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>ViTristeza Profunda</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="deepSadness.checked" cols="12" md="4">
					<v-select
						v-model="deepSadness.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="shame.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium">Vergonha</span>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="shame.checked" cols="12" md="4">
					<v-select
						v-model="shame.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
					<v-checkbox v-model="bodyShame.checked" color="primary" hide-details>
						<template #label>
							<span class="text-h6 font-weight-medium"
								>Vergonha do Próprio Corpo</span
							>
						</template>
					</v-checkbox>
				</v-col>
				<v-col v-if="bodyShame.checked" cols="12" md="4">
					<v-select
						v-model="bodyShame.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="drugAddictions.checked" cols="12" md="4">
					<v-select
						v-model="drugAddictions.level"
						:items="levels"
						placeholder="Grau de desconforto"
						hide-details
					></v-select>
				</v-col>
				<v-divider></v-divider>
				<v-col cols="12" md="4">
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
				<v-col v-if="gamingAddictions.checked" cols="12" md="4">
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
