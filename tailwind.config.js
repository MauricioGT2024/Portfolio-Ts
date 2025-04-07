/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F172A',    // Azul oscuro para el fondo
				secondary: '#EF4444',   // Rojo para acentos principales
				tertiary: '#1E293B',   // Azul más claro para elementos secundarios
				accent: {
					blue: '#3B82F6',   // Azul para variación
					purple: '#8B5CF6',  // Púrpura para detalles
					pink: '#EC4899'     // Rosa para hover states
				},
				textPrimary: '#F8FAFC',  // Blanco hueso para texto principal
				textSecondary: '#94A3B8' // Gris claro para texto secundario
			},
			boxShadow: {
				'glow': '0 0 15px rgba(239, 68, 68, 0.3)',
				'glow-blue': '0 0 15px rgba(59, 130, 246, 0.3)',
				'glow-purple': '0 0 15px rgba(139, 92, 246, 0.3)'
			},
		},
	},
	plugins: [],
};
