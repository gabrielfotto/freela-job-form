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
		{ to: '/form/steps/01', meta: { title: '01 - Queixa Principal' } },
		{
			to: '/form/steps/02',
			meta: { title: '02 - Experiência ao Longo da Vida' },
		},
		{ to: '/form/steps/03', meta: { title: '03 - Transtornos Atuais' } },
		{ to: '/form/steps/04', meta: { title: '04 - Corpo Físico' } },
		{ to: '/form/steps/05', meta: { title: '05 - Medos Futuros' } },
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
						</div>
					</v-col>
				</v-row>
				<v-col cols="12">
					<MultiStepTimeline :form-context="lifeMapFormContext" />
				</v-col>
				<v-row>
					<v-col cols="12">
						<v-row>
							<v-col cols="12">
								<RouterView />
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
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
