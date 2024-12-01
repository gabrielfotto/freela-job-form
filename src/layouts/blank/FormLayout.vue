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
		{ to: '/step-01', meta: { title: 'Fase 01 - Vida Pessoal' } },
		{ to: '/step-02', meta: { title: 'Fase 02 - Mental' } },
		{ to: '/step-03', meta: { title: 'Fase 03 - Infância' } },
		{ to: '/step-03', meta: { title: 'Fase 04 - Emocional' } },
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
							<TrgClubLogo />
							<span class="text-h6 font-weight-medium">Anamnese</span>
						</div>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-row>
							<v-col cols="12">
								<RouterView />
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<v-card elevation="0">
									<v-card-item class="px-4">
										<div
											:class="[
												'd-flex',
												'align-center',
												mdAndUp ? 'justify-center' : '',
											]"
										>
											<v-icon class="mr-3 text-grey400">mdi-lock</v-icon>
											<span class="text-grey400 fs-14"
												>Esta página é segura. Apenas o terapeuta terá acesso às
												suas respostas</span
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
