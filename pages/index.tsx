import type { NextPage } from "next";
import styles from "/styles/Home.module.scss";
import Head from "next/head";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";

const Home: NextPage = ({ navRef }: any) => {
    return (
        <>
            <Head>
                <title>Teqners</title>
                <meta
                    name="description"
                    content="Teqners Connect. Your trusted tech partner"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Hero navRef={navRef} />
                <About />
                <Services />
                {/* <Projects /> */}
                <Cta />
            </main>
        </>
    );
};

export default Home;
