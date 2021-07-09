import "../css/index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { createContext, useState } from 'react'
import Base from "../components/base";
const queryClient = new QueryClient();

export const TrackContext = createContext({})

function MyApp({ Component, pageProps }) {
  const [track, setTrack] = useState({})

  return (
    <TrackContext.Provider value={{ value: track, setTrack }}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Base>
            <Component {...pageProps} />
          </Base>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </TrackContext.Provider>
  );
}

export default MyApp;
