import { useEffect, useRef } from "react";
import styles from "/styles/Hero.module.scss";

type props = {
    navRef: React.RefObject<HTMLInputElement>;
};
const Hero: React.FC<props> = ({ navRef: navRef }: props) => {
    const heroRef: React.RefObject<HTMLInputElement> = useRef(null);
    const resizeSection = (
        controllerRef: React.RefObject<HTMLInputElement>,
        sectionRef: React.RefObject<HTMLInputElement>
    ): void => {
        if (controllerRef?.current && sectionRef?.current) {
            // document.getElementsByTagName(
            //     "html"
            // )[0].style.scrollPaddingTop = `${controllerRef.current.clientHeight}px`;
            document
                .getElementsByTagName("html")[0]
                .style.setProperty(
                    "--navbar-height",
                    `${controllerRef.current.clientHeight}px`
                );
            // sectionRef.current.style.marginTop = `${controllerRef.current.clientHeight}px`;
            // sectionRef.current.style.minHeight = `calc(100vh - ${controllerRef.current.clientHeight}px)`;
        }
    };
    useEffect(() => {
        resizeSection(navRef, heroRef);
        window.addEventListener("resize", () => resizeSection(navRef, heroRef));
        return () =>
            window.removeEventListener("resize", () =>
                resizeSection(navRef, heroRef)
            );
    }, [navRef, heroRef]);

    return (
        <div className={styles.hero} ref={heroRef}>
            <div className={styles.container}>
                <h1 className={"srOnly"} title="Teqners">
                    Teqners
                </h1>

                <picture className={styles.titleImg}>
                    <source
                        media="(min-width:740px)"
                        srcSet={"../hero-title.png"}
                    />
                    <img src={"/logo--text-2x4.svg"} alt="Teqners" />
                </picture>

                <div className={styles.textGroup}>
                    <h5 className={styles.slogan}>Your trusted tech partner</h5>
                    <p className={styles.para}>
                        We strive to turn your aspirations into reality. The
                        world is transformed by ideas and beliefs. If you
                        believe that your idea can transform the world, we are
                        here to turn it into reality.
                    </p>
                </div>
                <div className={styles.btnGroup}>
                    <button type="button" className={styles.cta}>
                        Request a Quote
                    </button>
                    <a href="#about" className={styles.secondaryBtn}>
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
