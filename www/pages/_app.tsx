import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import createCache from "@emotion/cache";
import { globalStyles } from "../shared/styles";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=0.5" />
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;