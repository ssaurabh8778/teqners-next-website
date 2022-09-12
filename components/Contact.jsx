import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};
const Contact = () => {
    const [formData, setFormData] = useState(initialFormData);
    const checkFormData = () => {
        for (let i in formData) {
            if (!formData[i]) {
                console.log(formData);
                console.log("checked", formData[i]);
                return false;
            }
            return true;
        }
    };
    const sendEmail = (e) => {
        e.preventDefault();
        if (!checkFormData()) {
            alert("Please enter required details.");
            return;
        }
        const sentData = formData;
        const data = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sentData), // body data type must match "Content-Type" header
        };
        fetch(
            "https://us-central1-teqners.cloudfunctions.net/api/teqners/sendemail",
            data
        )
            .then((res) => console.log(data))
            .then((data) => {
                console.log("received data", data);
                alert("Details submitted. We'll reach out to you soon");
                setFormData(initialFormData);
            })
            .catch((err) => {
                alert("Error submitting details. Please try again later.");
                console.log("this error", err);
            });
    };
    return (
        <div id="contact" className="w-full lg:h-screen py-12">
            <div className="max-w-[1200px] px-2 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="mt-2">Get In Touch</h2>
                <div className="flex flex-wrap gap-8 justify-center mt-8 w-full ">
                    <div className="">
                        <img
                            className="mb-4 max-w-[500px] opacity-80"
                            src="/assets/contact.jpg"
                        />

                        <div>
                            <h3 className="py-2 text-xl">Contact Us</h3>
                            <p>
                                Thank you for your interest in our digital
                                solutions.
                                <br />
                                Please fill out this form and one of our experts
                                will get back to you promptly.
                            </p>
                        </div>
                        <div>
                            <p className="uppercase pt-8">Connect With Me</p>
                            <div className="flex items-center justify-between max-w-[300px] m-auto py-4 ml-0">
                                <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-out duration-200">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-out duration-200">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-out duration-200">
                                    <AiOutlineMail />
                                </div>{" "}
                                <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-out duration-200">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[500px] flex-1 ml-auto">
                        <form>
                            <div className="flex flex-col focus-within:border-gray-500 bg-white rounded-md border-2 border-gray-300 mb-4">
                                <label className="uppercase text-xs pt-2 px-3">
                                    Name
                                </label>
                                <input
                                    className="rounded-lg p-3 pt-1 flex focus:outline-none"
                                    type="text"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex flex-col focus-within:border-gray-500 bg-white rounded-md border-2 border-gray-300 mb-4">
                                <label className="uppercase text-xs pt-2 px-3">
                                    Email
                                </label>
                                <input
                                    className="rounded-lg p-3 pt-1 flex focus:outline-none"
                                    type="email"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col focus-within:border-gray-500 bg-white rounded-md border-2 border-gray-300 mb-4">
                                <label className="uppercase text-xs pt-2 px-3">
                                    Subject
                                </label>
                                <input
                                    className="rounded-lg p-3 pt-1 flex focus:outline-none"
                                    type="text"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            subject: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col focus-within:border-gray-500 bg-white rounded-md border-2 border-gray-300 mb-4">
                                <label className="uppercase text-xs pt-2 px-3">
                                    Message
                                </label>
                                <textarea
                                    className="rounded-lg p-3 focus:outline-none"
                                    rows="10"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button
                                className="w-full p-4 text-gray-100 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] transition-transform duration-150 hover:scale-[101%]"
                                onClick={sendEmail}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center pt-36 pb-8">
                    <Link href="/">
                        <div className="rounded-full shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp
                                className="text-[#5651e5]"
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
