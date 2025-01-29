/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        // Default shadcn config
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        // Neteera specific design
        'neteera-teal-900': 'hsl(var(--neteera-teal-900))',
				'neteera-teal-800': 'hsl(var(--neteera-teal-800))',
				'neteera-teal-700': 'hsl(var(--neteera-teal-700))',
				'neteera-teal-600': 'hsl(var(--neteera-teal-600))',
				'neteera-teal-500': 'hsl(var(--neteera-teal-500))',
				'neteera-teal-400': 'hsl(var(--neteera-teal-400))',
				'neteera-teal-300': 'hsl(var(--neteera-teal-300))',
				'neteera-teal-200': 'hsl(var(--neteera-teal-200))',
				'neteera-teal-100': 'hsl(var(--neteera-teal-100))',
				'blue-600': 'hsl(var(--blue-600))',
				'blue-400': 'hsl(var(--blue-400))',
				'blue-200': 'hsl(var(--blue-200))',
				'yellow-600': 'hsl(var(--yellow-600))',
				'yellow-400': 'hsl(var(--yellow-400))',
				'yellow-200': 'hsl(var(--yellow-200))',
				'red-600': 'hsl(var(--red-600))',
				'red-400': 'hsl(var(--red-400))',
				'red-200': 'hsl(var(--red-200))',
				'green-600': 'hsl(var(--green-600))',
				'green-400': 'hsl(var(--green-400))',
				'green-200': 'hsl(var(--green-200))',
				'grey-600': 'hsl(var(--grey-600))',
				'grey-400': 'hsl(var(--grey-400))',
				'grey-200': 'hsl(var(--grey-200))',
				'highlight-blue': 'hsl(var(--highlight-blue))',
				'highlight-green': 'hsl(var(--highlight-green))',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

