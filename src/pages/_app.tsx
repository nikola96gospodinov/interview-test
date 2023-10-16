import Container from "@/components/container/container.component";
import { Header } from "@/components/header";
import { isLocalEnv } from "@/constants";
import queryClient from "@/lib/react-query";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Roboto, Signika } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] });
const signika = Signika({ weight: ["300", "500"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const title = isLocalEnv ? "LOCAL" : "FINISHED";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <style jsx global>{`
          html {
            font-family: ${signika.style.fontFamily};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <main>
          <Header />
          <Container>
            <Component {...pageProps} />
          </Container>
        </main>
      </QueryClientProvider>
    </>
  );
}
