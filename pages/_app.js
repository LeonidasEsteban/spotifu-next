import "../css/index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { createContext, useState } from 'react'
import Base from "../components/base";
import Router from 'next/router'

const queryClient = new QueryClient({
  defaultOptions : {
    queries: {
      retry: 1,
      onError: (error) => {
        if (error.message === 'invalid token') {
          Router.push('/api/login')
        }
      }
    }
  }
});

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
