import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Industries from "../components/Industries";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

export default function Home() {
    return (
        <>
            <Head>
                <title>Clint | Front-End Developer</title>
                <meta
                    name="description"
                    content="Teqners - Web developers team"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="px-8 max-w-[1200px] ml-auto mr-auto">
                <Main />
                <About />
                <Technologies />
                <Industries />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
