import memories from '../../assets/projects_images/memories-mern.png';
import searchBar from '../../assets/projects_images/collapsable-search-bar.png';
import drumKit from '../../assets/projects_images/drum-kit.png';
import expandingCards from '../../assets/projects_images/expanding-cards.png';
import microsoft from '../../assets/projects_images/miscrosoft-clone.png';
import monster from '../../assets/projects_images/monster-rolodex.png';
import instaLogin from '../../assets/projects_images/neumorphic-insta-login-clone.png';
import pizzaJoint from '../../assets/projects_images/pizza-hut.png';
import progressSteps from '../../assets/projects_images/progress-steps.png';
import rotationalNavigation from '../../assets/projects_images/rotational-navigation.png';
import tinDog from '../../assets/projects_images/tinDog.png';
import crownClothing from '../../assets/projects_images/crown-clothing.png';

const data_projects = [
	{
		name: 'Crown Clothing ECommerce Site',
		image: crownClothing,
		deployed_url: 'https://crown-style-clothing.netlify.app/',
		github_url: 'https://github.com/zeapherine/crown-clothing',
		category: ['react.js', 'redux', 'firebase'],
		discription:
			'A full Stack Ecommerce React app, with all the functionalities like checkout, payment, carts and many more. This app is build using React and firebase',
	},
	{
		name: 'MEMORIES',
		image: memories,
		deployed_url: 'https://world-memories-social.netlify.app/',
		github_url: 'https://github.com/zeapherine/MERN-memoris-social-app',
		category: ['react.js', 'node.js', 'mongoDB'],
		discription:
			'This is a full-stack MERN application using Redux as state management. Users can share their travel memories by uploading pictures. Some of the features include, Likes, comments, delete, edit on posts, search by titles or tags, pagginations.',
	},
	{
		name: 'Rotational Navigation',
		image: rotationalNavigation,
		deployed_url: 'https://zeapherine.github.io/rotating-navigation/',
		github_url: 'https://github.com/zeapherine/rotating-navigation',
		category: ['vanilla'],
		discription:
			'App where Navigation rotate from the side and rotate the whole website',
	},
	{
		name: 'Tin Dog',
		image: tinDog,
		deployed_url: 'https://zeapherine.github.io/tindog-landing-site/',
		github_url: 'https://github.com/zeapherine/tindog-landing-site',
		category: ['vanilla'],
		discription: 'Tinder UI clone for Dogs',
	},

	{
		name: 'Collapsable Search bar',
		image: searchBar,
		deployed_url: 'https://zeapherine.github.io/hidden-search-widget/',
		github_url: 'https://github.com/zeapherine/hidden-search-widget',
		category: ['vanilla'],
		discription: 'A collabsable search widget',
	},

	{
		name: 'Drum Kit',
		image: drumKit,
		deployed_url: 'https://zeapherine.github.io/drumkit/',
		github_url: 'https://github.com/zeapherine/drumkit',
		category: ['vanilla'],
		discription:
			'A simple Drum Kit for playing various sounds with clicks and keyboard keys',
	},

	{
		name: 'Expanding Cards',
		image: expandingCards,
		deployed_url: 'https://zeapherine.github.io/expanding-cards/',
		github_url: 'https://github.com/zeapherine/expanding-cards',
		category: ['vanilla'],
		discription: 'An expandable cards on click using css and vanilla JS',
	},

	{
		name: 'Microsoft Landing Clone',
		image: microsoft,
		deployed_url: 'https://zeapherine.github.io/microsoft-landing-clone/',
		github_url: 'https://github.com/zeapherine/microsoft-landing-clone',
		category: ['html_css', 'vanilla'],
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
		category: ['vanilla'],
		discription: 'Neumorphic clone of intagram login UI using CSS',
	},

	{
		name: 'Pizza Joint',
		image: pizzaJoint,
		deployed_url: 'https://zeapherine.github.io/framer-motion/',
		github_url: 'https://github.com/zeapherine/framer-motion',
		category: ['react.js'],
		discription: 'A simple react app animation, using framer motion library',
	},

	{
		name: 'Progress Steps',
		image: progressSteps,
		deployed_url: 'https://zeapherine.github.io/progress-step/',
		github_url: 'https://github.com/zeapherine/progress-step',
		category: ['vanilla'],
		discription:
			'Step by step progress to be used in other projects, using vanillaJS',
	},
];

export default data_projects;
