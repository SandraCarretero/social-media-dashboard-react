import { v4 } from 'uuid';

export const BIG_CARD_DATA = [
	{
		id: v4(),
		icon: '/images/icon-facebook.svg',
		iconName: 'facebook icon',
		username: '@nathanf',
		number: 1987,
		category: 'Followers',
		arrowIcon: '/images/icon-up.svg',
		changesToday: '12 Today',
		borderColor: '#178FF5'
	},
	{
		id: v4(),
		icon: '/images/icon-twitter.svg',
		iconName: 'twitter icon',
		username: '@nathanf',
		number: 1044,
		category: 'Followers',
		arrowIcon: '/images/icon-up.svg',
		changesToday: '99 Today',
		borderColor: '#1DA1F2'
	},
	{
		id: v4(),
		icon: '/images/icon-instagram.svg',
		iconName: 'instagram icon',
		username: '@realnathanf',
		number: '11k',
		category: 'Followers',
		arrowIcon: '/images/icon-up.svg',
		changesToday: '1099 Today',
		borderColor: 'linear-gradient(to right,#DF4896,#EE877E, #FDC366)'
	},
	{
		id: v4(),
		icon: '/public/images/icon-youtube.svg',
		iconName: 'youtube icon',
		username: 'Nathan F.',
		number: 8239,
		category: 'Subscribers',
		arrowIcon: '/public/images/icon-down.svg',
		changesToday: '144 Today',
		borderColor: '#C4032B'
	}
];
