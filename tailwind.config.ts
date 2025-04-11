
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Granny's Recipe custom colors
				"spice": {
					50: "#FFF8ED",
					100: "#FFEAD1",
					200: "#FED4A3",
					300: "#FDB865",
					400: "#FA9636",
					500: "#F67D14",
					600: "#D25C08",
					700: "#AC430A",
					800: "#8C3410",
					900: "#742C12",
				},
				"curry": {
					50: "#FCFFE5",
					100: "#F5FFBC",
					200: "#ECF994",
					300: "#DFED5F",
					400: "#D0DD36",
					500: "#B4BD1B",
					600: "#929713",
					700: "#706F14",
					800: "#5A5916",
					900: "#4A4917",
				},
				"mint": {
					50: "#EFFEF7",
					100: "#DAFCEC",
					200: "#B7F8D8",
					300: "#86ECBC",
					400: "#51D99D",
					500: "#2AB77F",
					600: "#1C9365",
					700: "#197554",
					800: "#195F45",
					900: "#174E3A",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-light": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"zoom-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse-light": "pulse-light 2s ease-in-out infinite",
				"slide-up": "slide-up 0.5s ease-out",
				"slide-in-right": "slide-in-right 0.5s ease-out",
				"zoom-in": "zoom-in 0.3s ease-out",
				"spin-slow": "spin-slow 8s linear infinite",
			},
			fontFamily: {
				"spicy": ["'Spicy Rice'", "cursive"],
				"poppins": ["'Poppins'", "sans-serif"],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
