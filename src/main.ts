import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import VueTablerIcons from 'vue-tabler-icons'

//Mock Api data
// import VueDragscroll from "vue-dragscroll";

import { vMaska } from 'maska'

//i18
import { createI18n } from 'vue-i18n'
import messages from '@/utils/locales/messages'
import { registerGlobalComponents } from './plugins/components'

//ScrollTop
import VueScrollTo from 'vue-scrollto'

const i18n = createI18n({
	locale: 'en',
	messages: messages,
	silentTranslationWarn: true,
	silentFallbackWarn: true,
})

const app = createApp(App)
registerGlobalComponents(app)

app.directive('maska', vMaska)
app.use(router)
app.use(PerfectScrollbar)
// app.use(VueDragscroll);
app.use(createPinia())

app.use(VueTablerIcons)

app.use(i18n)
app.use(vuetify).mount('#app')

//ScrollTop Use
// app.use(VueScrollTo);
app.use(VueScrollTo, {
	duration: 1000,
	easing: 'ease',
})
