const FormRoutes = {
	path: '/',
	redirect: '/form',
	component: () => import('@/layouts/blank/BlankLayout.vue'),
	children: [
		{
			name: 'Index',
			path: '/form',
			component: () => import('@/views/pages/form/index.vue'),
			children: [],
		},
		{
			name: 'Formulário Mapa da Vida',
			path: '/form/steps',
			redirect: '/form/steps/01',
			component: () => import('@/views/pages/form/steps/index.vue'),
			children: [
				{
					name: 'Step 1',
					path: '01',
					component: () => import('@/views/pages/form/steps/01.vue'),
				},
				{
					name: 'Step 2',
					path: '02',
					component: () => import('@/views/pages/form/steps/02.vue'),
				},
				{
					name: 'Step 3',
					path: '03',
					component: () => import('@/views/pages/form/steps/03.vue'),
				},
				{
					name: 'Step 4',
					path: '04',
					component: () => import('@/views/pages/form/steps/04.vue'),
				},
				{
					name: 'Step 5',
					path: '05',
					component: () => import('@/views/pages/form/steps/05.vue'),
				},
			],
		},
		{
			name: 'Review',
			path: '/form/review',
			component: () => import('@/views/pages/form/review.vue'),
		},
		{
			name: 'Confirmation',
			path: '/form/confirmation',
			component: () => import('@/views/pages/form/confirmation.vue'),
		},
		{
			name: 'Result',
			path: '/form/result',
			component: () => import('@/views/pages/form/result.vue'),
		},

		// {
		// 	path: '',
		// 	redirect: '/step-01',
		// },
		// {
		// 	name: 'Mapa da Vida | Fase 01 - Vida Pessoal',
		// 	path: '/step-01',
		// 	redirect: '/step-01/01',
		// 	component: () => import('@/views/pages/form/step-01/index.vue'),
		// 	children: [
		// 		{
		// 			name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 01',
		// 			path: '/step-01/01',
		// 			component: () => import('@/views/pages/form/step-01/01.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 02',
		// 			path: '/step-01/02',
		// 			component: () => import('@/views/pages/form/step-01/02.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 03',
		// 			path: '/step-01/03',
		// 			component: () => import('@/views/pages/form/step-01/03.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 04',
		// 			path: '/step-01/04',
		// 			component: () => import('@/views/pages/form/step-01/04.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 01 - Vida Pessoal - Step 05',
		// 			path: '/step-01/05',
		// 			component: () => import('@/views/pages/form/step-01/05.vue'),
		// 		},
		// 	],
		// },
		// {
		// 	name: 'Mapa da Vida | Fase 02 - Mental',
		// 	path: '/step-02',
		// 	redirect: '/step-02/01',
		// 	component: () => import('@/views/pages/form/step-02/index.vue'),
		// 	children: [
		// 		{
		// 			name: 'Mapa da Vida | Fase 02 - Mental - Step 01',
		// 			path: '/step-02/01',
		// 			component: () => import('@/views/pages/form/step-02/01.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 02 - Mental - Step 02',
		// 			path: '/step-02/02',
		// 			component: () => import('@/views/pages/form/step-02/02.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 02 - Mental - Step 03',
		// 			path: '/step-02/03',
		// 			component: () => import('@/views/pages/form/step-02/03.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 02 - Mental - Step 04',
		// 			path: '/step-02/04',
		// 			component: () => import('@/views/pages/form/step-02/04.vue'),
		// 		},
		// 		{
		// 			name: 'Mapa da Vida | Fase 02 - Mental - Step 05',
		// 			path: '/step-02/05',
		// 			component: () => import('@/views/pages/form/step-02/05.vue'),
		// 		},
		// 	],
		// },
	],
}

export default FormRoutes
