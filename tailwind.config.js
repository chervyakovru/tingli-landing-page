module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      colors: {
        global: {
          background1: 'var(--global-bg-1)',
          background2: 'var(--global-bg-2)',
          background3: 'var(--global-bg-3)',
          background4: 'var(--global-bg-4)',
          background5: 'var(--global-bg-5)',
          text1: 'var(--global-text-1)',
          text2: 'var(--global-text-2)',
          text3: 'var(--global-text-3)',
          text4: 'var(--global-text-4)',
          text5: 'var(--global-text-5)',
        },
        button: {
          1: 'var(--button-bg-1)',
          2: 'var(--button-bg-2)',
          text1: 'var(--button-text-1)',
        },
        gradient: {
          primary: 'var(--gradient-primary)',
          'primary-117': 'var(--gradient-primary-117)',
        },
        border: {
          light: 'var(--border-light)',
          medium: 'var(--border-medium)',
          accent: 'var(--border-accent)',
        },
        shadow: {
          gray: 'var(--shadow-gray)',
        },
        specific: {
          white: 'var(--white)',
          black: 'var(--black)',
          'accent-purple': 'var(--accent-purple)',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      lineHeight: {
        DEFAULT: '160%',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        button: 'var(--button-radius)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
