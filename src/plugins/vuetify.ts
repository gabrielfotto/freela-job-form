import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//DragScroll
import { VueDraggableNext } from 'vue-draggable-next'
import { lightTheme } from '@/themes'

export default createVuetify({
	components: {
		draggable: VueDraggableNext,
	},
	directives,

	theme: {
		defaultTheme: 'light',
		themes: {
			light: lightTheme,
		},
	},
	defaults: {
		VCard: {
			rounded: 'md',
		},
		VTextField: {
			variant: 'outlined',
			density: 'comfortable',
			color: 'primary',
		},
		VTextarea: {
			variant: 'outlined',
			density: 'comfortable',
			color: 'primary',
		},
		VSelect: {
			variant: 'outlined',
			density: 'comfortable',
			color: 'primary',
		},
		VListItem: {
			minHeight: '45px',
		},
		VTooltip: {
			location: 'top',
		},
	},
})
