"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import sowkya_logo from '../../../public/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(0);
    const [activeTab, setActive] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setColor(window.scrollY);
            } else {
                setColor(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const setActiveTab = (tab) => {
        setActive(tab);
    }

    return (
        <>
            <nav className={`fixed w-full z-50 ${color > 90 ? 'navBar_color_on_scroll shadow-md ' : ''}`}>
                <div className="mx-[16px] md:mx-[20px] xl:mx-[60px] my-[10px] flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-red-500">
                        <Image src={sowkya_logo} priority={true} alt='sowkya_projects_logo' className='w-[100px] md:w-[120px]' />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-[#121212]">
                        <ScrollLink to="home" smooth={true} duration={500} className={`${activeTab === "Home" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => setActiveTab('Home')}>Home</ScrollLink>
                        <ScrollLink to="aboutUs" smooth={true} duration={500} className={`${activeTab === "AboutUs" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => setActiveTab('AboutUs')}>About us</ScrollLink>
                        <ScrollLink to="plans" smooth={true} duration={500} className={`${activeTab === "Plans" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => setActiveTab('Plans')}>Plans</ScrollLink>
                        <ScrollLink to="ongoingProjects" smooth={true} duration={500} className={`${activeTab === "Projects" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => setActiveTab('Projects')}>Projects</ScrollLink>
                        <ScrollLink to="contactUs" smooth={true} duration={500} className={`${activeTab === "ContactUs" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => setActiveTab('ContactUs')}>Contact us</ScrollLink>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-gray-600 focus:outline-none"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6 text-[#ef992c]" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Off-Canvas Menu (Right Side) */}
                <div className={`fixed top-0 right-0 h-full w-80 bg-[#f7e9e9] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 flex justify-between items-center border-b border-[#ef992c]">
                        <Image src={sowkya_logo} alt='sowkya_projects_logo' className='w-[100px] md:w-[120px]' />
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="text-gray-600"
                        >
                            <svg className="w-6 h-6 text-[#ef992c]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col p-4 space-y-4 text-[#121212]">
                        <ScrollLink to="home" smooth={true} duration={500} className={`${activeTab === "Home" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => { setActiveTab('Home'), setIsOpen(false) }}>Home</ScrollLink>
                        <ScrollLink to="aboutUs" smooth={true} duration={500} className={`${activeTab === "AboutUs" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => { setActiveTab('AboutUs'), setIsOpen(false) }}>About us</ScrollLink>
                        <ScrollLink to="plans" smooth={true} duration={500} className={`${activeTab === "Plans" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => { setActiveTab('Plans'), setIsOpen(false) }}>Plans</ScrollLink>
                        <ScrollLink to="ongoingProjects" smooth={true} duration={500} className={`${activeTab === "Projects" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => { setActiveTab('Projects'), setIsOpen(false) }}>Projects</ScrollLink>
                        <ScrollLink to="contactUs" smooth={true} duration={500} className={`${activeTab === "ContactUs" && (color > 90) ? `text-[#ef992c] font-semibold` : ''} cursor-pointer`} onClick={() => { setActiveTab('ContactUs'), setIsOpen(false) }}>Contact us</ScrollLink>
                    </nav>
                </div>

                {/* Overlay */}
                {isOpen && (<div className="fixed inset-0 bg-[#10090b8c] bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />)}
            </nav>
        </>
    )
}

export default Navbar;