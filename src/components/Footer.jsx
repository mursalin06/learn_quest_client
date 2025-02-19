import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import logo from '../assets/favicon.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-300 p-4 ">
                <aside>
                    <img className="w-[50px] h-[50px]" src={logo} alt="" />
                    <p>
                        <span className="font-bold text-lg">
                            The Learn Quest
                        </span>
                        <br />
                        Embark on a Journey of Knowledge!
                    </p>
                    <p className="flex gap-3 items-center"><FaLocationDot></FaLocationDot> <span>Level-4, 34, Awal Centre, Banani, Dhaka</span></p>
                    <p className="flex gap-3 items-center"><FiPhoneCall></FiPhoneCall> <span>01322810867 , 01332502004</span></p>
                </aside>
                <nav>
                    <h6 className="footer-title">Socials</h6>
                    <div className="grid grid-flow-col gap-4 cursor-pointer">
                        <a 
                        target="_blank"
                        href="https://www.instagram.com/mn_mursalin/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                            </svg>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/md-mursalin06/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/mn.mursalin.18">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="22"
                                viewBox="0 0 24 22"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;