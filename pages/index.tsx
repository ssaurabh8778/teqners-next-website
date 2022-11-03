import type { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";

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
            <Hero navRef={navRef} />
            <About />
            <Services />
            <Work />
            <Cta />
        </>
    );
};

export default Home;
