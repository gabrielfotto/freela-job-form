<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { useMultiStepForm } from '@/composables'

interface StepData {
	[key: string]: string | number | null
}

const { currentStep, checkPreviousSteps, goToStep, getNextStep, getPrevStep } =
	useMultiStepForm('')

const currentStepData = ref<StepData>({})

onBeforeMount(() => {
	checkPreviousSteps()
})

onMounted(() => {})
</script>

<template>
	<v-card elevation="10" class="rounded-xl">
		<v-card-item class="px-4">
			<span class="text-h4">{{ currentStep.meta.title }}</span>
			<span v-if="currentStep.meta.description" class="text-grey400 mt-3">{{
				currentStep.meta.description
			}}</span>
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
