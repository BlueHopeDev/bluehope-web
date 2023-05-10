import React from "react";
import Image from "next/image";
import { RiSearchLine, RiUser3Line, RiMenu4Fill } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { BiCategoryAlt, BiInfoCircle, BiChevronRight } from "react-icons/bi";
import WideLogo from "../../../public/bluehope-text.svg";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex justify-center">
            <nav className="flex items-center h-[64px] w-full max-w-screen-lg mx-[40px]">
                <div id="brand" className="min-w-[64px] w-[64px] h-[24px] my-[20px]">
                    <Image
                        src={WideLogo}
                        alt="BLUEHOPE"
                        style={{
                            width: "64px",
                            height: "24px"
                        }}
                    />
                </div>
                <div id="search" className="flex items-center rounded-full h-[36px] w-max px-[12px] ml-[20px] my-[14px] bg-[color:#EFEFEF] border-[2px] border-transparent hover:border-[#000] transition duration-300 ease-in-out cursor-pointer">
                    <div className="flex items-center gap-[5px]">
                        <RiSearchLine className="text-[16px]"/>
                        <span className="w-auto p-[4px] whitespace-nowrap">Cmd + K</span>
                    </div>
                </div>
                <div id="menu" className="h-full w-full flex items-center justify-end">
                    <ul className="hidden h-full w-min gap-[20px] sm:flex sm:flex-row">
                        <li className="flex justify-center flex-col hover:last-of-type:w-full group">
                            <div className="flex items-center">
                                <GrHomeRounded className="text-[16px]"/>
                                <Link className="ml-[5px]" href={"/"}>Home</Link>
                            </div>
                            <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                        </li>
                        <li className="group relative flex justify-center">
                            <div id="dropdown" className="flex justify-center flex-col hover:last-of-type:w-full group">
                                <div className="flex items-center">
                                    <BiCategoryAlt className="text-[16px]"/>
                                    <Link className="ml-[5px]" href={"/"}>Category</Link>
                                    <BiChevronRight className="ml-[5px] group-hover:rotate-90 text-[16px] transition duration-200 ease-in-out"/>
                                </div>
                                <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                            </div>
                            <div id="dropdown-content" className="hidden absolute w-[200px] top-[64px] z-[1] group-hover:block">
                                <ul className="flex flex-col p-[10px] m-[10px] bg-[#FFF] rounded-sm shadow-lg shadow-gray-200 gap-[5px]">
                                    <li className="p-[5px] hover:bg-slate-200 rounded-sm cursor-pointer transition duration-300 ease-in-out">Technology</li>
                                    <li className="p-[5px] hover:bg-slate-200 rounded-sm cursor-pointer transition duration-300 ease-in-out">Marketing</li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex justify-center flex-col hover:last-of-type:w-full group">
                            <div className="flex items-center">
                                <BiInfoCircle className="text-[16px]"/>
                                <Link className="ml-[5px]" href={"/"}>About</Link>
                            </div>
                            <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                        </li>
                        <li className="group relative flex justify-center">
                            <div id="dropdown" className="flex justify-center flex-col hover:last-of-type:w-full group">
                                <div className="flex items-center">
                                    <RiUser3Line className="text-[16px]"/>
                                    <Link className="ml-[5px]" href={"/"}>User</Link>
                                    <BiChevronRight className="ml-[5px] group-hover:rotate-90 text-[16px] transition duration-200 ease-in-out"/>
                                </div>
                                <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                            </div>
                            <div id="dropdown-content" className="hidden absolute w-[200px] top-[64px] z-[1] right-[-20px] group-hover:block">
                                <ul className="flex flex-col p-[10px] m-[10px] bg-[#FFF] rounded-sm shadow-lg shadow-gray-200 gap-[5px]">
                                    <li className="p-[5px] hover:bg-slate-200 rounded-sm cursor-pointer transition duration-300 ease-in-out">Log in</li>
                                    <li className="p-[5px] hover:bg-slate-200 rounded-sm cursor-pointer transition duration-300 ease-in-out">Register</li>
                                    <li className="p-[5px] hover:bg-slate-200 rounded-sm cursor-pointer transition duration-300 ease-in-out">Light Mode</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="block sm:hidden">
                        <RiMenu4Fill/>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;