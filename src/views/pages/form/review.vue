<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { lifeMapFormInjectionKeySymbol } from '@/symbols'

import { useScrollToTop } from '@/composables'
import { FORM_STEPS } from '@/constants'

useScrollToTop()

const step01Id = 0
const step02Id = 1
const step03Id = 2
const step04Id = 3
const step05Id = 4

const formGroupStep01LocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${step01Id}`,
	null
)
const formGroupStep02LocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${step02Id}`,
	null
)
const formGroupStep03LocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${step03Id}`,
	null
)
const formGroupStep04LocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${step04Id}`,
	null
)
const formGroupStep05LocalAnswers = useLocalStorage(
	`${lifeMapFormInjectionKeySymbol.description}:${step05Id}`,
	null
)

const formStepsData = {
	[step01Id]: JSON.parse(formGroupStep01LocalAnswers.value),
	[step02Id]: JSON.parse(formGroupStep02LocalAnswers.value),
	[step03Id]: JSON.parse(formGroupStep03LocalAnswers.value),
	[step04Id]: JSON.parse(formGroupStep04LocalAnswers.value),
	[step05Id]: JSON.parse(formGroupStep05LocalAnswers.value),
}

const step01 = computed(() => FORM_STEPS[step01Id])
const step02 = computed(() => FORM_STEPS[step02Id])
const step03 = computed(() => FORM_STEPS[step03Id])
const step04 = computed(() => FORM_STEPS[step04Id])
const step05 = computed(() => FORM_STEPS[step05Id])

function getFieldValue(type, stepId, key) {
	const value = formStepsData[stepId][key]
	if (type === 'select') return value.level
	return value
}
</script>

<template>
	<v-container class="px-6">
		<v-row>
			<v-col cols="12">
				<div class="d-flex justify-space-between align-center">
					<!-- <TrgClubLogo /> -->
					<span class="text-h3 font-weight-medium">Respostas</span>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-divider class="mb-6"></v-divider>
				<v-row>
					<v-col v-for="field in step01.fields" cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-4">{{
								field.name
							}}</span>
							<span v-if="field.type === 'text'" class="text-grey400">{{
								getFieldValue(field.type, 0, field.key)
							}}</span>
							<div v-else-if="field.type === 'select'">
								<v-chip>
									<span>{{ field.name }}</span>
									<template #append>
										<div class="rounded-xl bg-primary ml-3 px-2">
											{{ getFieldValue(field.type, step01Id, field.key) }}
										</div>
									</template>
								</v-chip>
							</div>
						</div>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<v-divider class="mb-6"></v-divider>
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-4">{{
								step02.meta.title
							}}</span>
							<v-chip-group column>
								<div v-for="field in step02.fields">
									<v-chip v-if="getFieldValue(field.type, step02Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step02Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</div>
							</v-chip-group>
						</div>
						<v-divider class="mt-6"></v-divider>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-4">{{
								step03.meta.title
							}}</span>
							<v-chip-group column>
								<div v-for="field in step03.fields">
									<v-chip v-if="getFieldValue(field.type, step03Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step03Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</div>
							</v-chip-group>
						</div>
						<v-divider class="mt-6"></v-divider>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-4">{{
								step04.meta.title
							}}</span>
							<v-chip-group column>
								<div v-for="field in step04.fields">
									<v-chip v-if="getFieldValue(field.type, step04Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step04Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</div>
							</v-chip-group>
						</div>
						<v-divider class="mt-6"></v-divider>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-4">{{
								step05.meta.title
							}}</span>
							<v-chip-group column>
								<div v-for="field in step05.fields">
									<v-chip v-if="getFieldValue(field.type, step05Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step05Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</div>
							</v-chip-group>
						</div>
						<v-divider class="mt-6"></v-divider>
					</v-col>
				</v-row>

				<v-row class="mb-10">
					<v-col cols="12">
						<div class="d-flex flex-column">
							<v-btn block color="primary" size="large"
								>Receber Resultado</v-btn
							>
							<v-btn
								block
								color="primary"
								variant="outlined"
								size="large"
								to="/form/steps"
								class="mt-6"
								>Voltar</v-btn
							>
						</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
