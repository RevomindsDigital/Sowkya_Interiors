"use client";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from '../../../public/images/logo.png'
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faXTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return (
        <>
            <footer className="footer_section">
                <div className="grid grid-cols-3 gap-5 px-[16px] md:px-[24px] lg:px-[40px] py-[24px] sm:py-[60px] bg-[#ffedd8]">
                    <div className="col-span-4 sm:col-span-3 lg:col-span-1">
                        <Image src={logo} width={150} alt="footer_logo_img" />
                        <h4 className="sm:text-xl mt-4 mb-4 md:mb-0 font-medium">Sowkya has been delivering quality homes.<br className="hidden md:block lg:hidden" /> We have redefined the concept of quality housing.</h4>
                        <div className="pt-12 hidden lg:block">
                            <p className="text-lg follow_us font-medium text-[#743f00] mb-2">FOLLOW US</p>
                            <p className="text-2xl text-[#743f00] space-x-4">
                                <FontAwesomeIcon icon={faXTwitter} className="hover:text-[#EE2128] cursor-pointer" />
                                <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#EE2128] cursor-pointer" />
                                <FontAwesomeIcon icon={faFacebook} className="hover:text-[#EE2128] cursor-pointer" />
                                <FontAwesomeIcon icon={faInstagram} className="hover:text-[#EE2128] cursor-pointer" />
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-1">
                        <h4 className="lg:text-center font-semibold text-[#743f00] text-lg mb-3 sm:mb-4 lg:mb-6">Quick links</h4>
                        <ul className="font-medium grid lg:justify-center">
                            <Link to="home" smooth={true} duration={500} className="cursor-pointer"><li>Home</li></Link>
                            <Link to="aboutUs" smooth={true} duration={500} className="cursor-pointer"><li className="mt-2 sm:mt-4">About us</li></Link>
                            <Link to="plans" smooth={true} duration={500} className="cursor-pointer"><li className="mt-2 sm:mt-4">Plans</li></Link>
                            <Link to="ongoingProjects" smooth={true} duration={500} className="cursor-pointer"><li className="mt-2 sm:mt-4">Projects</li></Link>
                            <Link to="contactUs" smooth={true} duration={500} className="cursor-pointer"><li className="mt-2 sm:mt-4">Contact us</li></Link>
                        </ul>
                    </div>
                    <div className="col-span-4 sm:col-span-1">
                        <div className="mb-3 sm:mb-6">
                            <h5 className="font-semibold text-[#743f00] text-lg sm:mb-1">EMAIL</h5>
                            <p className="font-medium"><a href="mailto:info@sowkyainteriors.com" className="cursor-pointer">info@sowkyainteriors.com</a></p>
                        </div>
                        <div className="mb-3 sm:mb-6">
                            <h5 className="font-semibold text-[#743f00] text-lg sm:mb-1">CONTACT US</h5>
                            <p className="font-medium"><a href="tel:8142001888" className="cursor-pointer">8142001888</a></p>
                            <p className="font-medium"><a href="tel:8142009888" className="cursor-pointer">8142009888</a></p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-[#743f00] text-lg sm:mb-1">ADDRESS</h5>
                            <p className="font-medium">
                                Sowkya Projects,<br />Near by LV Prasad Eye Institute,<br />Behind Prestige Villas, Kismatpur,<br />Bandlaguda jagir Municipality, RR - 500086
                            </p>
                        </div>
                    </div>
                    <div className="lg:hidden flex sm:justify-center col-span-4 sm:col-span-1">
                        <div>
                            <p className="text-md sm:text-lg follow_us font-medium text-[#743f00] mb-2">FOLLOW US</p>
                            <p className="text-lg sm:text-xl lg:text-2xl text-[#743f00] space-x-4">
                                <FontAwesomeIcon icon={faXTwitter} className="hover:text-[#EE2128] cursor-pointer" />
                                <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#EE2128] cursor-pointer" />
                                <FontAwesomeIcon icon={faFacebook} className="hover:text-[#EE2128] cursor-pointer" />
                                <FontAwesomeIcon icon={faInstagram} className="hover:text-[#EE2128] cursor-pointer" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="copyRights py-1 text-center bg-[#743f00]">
                    <p className="text-[#fffbf552] text-[8px] sm:text-xs font-medium">Copyright © 2025 All Rights Reserved by Sowkya Projects</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;










