<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { useMultiStepForm } from '@/composables'

interface StepData {
	[key: string]: string | number | null
}

const { currentStep, checkPreviousSteps, goToStep, getNextStep, getPrevStep } =
	useMultiStepForm()

const currentStepData = ref<StepData>({})

onBeforeMount(() => {
	checkPreviousSteps()
})

onMounted(() => {})
</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h3>{{ currentStep.meta.title }}</h3>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12"> </v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-btn
					@click="goToStep(getPrevStep() as any)"
					:disabled="!getPrevStep"
					color="grey"
					variant="flat"
				>
					Previous
				</v-btn>
				<v-btn
					@click="goToStep(getNextStep() as any)"
					color="blue"
					variant="flat"
				>
					Next
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>
