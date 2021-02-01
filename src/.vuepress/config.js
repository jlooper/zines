const { description } = require('../../package');

module.exports = {
	title: 'MaZine Learning: Zines for All The Things',
	description: description,

	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	],
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},

	themeConfig: {
		repo: '',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [
			{
				text: 'Zines',
				link: '/zines/introduction',
			},
			{
				text: 'Folding a Zine',
				link: '/folding/',
			},

			{
				text: 'Contact',
				link: '/contact/',
			},
		],
		sidebar: {
			'/zines/': [
				{
					title: 'Zines',
					collapsable: false,
					children: [
						{ link: 'introduction', title: 'Introduction to Machine Learning' },
						{ link: 'supervisedlearning', title: 'Supervised Learning' },
						{ link: 'unsupervisedlearning', title: 'Unsupervised Learning' },
					],
				},
			],
		},
	},

	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
