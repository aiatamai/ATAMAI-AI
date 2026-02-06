import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: 'var(--color-gray-50, #f8f8fc)',
					100: 'var(--color-gray-100, #ebebf0)',
					200: 'var(--color-gray-200, #dddde5)',
					300: 'var(--color-gray-300, #c4c4d0)',
					400: 'var(--color-gray-400, #9898aa)',
					500: 'var(--color-gray-500, #7a7a8e)',
					600: 'var(--color-gray-600, #606078)',
					700: 'var(--color-gray-700, #3a3a4e)',
					800: 'var(--color-gray-800, #1e1e2e)',
					850: 'var(--color-gray-850, #16161f)',
					900: 'var(--color-gray-900, #111118)',
					950: 'var(--color-gray-950, #0a0a0f)'
				},
				accent: {
					50: 'var(--color-accent-50, #f5f3ff)',
					100: 'var(--color-accent-100, #ede9fe)',
					200: 'var(--color-accent-200, #ddd6fe)',
					300: 'var(--color-accent-300, #c4b5fd)',
					400: 'var(--color-accent-400, #a78bfa)',
					500: 'var(--color-accent-500, #8b5cf6)',
					600: 'var(--color-accent-600, #7c3aed)',
					700: 'var(--color-accent-700, #6d28d9)',
					800: 'var(--color-accent-800, #5b21b6)',
					900: 'var(--color-accent-900, #4c1d95)',
					950: 'var(--color-accent-950, #2e1065)'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			},
			transitionProperty: {
				width: 'width'
			},
			backdropBlur: {
				xs: '2px'
			},
			boxShadow: {
				glow: '0 0 20px rgba(124, 58, 237, 0.15)',
				'glow-lg': '0 0 40px rgba(124, 58, 237, 0.2)',
				'glow-accent': '0 0 30px rgba(124, 58, 237, 0.3)'
			},
			animation: {
				'fade-in': 'fadeIn 0.3s ease-out',
				'slide-up': 'slideUp 0.3s ease-out',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)' },
					'50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.3)' }
				}
			}
		}
	},
	plugins: [typography, containerQueries]
};
