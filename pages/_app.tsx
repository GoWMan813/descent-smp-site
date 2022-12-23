import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, Link, NextUIProvider, Spacer } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import SMPNavbar from '../components/navbar';

import footerStyles from '../styles/Home.module.css';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <SMPNavbar />
        <Component {...pageProps} />
        <footer className={footerStyles.footer}>
          Built with ♥ by <Spacer x={0.25} />
          <Link target='_blank' href='https://github.com/GoWMan813'>
            GoWMan
          </Link>
        </footer>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
