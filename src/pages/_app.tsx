import { UsersProvider } from "@/context";
import { NavBar } from "@/ui/section";

import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UsersProvider>
      <main className={`${montserrat.className}`}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </UsersProvider>
  );
}
