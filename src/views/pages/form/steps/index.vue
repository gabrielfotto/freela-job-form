<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'

import { provideMultiStepForm } from '@/composables'
import { useCustomizerStore } from '@/stores/customizer'
import { lifeMapFormInjectionKeySymbol } from '@/symbols'

const { mdAndUp } = useDisplay()
const customizer = useCustomizerStore()

const lifeMapFormContext = provideMultiStepForm(lifeMapFormInjectionKeySymbol, {
	initialState: {},
	steps: [
		{ to: '/form/steps/01', meta: { title: 'Fase 01 - Vida Pessoal' } },
		{ to: '/form/steps/02', meta: { title: 'Fase 02 - Mental' } },
		{ to: '/form/steps/03', meta: { title: 'Fase 03 - Infância' } },
		{ to: '/form/steps/04', meta: { title: 'Fase 04 - Emocional' } },
		{ to: '/form/steps/05', meta: { title: 'Fase 04 - Emocional' } },
	],
})

onBeforeMount(() => {
	// lifeMapFormContext.checkPreviousSteps()
	// console.log('lifeMapFormContext', lifeMapFormContext.getStep())
})
</script>

<template>
	<v-locale-provider>
		<v-app :theme="customizer.theme">
			<v-container class="px-3">
				<v-row>
					<v-col cols="12" class="px-4">
						<div class="d-flex justify-space-between align-center">
							<!-- <TrgClubLogo /> -->
							<span class="text-h3 font-weight-medium">Mapa da Vida</span>
							<span class="text-h6 font-weight-medium text-grey400"
								>Formulário</span
							>
						</div>
					</v-col>
				</v-row>
				<v-col cols="12" class="px-0">
					<MultiStepTimeline :form-context="lifeMapFormContext" />
				</v-col>
				<v-row>
					<v-col cols="12">
						<v-row>
							<v-col cols="12" class="px-0">
								<RouterView />
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="px-0">
								<v-card elevation="0" class="rounded-xl-i">
									<v-card-item class="px-4 justify-center">
										<div
											:class="[
												'd-flex',
												'align-center',
												mdAndUp ? 'justify-center' : '',
											]"
										>
											<v-icon class="mr-3 text-grey400">mdi-lock</v-icon>
											<span class="text-grey400 fs-14"
												>Seus dados estão seguros.</span
											>
										</div>
									</v-card-item>
								</v-card>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</v-app>
	</v-locale-provider>
</template>
