import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import navbarlogoImg from "../public/assets/navLogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath === "/property" ||
            router.asPath === "/crypto" ||
            router.asPath === "/netflix" ||
            router.asPath === "/twitch"
        ) {
            setNavBg("transparent");
            setLinkColor("#ecf0f3");
        } else {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
        }
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    });
    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                "fixed w-full h-20 z-[100] flex justify-center items-center" +
                (shadow ? " shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)]" : "")
            }
        >
            <div className="w-full max-w-[1200px] ml-auto mr-auto px-4">
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image
                                src={navbarlogoImg}
                                alt="/"
                                width="60"
                                height="50"
                            />
                            <h2 className="ml-1 text-[#332c54]">TEQNERS</h2>
                        </div>
                    </Link>
                    <div>
                        <ul
                            style={{ color: `${linkColor}` }}
                            className="hidden md:flex"
                        >
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:shadow-[0_2px_0_0px_rgba(0,0,0,0.25)]">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li className="ml-10 text-sm uppercase hover:shadow-[0_2px_0_0px_rgba(0,0,0,0.25)]">
                                    About
                                </li>
                            </Link>
                            <Link href="/#technologies">
                                <li className="ml-10 text-sm uppercase hover:shadow-[0_2px_0_0px_rgba(0,0,0,0.25)]">
                                    Technologies
                                </li>
                            </Link>
                            <Link href="/#industries">
                                <li className="ml-10 text-sm uppercase hover:shadow-[0_2px_0_0px_rgba(0,0,0,0.25)]">
                                    Industries
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li className="ml-10 text-sm uppercase hover:shadow-[0_2px_0_0px_rgba(0,0,0,0.25)]">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li className="ml-10 text-sm uppercase hover:shadow-[0_2px_0_0px_rgba(0,0,0,0.25)]">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-full h-screen bg-black/70"
                            : ""
                    }
                >
                    <div
                        className={
                            nav
                                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-2 ease-in duration-500"
                                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                        }
                    >
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Link href="/">
                                    <Image
                                        src="/../public/assets/navLogo.png"
                                        width="95"
                                        height="35"
                                        alt="/"
                                    />
                                </Link>
                                <div
                                    onClick={handleNav}
                                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-300 my-4">
                                <p className="w-[85%] md:w-[90%] py-4">
                                    Let's build something legendary together
                                </p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link href="/#about">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        About
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Technologies
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Industries
                                    </li>
                                </Link>
                                <Link href="/#contact">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-28">
                                <p className="uppercase tracking-widest text-[#5651e5]">
                                    Let's connect
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
