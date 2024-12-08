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
			name: 'Capture',
			path: '/form/Capture',
			component: () => import('@/views/pages/form/capture.vue'),
		},
		{
			name: 'Result',
			path: '/form/result',
			component: () => import('@/views/pages/form/result.vue'),
		},
	],
}

export default FormRoutes
