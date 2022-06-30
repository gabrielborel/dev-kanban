import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Providers } from '../contexts/Providers';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  );
}

export default MyApp;
