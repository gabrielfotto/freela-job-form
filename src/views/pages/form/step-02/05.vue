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
							width="49.5%"
							size="large"
						>
							Voltar
						</v-btn>
						<div class="mx-1"></div>
						<v-btn
							@click="goToStep(getNextStep() as any)"
							color="primary"
							variant="flat"
							width="49.5%"
							size="large"
							type="submit"
						>
							Finalizar
						</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>
