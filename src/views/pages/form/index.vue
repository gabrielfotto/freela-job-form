<script setup lang="ts"></script>

<template>
	<v-container class="px-3">
		<v-row>
			<v-col cols="12" class="px-4">
				<div class="d-flex justify-center">
					<!-- <TrgClubLogo /> -->
					<TerapeutaDeResultadosLogo />
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-row>
					<v-col cols="12">
						<v-card elevation="10">
							<v-card-item class="px-4">
								<div class="d-flex flex-column">
									<span class="text-h4 mb-2">Bem-vindo ao Mapa da Vida</span>
									<p class="text-grey400">
										Você está prestes a dar um passo importante no caminho do
										autoconhecimento. Este formulário foi criado para ajudá-lo a
										refletir sobre as experiências que moldaram sua vida e
										compreender os desafios que você enfrenta.
									</p>
									<br />
									<p class="text-grey400">
										Ao final, você receberá uma análise personalizada que
										destacará os pontos que merecem atenção para alcançar
										equilíbrio e bem-estar.
									</p>
									<br />
									<p class="text-grey400">
										Reserve um momento tranquilo e seja sincero consigo mesmo.
										Vamos começar?
									</p>
								</div>
							</v-card-item>
							<v-card-actions class="px-4 pb-10">
								<v-btn
									to="/form/steps"
									size="large"
									color="primary"
									variant="flat"
									block
									>Começar Minha Jornada</v-btn
								>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
