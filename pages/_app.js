import "../css/index.css";
import { QueryClientProvider, QueryCache, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { createContext, useState } from 'react'
const queryClient = new QueryClient();

export const TrackContext = createContext({})

function MyApp({ Component, pageProps }) {
  const [track, setTrack] = useState({})

  return (
    <TrackContext.Provider value={{ value: track, setTrack }}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </TrackContext.Provider>
  );
}

export default MyApp;
