<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useMultiStepForm } from '@/composables'
import { lifeMapStep01FormInjectionKeySymbol } from '@/symbols'

const { goToStep, getPrevStep, getNextStep, progress } = useMultiStepForm(
	lifeMapStep01FormInjectionKeySymbol,
)

onMounted(() => {
	console.log('progress', progress.value)
})
</script>

<template>
	<v-card elevation="10" class="rounded-xl">
		<v-card-item class="px-4">
			<div class="d-flex flex-column">
				<span class="text-h4">Questão</span>
				<span class="text-grey400 mt-3">Descrição</span>
			</div>
		</v-card-item>
		<v-card-item class="px-4">
			<v-row> </v-row>
		</v-card-item>
		<v-card-actions class="px-4">
			<v-row>
				<v-col>
					<div class="d-flex align-center justify-center">
						<v-btn
							@click="goToStep(getPrevStep() as any)"
							:disabled="!getPrevStep"
							color="#F7F7F7"
							variant="flat"
							width="49%"
							size="large"
						>
							Voltar
						</v-btn>
						<v-btn
							@click="goToStep(getNextStep() as any)"
							color="primary"
							variant="flat"
							width="49%"
							size="large"
						>
							Continuar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
