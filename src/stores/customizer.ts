import { defineStore } from 'pinia'
import config from '@/config'

export const useCustomizerStore = defineStore({
	id: 'customizer',
	state: () => ({
		Sidebar_drawer: config.Sidebar_drawer,
		Customizer_drawer: config.Customizer_drawer,
		mini_sidebar: config.mini_sidebar,
		setHorizontalLayout: config.setHorizontalLayout, // Horizontal layout
		setRTLLayout: config.setRTLLayout, // RTL layout
		theme: config.theme,
		boxed: config.boxed,
		setBorderCard: config.setBorderCard,
	}),

	getters: {},
	actions: {
		SET_SIDEBAR_DRAWER() {
			// @ts-ignore
			this.Sidebar_drawer = !this.Sidebar_drawer
		},
		SET_MINI_SIDEBAR(payload: any) {
			// @ts-ignore
			this.mini_sidebar = payload
		},
		SET_CUSTOMIZER_DRAWER(payload: any) {
			// @ts-ignore
			this.Customizer_drawer = payload
		},

		SET_LAYOUT(payload: any) {
			// @ts-ignore
			this.setHorizontalLayout = payload
		},
		SET_THEME(payload: any) {
			// @ts-ignore
			this.theme = payload
		},
		SET_CARD_BORDER(payload: any) {
			// @ts-ignore
			this.setBorderCard = payload
		},
	},
})
