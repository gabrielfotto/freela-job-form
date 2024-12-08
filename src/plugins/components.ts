import type { App } from 'vue'

import TerapeutaDeResultadosLogo from '@/components/shared/TerapeutaDeResultadosLogo.vue'
import TrgClubLogo from '@/components/shared/TrgClubLogo.vue'
import MultiStepFormProvider from '@/components/shared/MultiStepFormProvider.vue'
import MultiStepFormTimeline from '@/components/shared/MultiStepFormTimeline.vue'

export function registerGlobalComponents(app: App): void {
	app.component('TerapeutaDeResultadosLogo', TerapeutaDeResultadosLogo)
	app.component('TrgClubLogo', TrgClubLogo)
	app.component('MultiStepFormProvider', MultiStepFormProvider)
	app.component('MultiStepFormTimeline', MultiStepFormTimeline)
}
