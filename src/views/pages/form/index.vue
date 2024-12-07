<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'

import { useCustomizerStore } from '@/stores/customizer'

const { mdAndUp } = useDisplay()
const customizer = useCustomizerStore()
</script>

<template>
	<v-container class="px-3">
		<v-row>
			<v-col cols="12" class="px-4">
				<div class="d-flex justify-space-between align-center">
					<!-- <TrgClubLogo /> -->
					<span class="text-h3 font-weight-medium">Mapa da Vida</span>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-row>
					<v-col cols="12">
						<v-card elevation="10">
							<v-card-item class="px-4">
								<span class="text-grey400"
									>Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus, cupiditate repellendus aspernatur eveniet doloribus
									provident. Eveniet, natus adipisci, autem sit qui dignissimos
									numquam minus eum culpa iure, quaerat esse molestiae.</span
								>
							</v-card-item>
							<v-card-actions class="px-4">
								<v-btn
									to="/form/steps"
									size="large"
									color="primary"
									variant="flat"
									block
									>Começar</v-btn
								>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
