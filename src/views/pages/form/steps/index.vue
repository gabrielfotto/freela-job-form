<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'

import { provideMultiStepForm } from '@/composables'
import { useCustomizerStore } from '@/stores/customizer'
import { lifeMapFormInjectionKeySymbol } from '@/symbols'
import { FORM_STEPS } from '@/constants'

const { mdAndUp } = useDisplay()
const customizer = useCustomizerStore()

const lifeMapFormContext = provideMultiStepForm(lifeMapFormInjectionKeySymbol, {
	initialState: {},
	steps: FORM_STEPS,
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
