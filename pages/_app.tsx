import "/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const navRef = useRef(null);
    return (
        <>
            <Navbar navRef={navRef} />
            <Component {...pageProps} navRef={navRef} />
            <Footer />
        </>
    );
}

export default MyApp;
