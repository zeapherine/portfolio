import memories from '../../assets/projects_images/memories-mern.webp';
import searchBar from '../../assets/projects_images/collapsable-search-bar.webp';
import drumKit from '../../assets/projects_images/drum-kit.webp';
import expandingCards from '../../assets/projects_images/expanding-cards.webp';
import microsoft from '../../assets/projects_images/miscrosoft-clone.webp';
import monster from '../../assets/projects_images/monster-rolodex.webp';
import instaLogin from '../../assets/projects_images/neumorphic-insta-login-clone.webp';
import pizzaJoint from '../../assets/projects_images/pizza-hut.webp';
import progressSteps from '../../assets/projects_images/progress-steps.webp';
import rotationalNavigation from '../../assets/projects_images/rotational-navigation.webp';
import tinDog from '../../assets/projects_images/tinDog.webp';
import crownClothing from '../../assets/projects_images/crown-clothing.webp';
import splitLanding from '../../assets/projects_images/split-landing-page.webp';
import scrollAnimation from '../../assets/projects_images/scroll-animation.webp';
import formWave from '../../assets/projects_images/form-wave-animation.webp';
import blurryLoading from '../../assets/projects_images/blurry-loading.webp';

const data_projects = [
	{
		name: 'Clothing ECommerce Site',
		image: crownClothing,
		deployed_url: 'https://crown-style-clothing.netlify.app/',
		github_url: 'https://github.com/zeapherine/crown-clothing',
		category: ['react.js', 'redux', 'firebase', 'stripe'],
		discription:
			'A full Stack Ecommerce React app, with all the functionalities like checkout, payment, carts and many more. This app is build using React and firebase',
	},
	{
		name: 'MEMORIES',
		image: memories,
		deployed_url: 'https://world-memories-social.netlify.app/',
		github_url: 'https://github.com/zeapherine/MERN-memoris-social-app',
		category: ['react.js', 'node.js', 'mongoDB', 'mern'],
		discription:
			'This is a full-stack MERN application using Redux as state management. Users can share their travel memories by uploading pictures. Some of the features include, Likes, comments, delete, edit on posts, search by titles or tags, pagginations.',
	},
	{
		name: 'Rotational Navigation',
		image: rotationalNavigation,
		deployed_url: 'https://zeapherine.github.io/rotating-navigation/',
		github_url: 'https://github.com/zeapherine/rotating-navigation',
		category: ['vanilla', 'html', 'css'],
		discription:
			'App where Navigation rotate from the side and rotate` the whole website',
	},
	{
		name: 'Tin Dog',
		image: tinDog,
		deployed_url: 'https://zeapherine.github.io/tindog-landing-site/',
		github_url: 'https://github.com/zeapherine/tindog-landing-site',
		category: ['vanilla', 'css', 'html'],
		discription: 'Tinder UI clone for Dogs',
	},

	{
		name: 'Collapsable Search bar',
		image: searchBar,
		deployed_url: 'https://zeapherine.github.io/hidden-search-widget/',
		github_url: 'https://github.com/zeapherine/hidden-search-widget',
		category: ['vanilla', 'css', 'html'],
		discription: 'A collabsable search widget',
	},

	{
		name: 'Drum Kit',
		image: drumKit,
		deployed_url: 'https://zeapherine.github.io/drumkit/',
		github_url: 'https://github.com/zeapherine/drumkit',
		category: ['vanilla', 'css', 'html'],
		discription:
			'A simple Drum Kit for playing various sounds with clicks and keyboard keys',
	},

	{
		name: 'Expanding Cards',
		image: expandingCards,
		deployed_url: 'https://zeapherine.github.io/expanding-cards/',
		github_url: 'https://github.com/zeapherine/expanding-cards',
		category: ['vanilla', 'css', 'html'],
		discription: 'An expandable cards on click using css and vanilla JS',
	},

	{
		name: 'Microsoft Landing Clone',
		image: microsoft,
		deployed_url: 'https://zeapherine.github.io/microsoft-landing-clone/',
		github_url: 'https://github.com/zeapherine/microsoft-landing-clone',
		category: ['html', 'css', 'vanilla'],
		discription: 'Microsoft landing page clone using HTML and CSS',
	},

	{
		name: 'Monster Roledex',
		image: monster,
		deployed_url: 'https://zeapherine.github.io/monsters-rolodex/',
		github_url: 'https://github.com/zeapherine/monsters-rolodex',
		category: ['react.js'],
		discription: 'Simple React App to search for monsters from an remote api',
	},

	{
		name: 'Neumorphic Insta Login',
		image: instaLogin,
		deployed_url:
			'https://zeapherine.github.io/instagram-login-ui-clone-Neumorphic/',
		github_url:
			'https://github.com/zeapherine/instagram-login-ui-clone-Neumorphic',
		category: ['vanilla', 'css', 'html'],
		discription: 'Neumorphic clone of intagram login UI using CSS',
	},

	{
		name: 'Pizza Joint',
		image: pizzaJoint,
		deployed_url: 'https://zeapherine.github.io/framer-motion/',
		github_url: 'https://github.com/zeapherine/framer-motion',
		category: ['react.js', 'framer-motion', 'animation'],
		discription: 'A simple react app animation, using framer motion library',
	},

	{
		name: 'Progress Steps',
		image: progressSteps,
		deployed_url: 'https://zeapherine.github.io/progress-step/',
		github_url: 'https://github.com/zeapherine/progress-step',
		category: ['vanilla', 'css', 'html'],
		discription:
			'Step by step progress to be used in other projects, using vanillaJS',
	},

	{
		name: 'Form Wave Animation',
		image: formWave,
		deployed_url: 'https://zeapherine.github.io/form-wave-animation/',
		github_url: 'https://github.com/zeapherine/form-wave-animation',
		category: ['vanilla', 'css', 'html'],
		discription:
			'Main Take away: Use javascript to target the labels with querySelectorAll split the innerText and map each letter on it and wrap each letter with span, assign it to label.innerHTML by joining it again, add css transitions on each span to move up with a delay on each one.',
	},
	{
		name: 'Split Landing',
		image: splitLanding,
		deployed_url: 'https://zeapherine.github.io/split-landing-page/',
		github_url: 'https://github.com/zeapherine/split-landing-page',
		category: ['vanilla', 'css', 'html'],
		discription:
			'Landing page increase and decrease with mouse hover. Main take away is changing the div width with transition based on mouse hover',
	},
	{
		name: 'Blurry Loading',
		image: blurryLoading,
		deployed_url: 'https://zeapherine.github.io/blurry-loading/',
		github_url: 'https://github.com/zeapherine/blurry-loading',
		category: ['vanilla', 'css', 'html'],
		discription:
			'Blurry loading implemented using javascript and css. Main take away from this project is how to map two a range of number with another range of number',
	},
	{
		name: 'Scroll Animation',
		image: scrollAnimation,
		deployed_url: 'https://zeapherine.github.io/scroll-animation/',
		github_url: 'https://github.com/zeapherine/scroll-animation',
		category: ['vanilla', 'css', 'html'],
		discription: 'Scroll animation using by window innerHeight property',
	},
];

export default data_projects;
