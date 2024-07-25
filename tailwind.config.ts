import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '800px',
        lg: '1200px',
        xl: '1400px',
      }
    },
    fontSize: {
      xs: '12px',
      s: '16px',
      m: '18px',
      l: '24px',
      xl: '36px',
      '2xl': '64px'
    },
    boxShadow: {
      'default-xs': '1px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      'default-s': '2px 4px 8px 0px rgba(0, 0, 0, 0.1)',
      'default-m': '4px 8px 16px 0px rgba(0, 0, 0, 0.1)',
      'default-l': '8px 16px 32px 0px rgba(0, 0, 0, 0.1)',
      'default-xl': '16px 32px 64px 0px rgba(0, 0, 0, 0.1)',

      'primary-xs': '1px 2px 4px 0px rgba(255, 102, 51, 0.2)',
      'primary-s': '2px 4px 8px 0px rgba(255, 102, 51, 0.2)',
      'primary-m': '4px 8px 16px 0px rgba(255, 102, 51, 0.2)',
      'primary-l': '8px 16px 32px 0px rgba(255, 102, 51, 0.2)',
      'primary-xl': '16px 32px 64px 0px rgba(255, 102, 51, 0.2)',

      'secondary-xs': '1px 2px 4px 0px rgba(112, 192, 91, 0.2)',
      'secondary-s': '2px 4px 8px 0px rgba(112, 192, 91, 0.2)',
      'secondary-m': '4px 8px 16px 0px rgba(112, 192, 91, 0.2)',
      'secondary-l': '8px 16px 32px 0px rgba(112, 192, 91, 0.2)',
      'secondary-xl': '16px 32px 64px 0px rgba(112, 192, 91, 0.2)',
    },
    colors: {
      //main colors
      'background-page': '#FBF8EC',
      background: '#F4F4F2',
      surface: '#FFFFFF',
      primary: '#FF6633',
      secondary: '#70C05B',
      'on-background': '#291E0F',
      'on-surface': '#414141',
      'on-primary': '#FFFFFF',
      'on-secondary': '#FFFFFF',
      //grayscale
      'light-test': '#F3F2F1',
      light: '#BFBFBF',
      hard: '#8F8F8F',
      hardest: '#606060',
      //palette
      success: '#008C49',
      info: '#1CB9FC',
      warning: '#FCA21C',
      error: '#D80000'
    }
  }
}
export default config
