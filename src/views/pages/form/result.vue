<script setup lang="ts">
import { computed } from 'vue'
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

function isAtLeastOneChecked(stepId) {
	return Object.values(formStepsData[stepId]).some(({ checked }) => checked)
}

function getFieldValue(type, stepId, key) {
	const value = formStepsData[stepId][key]
	if (stepId === 0) return value
	if (type === 'select' && value.checked) return value.level
	else if (type === 'select' && !value.checked) return null
	return value
}
</script>

<template>
	<v-container class="px-6 pb-10">
		<v-row>
			<v-col cols="12">
				<div class="d-flex flex-column">
					<span class="text-h3 font-weight-medium mb-2"
						>Seu Mapa da Vida Revela...</span
					>
					<p>
						Após analisar suas respostas, percebemos que algumas questões têm
						causado impacto significativo em sua vida.
					</p>
					<br />
					<p>
						A intensidade relatada para os problemas identificados indica que
						essas situações podem estar influenciando suas emoções, decisões e
						até mesmo sua saúde física e mental.
					</p>
					<!-- <p>
						Após analisar suas respostas, percebemos que algumas questões têm
						causado impacto significativo em sua vida.
					</p>
					<br />
					<p>
						A intensidade relatada para os problemas identificados indica que
						essas situações podem estar influenciando suas emoções, decisões e
						até mesmo sua saúde física e mental.
					</p> -->
				</div>
			</v-col>
		</v-row>
		<v-divider class="my-4"></v-divider>
		<v-row>
			<v-col cols="12">
				<span class="text-h5 font-weight-medium"
					>Os desafios identificados incluem:</span
				>
			</v-col>
		</v-row>
		<v-divider class="my-4"></v-divider>
		<v-row>
			<v-col cols="12">
				<!-- <v-row>
					<v-col v-for="field in step01.fields" cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-4">{{
								field.name
							}}</span>
							<span v-if="field.type === 'text'" class="text-grey400">{{
								getFieldValue(field.type, step01Id, field.key)
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
				</v-row> -->

				<v-row v-if="isAtLeastOneChecked(step02Id)">
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-2">{{
								step02.meta.title
							}}</span>
							<v-chip-group column>
								<template v-for="field in step02.fields">
									<v-chip v-if="getFieldValue(field.type, step02Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step02Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</template>
							</v-chip-group>
						</div>
						<v-divider class="mt-6"></v-divider>
					</v-col>
				</v-row>

				<v-row v-if="isAtLeastOneChecked(step03Id)">
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-2">{{
								step03.meta.title
							}}</span>
							<v-chip-group column>
								<template v-for="field in step03.fields">
									<v-chip v-if="getFieldValue(field.type, step03Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step03Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</template>
							</v-chip-group>
						</div>
						<v-divider class="mt-3"></v-divider>
					</v-col>
				</v-row>

				<v-row v-if="isAtLeastOneChecked(step04Id)">
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-2">{{
								step04.meta.title
							}}</span>
							<v-chip-group column>
								<template v-for="field in step04.fields">
									<v-chip v-if="getFieldValue(field.type, step04Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step04Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</template>
							</v-chip-group>
						</div>
						<v-divider class="mt-3"></v-divider>
					</v-col>
				</v-row>

				<v-row v-if="isAtLeastOneChecked(step05Id)">
					<v-col cols="12">
						<div class="d-flex flex-column">
							<span class="text-h6 font-weight-medium mb-2">{{
								step05.meta.title
							}}</span>
							<v-chip-group column>
								<template v-for="field in step05.fields">
									<v-chip v-if="getFieldValue(field.type, step05Id, field.key)">
										<span>{{ field.name }}</span>
										<template #append>
											<div class="rounded-xl bg-primary ml-3 px-2">
												{{ getFieldValue(field.type, step05Id, field.key) }}
											</div>
										</template>
									</v-chip>
								</template>
							</v-chip-group>
						</div>
						<v-divider class="mt-3"></v-divider>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<div class="d-flex flex-column">
							<p>
								Esses desafios são sinais de temas importantes a serem
								reprocessados. Para entender como transformar essas dificuldades
								em superação, é fundamental acompanhar o Mini Curso Terapeutas
								de Resultados até o fim.
							</p>
							<br />
							<p>
								A Terapia de Reprocessamento Generativo (TRG) é um método eficaz
								para ajudar pessoas a ressignificarem experiências do passado,
								eliminarem dores emocionais e construírem uma vida mais
								equilibrada e feliz.
							</p>
							<br />
							<p>
								Continue com o minicurso e descubra como a TRG pode ser a chave
								para sua transformação.
							</p>
						</div>
					</v-col>
				</v-row>

				<!-- <v-row>
					<v-col cols="12">
						<div class="d-flex flex-column">
							<p>
								Esses desafios podem ser sinais de padrões emocionais ou traumas
								que, muitas vezes, permanecem ocultos, mas impactam
								profundamente nosso bem-estar. A boa notícia é que há caminhos
								eficazes para lidar com essas questões e transformá-las em
								aprendizado e superação.
							</p>
							<br />
							<span class="text-h4 font-weight-medium mb-2"
								>Por que iniciar um processo terapêutico agora?</span
							>
							<p>
								A Terapia de Reprocessamento Generativo (TRG) é um método
								reconhecido por ajudar pessoas a se libertarem de dores
								emocionais, reprocessando traumas e ressignificando experiências
								do passado.
							</p>
							<br />
							<p>
								Um terapeuta da TRG pode guiá-lo nesse processo, ajudando-o a:
							</p>
							<br />
							<ul class="mx-6">
								<li>
									Reduzir ou eliminar a intensidade dos sentimentos
									desconfortáveis.
								</li>
								<li>Resgatar sua autoconfiança e bem-estar emocional.</li>
								<li>
									Construir uma vida mais leve, equilibrada e alinhada aos seus
									valores.
								</li>
							</ul>
							<br />
							<span class="text-h4 font-weight-medium mb-2"
								>Próximo passo:</span
							>
							<p>
								Dê a si mesmo a oportunidade de transformar sua história. Entre
								em contato com um terapeuta da TRG e inicie essa jornada de cura
								e crescimento emocional.
							</p>
							<br />
							<p>Você merece se sentir em paz consigo mesmo.</p>
						</div>
					</v-col>
				</v-row>

				<v-row class="mb-10">
					<v-col cols="12">
						<div class="d-flex flex-column">
							<v-btn block color="primary" size="large" variant="flat"
								>Entrar em Contato</v-btn
							>
						</div>
					</v-col>
				</v-row> -->
			</v-col>
		</v-row>
	</v-container>
</template>
