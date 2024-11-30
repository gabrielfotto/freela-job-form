import { defineStore } from 'pinia'
import { router } from '@/router'

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		// initialize state from local storage to enable user to stay logged in
		// @ts-ignore
		user: JSON.parse(localStorage.getItem('user')),
		returnUrl: null,
	}),
	actions: {
		async login(username: string, password: string) {},
		logout() {
			this.user = null
			router.push('/')
		},
	},
})
