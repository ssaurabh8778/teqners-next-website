import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "/styles/Navbar.module.scss";
import variables from "/styles/variables.module.scss";

type props = {
    navRef: React.RefObject<HTMLInputElement>;
};
const Menu = () => (
    <>
        <li>
            <a href={"/#about"}>About</a>
        </li>
        <li>
            <a href={"/#services"}>Services</a>
        </li>
        <li>
            <a href={"/#projects"}>Projects</a>
        </li>
        <li>
            <Link href={"/contact"}>
                <a className={variables.secondaryBtnSmallClass}>
                    Request a quote
                </a>
            </Link>
        </li>
    </>
);
const Navbar: React.FC<props> = ({ navRef }: props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuVersion, setMenuVersion] = useState("mobile");
    const switchMenu = useCallback(() => {
        if (navRef?.current) {
            if (navRef?.current?.clientWidth >= 900) {
                setMenuVersion("desktop");
                // console.log("Switched to desktop menu");
            } else {
                setMenuVersion("mobile");
                // console.log("Switched to mobile menu");
            }
        }
    }, [navRef]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            switchMenu();
        });
        return () =>
            window.removeEventListener("resize", () => {
                switchMenu();
            });
    }, [navRef, switchMenu]);
    return (
        <nav className={styles.navbar} ref={navRef}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <picture className={styles.logo}>
                            <img src={"/logo-icon--white.svg"} alt="Teqners" />
                        </picture>
                    </a>
                </Link>

                {menuVersion == "mobile" ? (
                    <>
                        {/* Menu Icon and Close Icon based on condition*/}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.menuIcon}
                            onClick={() =>
                                setIsMenuOpen((currentStatus) => !currentStatus)
                            }
                        >
                            {isMenuOpen ? (
                                // Close Icon
                                <path
                                    d="M13.4854 12.0711L19.1421 17.7279L17.7279 19.1421L12.0712 13.4854L6.41436 19.1421L5.00015 17.7279L10.6569 12.0711L5 6.41421L6.41421 5L12.0712 10.6569L17.7281 5.00001L19.1423 6.41423L13.4854 12.0711Z"
                                    fill="#F9F9F9"
                                />
                            ) : (
                                // Menu Icon
                                <path
                                    d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
                                    fill="#F9F9F9"
                                />
                            )}
                        </svg>
                        <ul
                            className={styles.menuMobile}
                            style={
                                isMenuOpen
                                    ? {
                                          opacity: 1,
                                          transform: "translate(-50%, 0%)",
                                          backdropFilter: "blur(16px)",
                                      }
                                    : {
                                          opacity: 0,
                                          transform: "translate(-50%, -125%)",
                                          backdropFilter: "blur(0px)",
                                      }
                            }
                        >
                            <Menu />
                        </ul>
                    </>
                ) : (
                    <ul className={styles.menuDesktop}>
                        <Menu />
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
