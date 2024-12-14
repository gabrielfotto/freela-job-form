<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useMultiStepForm } from '@/composables'
import { lifeMapStep02FormInjectionKeySymbol } from '@/symbols'

const { goToStep, getPrevStep, getNextStep, progress } = useMultiStepForm(
	lifeMapStep02FormInjectionKeySymbol
)

onMounted(() => {})
</script>

<template>
	<v-card elevation="10" class="rounded-xl">
		<v-card-item class="px-4">
			<div class="d-flex flex-column">
				<span class="mb-2 font-weight-medium"
					>É casada(o), solteira(o) ou divorciada(o) - VOCÊ É FELIZ ASSIM?</span
				>
				<v-textarea placeholder="..." variant="outlined" color="primary" />
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
							@click="goToStep(getNextStep() as any)"
							color="primary"
							variant="flat"
							size="large"
							:width="!getPrevStep() ? '100%' : '49.5%'"
						>
							Continuar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
