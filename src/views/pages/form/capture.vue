<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useRouter } from 'vue-router'

const router = useRouter()
const phoneMask = { mask: '(##) # ####-####' }

const validationSchema = yup.object({
	name: yup.string().required('Nome é obrigatório'),
	email: yup.string().email('Email inválido').required('Email é obrigatório'),
	phone: yup
		.string()
		.required('Telefone é obrigatório')
		.matches(/^\(\d{2}\) \d \d{4}-\d{4}$/, 'Telefone inválido'),
	dataConsent1: yup
		.boolean()
		.oneOf([true], 'Você precisa concordar para continuar'),
	dataConsent2: yup
		.boolean()
		.oneOf([true], 'Você precisa concordar para continuar'),
})

const { meta, errors, defineField, handleSubmit } = useForm({
	validationSchema,
	initialValues: {
		name: '',
		email: '',
		phone: '',
		dataConsent1: false,
		dataConsent2: false,
	},
})

const [name] = defineField('name')
const [email] = defineField('email')
const [phone] = defineField('phone')
const [dataConsent1] = defineField('dataConsent1')
const [dataConsent2] = defineField('dataConsent2')

const handleSubmitForm = handleSubmit(async () => {
	router.push('/form/result')
})
</script>

<template>
	<v-container class="px-3 pb-10">
		<v-row>
			<v-col cols="12">
				<v-card elevation="10">
					<v-card-item class="px-0">
						<v-row class="px-4">
							<v-col cols="12">
								<div class="d-flex flex-column">
									<span class="text-h4 mb-2">
										Preencha os dados abaixo para ver o resultado do seu Mapa da
										Vida</span
									>
								</div>
							</v-col>
							<v-divider class="mx-4"></v-divider>
							<v-col cols="12">
								<div class="d-flex flex-column">
									<span class="font-weight-medium mb-2">Nome</span>
									<v-text-field
										v-model="name"
										placeholder="Digite seu nome aqui..."
										:error-messages="errors.name"
									></v-text-field>
								</div>
							</v-col>
							<v-divider class="mx-4"></v-divider>
							<v-col cols="12">
								<div class="d-flex flex-column">
									<span class="font-weight-medium mb-2">Email</span>
									<v-text-field
										v-model="email"
										placeholder="Digite seu email aqui..."
										:error-messages="errors.email"
									></v-text-field>
								</div>
							</v-col>
							<v-divider class="mx-4"></v-divider>
							<v-col cols="12">
								<div class="d-flex flex-column">
									<span class="font-weight-medium mb-2">Telefone</span>
									<v-text-field
										v-model="phone"
										v-maska:[phoneMask]
										placeholder="Digite seu telefone aqui..."
										:error-messages="errors.phone"
										type="tel"
									></v-text-field>
								</div>
							</v-col>
							<v-divider class="mx-4"></v-divider>
							<v-col cols="12" class="px-1">
								<v-checkbox
									v-model="dataConsent1"
									color="primary"
									:error-messages="errors.dataConsent1"
								>
									<template #label>
										<span class="text-grey400"
											>Autorizo IBFT/TRG a usar meus dados de contato para envio
											de promoções e conteúdos relacionados. Estou ciente de que
											posso cancelar essa autorização a qualquer momento.</span
										>
									</template>
									<template #message="{ message }">
										<span class="text-error ml-6">{{ message }}</span>
									</template>
								</v-checkbox>
							</v-col>
							<v-divider class="mx-4"></v-divider>
							<v-col cols="12" class="px-1">
								<v-checkbox
									v-model="dataConsent2"
									color="primary"
									:error-messages="errors.dataConsent2"
								>
									<template #label>
										<span class="text-grey400"
											>Autorizo IBFT/TRG a usar as informações sobre meu estado
											emocional para personalizar a comunicação comigo, conforme
											a Política de Privacidade.</span
										>
									</template>
									<template #message="{ message }">
										<span class="text-error ml-6">{{ message }}</span>
									</template>
								</v-checkbox>
							</v-col>
						</v-row>
					</v-card-item>
					<v-divider class="mx-4 mb-4"></v-divider>
					<v-card-actions class="px-4 pb-10">
						<v-row>
							<v-col cols="12">
								<v-btn
									@click="handleSubmitForm"
									size="large"
									color="primary"
									variant="flat"
									block
									>Ver Meu Resultado</v-btn
								>
							</v-col>
						</v-row>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="px-4">
				<div class="d-flex justify-center">
					<TerapeutaDeResultadosLogo />
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
