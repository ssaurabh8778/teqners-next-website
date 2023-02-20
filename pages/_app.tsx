import "/styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const navRef = useRef(null);
    const resizeSection = (
        controllerRef: React.RefObject<HTMLInputElement>
    ): void => {
        if (controllerRef?.current) {
            document
                .getElementsByTagName("html")[0]
                .style.setProperty(
                    "--navbar-height",
                    `${controllerRef.current.clientHeight}px`
                );
        }
    };
    useEffect(() => {
        resizeSection(navRef);
        window.addEventListener("resize", () => resizeSection(navRef));
        window.addEventListener("orientationchange", () =>
            resizeSection(navRef)
        );
        return () => {
            window.removeEventListener("resize", () => resizeSection(navRef));
            window.removeEventListener("orientationchange", () =>
                resizeSection(navRef)
            );
        };
    }, [navRef]);
    return (
        <>
            <Navbar navRef={navRef} />
            <Component {...pageProps} navRef={navRef} />
            <Footer />
        </>
    );
}

export default MyApp;
