import { Project } from '../types';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import {
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiSupabase,
	SiAstro,
	SiChakraui,
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Extendemos la interfaz Project para incluir el tipo IconType
interface ProjectTechnology {
	icon: IconType;
	name: string;
}

interface ProjectWithIcons extends Omit<Project, 'technologies'> {
	technologies: ProjectTechnology[];
}

export const projects: ProjectWithIcons[] = [
	{
		id: 1,
		title: 'Lugares Turísticos V2',
		description:
			'Aplicación web que muestra las mejores atracciones turísticas en los diferentes departamentos de la provincia de Catamarca.',
		image: '/projects/Lugares-turisticos.png',
		technologies: [
			{ icon: FaReact, name: 'React' },
			{ icon: SiVite, name: 'Vite' },
			{ icon: SiChakraui, name: 'ChakraUI' },
			{ icon: FaJs, name: 'JavaScript' },
		],
		githubUrl: 'https://github.com/MauricioGT2024/lugares-turisticos',
		liveUrl: 'https://lugares-turisticos-v2.vercel.app',
	},
	{
		id: 2,
		title: 'Spotify Fake',
		description:
			'Clon de la interfaz de Spotify que replica la experiencia visual de la popular plataforma de streaming de música.',
		image: '/projects/Spotify.jpg',
		technologies: [
			{ icon: SiAstro, name: 'Astro' },
			{ icon: SiTailwindcss, name: 'Tailwind CSS' },
			{ icon: SiTypescript, name: 'TypeScript' },
			{ icon: FaCss3Alt, name: 'CSS3' },
		],
		githubUrl: 'https://github.com/MauricioGT2024/spotify-fake',
		liveUrl: 'https://spotify-fake-demo.vercel.app',
	},
	{
		id: 3,
		title: 'Login Page',
		description:
			'Página de inicio de sesión moderna con validación de formularios y animaciones suaves.',
		image: '/projects/Login-Page.jpg',
		technologies: [
			{ icon: FaHtml5, name: 'HTML5' },
			{ icon: FaCss3Alt, name: 'CSS3' },
			{ icon: FaJs, name: 'JavaScript' },
		],
		githubUrl: 'https://github.com/MauricioGT2024/Login-Page',
		liveUrl: 'https://login-page-demo.vercel.app',
	},
	{
		id: 4,
		title: 'Reloj Digital',
		description:
			'Aplicación de reloj digital con diseño minimalista que muestra la hora actual.',
		image: '/projects/Reloj.jpg',
		technologies: [
			{ icon: FaHtml5, name: 'HTML' },
			{ icon: FaCss3Alt, name: 'CSS' },
			{ icon: FaJs, name: 'JavaScript' },
		],
		githubUrl: 'https://github.com/MauricioGT2024/Reloj',
		liveUrl: 'https://reloj-digital-demo.vercel.app',
	},
	{
		id: 5,
		title: 'Temporizador',
		description:
			'Aplicación de temporizador con funcionalidades de cuenta regresiva, pausar y reanudar.',
		image: '/projects/Temporizador.jpg',
		technologies: [
			{ icon: FaHtml5, name: 'HTML' },
			{ icon: FaCss3Alt, name: 'CSS' },
			{ icon: FaJs, name: 'JavaScript' },
		],
		githubUrl: 'https://github.com/MauricioGT2024/Temporizador',
		liveUrl: 'https://temporizador-demo.vercel.app',
	},
	{
		id: 6,
		title: 'React Supabase Auth CRUD',
		description:
			'Aplicación full-stack que implementa autenticación y operaciones CRUD utilizando React y Supabase.',
		image: '/projects/React-Supabase-Crud.png',
		technologies: [
			{ icon: FaReact, name: 'React' },
			{ icon: SiSupabase, name: 'Supabase' },
			{ icon: FaJs, name: 'JavaScript' },
			{ icon: SiTailwindcss, name: 'Tailwind CSS' },
		],
		githubUrl: 'https://github.com/MauricioGT2024/react-supabase-auth-crud',
	},
];
