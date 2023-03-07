import type { NextPage } from "next";
import styles from "/styles/Home.module.scss";
import Head from "next/head";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
// import Portfolio from "../components/Portfolio";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Teqners</title>
                <meta
                    name="description"
                    content="Teqners Connect. Your trusted tech partner"
                />
            </Head>
            <main className={styles.main}>
                <Hero />
                <About />
                <Services />
                {/* <Portfolio /> */}
                <Cta />
            </main>
        </>
    );
};

export default Home;
