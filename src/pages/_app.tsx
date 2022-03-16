import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </SessionProvider>
  );
}

export default MyApp;
