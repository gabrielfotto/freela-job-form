const FormRoutes = {
	path: '/',
	component: () => import('@/layouts/blank/FormLayout.vue'),
	children: [
		{
			path: '',
			redirect: '/step-01',
		},
		{
			name: 'Mapa da Vida | Fase 01 - Vida Pessoal',
			path: '/step-01',
			redirect: '/step-01/01',
			component: () => import('@/views/pages/form/step-01/index.vue'),
			children: [
				{
					name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 01',
					path: '/step-01/01',
					component: () => import('@/views/pages/form/step-01/01.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 02',
					path: '/step-01/02',
					component: () => import('@/views/pages/form/step-01/02.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 03',
					path: '/step-01/03',
					component: () => import('@/views/pages/form/step-01/03.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 04',
					path: '/step-01/04',
					component: () => import('@/views/pages/form/step-01/04.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 05',
					path: '/step-01/05',
					component: () => import('@/views/pages/form/step-01/05.vue'),
				},
			],
		},

		{
			name: 'Mapa da Vida | Fase 02 - Mental',
			path: '/step-02',
			redirect: '/step-02/01',
			component: () => import('@/views/pages/form/step-02/index.vue'),
			children: [
				{
					name: 'Mapa da Vida | Fase 02 - Mental - Step 01',
					path: '/step-02/01',
					component: () => import('@/views/pages/form/step-02/01.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 02 - Mental - Step 02',
					path: '/step-02/02',
					component: () => import('@/views/pages/form/step-02/02.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 02 - Mental - Step 03',
					path: '/step-02/03',
					component: () => import('@/views/pages/form/step-02/03.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 02 - Mental - Step 04',
					path: '/step-02/04',
					component: () => import('@/views/pages/form/step-02/04.vue'),
				},
				{
					name: 'Mapa da Vida | Fase 02 - Mental - Step 05',
					path: '/step-02/05',
					component: () => import('@/views/pages/form/step-02/05.vue'),
				},
			],
		},

		// {
		// 	name: 'Mapa da Vida | Fase 02 - Mental',
		// 	path: '/step-02',
		// 	component: () => import('@/views/pages/form/step-02/index.vue'),
		// },
		// {
		// 	name: 'Mapa da Vida | Fase 03 - Infância',
		// 	path: '/step-03',
		// 	component: () => import('@/views/pages/form/step-03/index.vue'),
		// },

		// {
		// 	name: 'Mapa da Vida | Fase 04 - Emocional',
		// 	path: '/step-03',
		// 	component: () => import('@/views/pages/form/step-04/index.vue'),
		// },
	],
}

export default FormRoutes
