import type { App } from 'vue'

import TrgClubLogo from '@/components/shared/TrgClubLogo.vue'
import MultiStepFormProvider from '@/components/shared/MultiStepFormProvider.vue'

export function registerGlobalComponents(app: App): void {
	app.component('TrgClubLogo', TrgClubLogo)
	app.component('MultiStepFormProvider', MultiStepFormProvider)
}