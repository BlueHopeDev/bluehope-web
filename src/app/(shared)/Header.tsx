'use client'
import React from "react";
import Image from "next/image";
import {
    RiHome6Line,
    RiSearchLine,
    RiUser3Line,
    RiMenu4Fill,
    RiInformationLine,
    RiFunctionLine,
    RiArrowRightSLine,
    RiMoonLine,
    RiSunLine,
    RiTimerLine
} from "react-icons/ri";
import WideLogo from "../../../public/bluehope-text.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const Header = (props: Props) => {

    const router = useRouter();

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
                    <ul className="hidden h-full w-min gap-[20px] sm:flex sm:flex-row [&>li]:cursor-pointer">
                        <li className="relative flex justify-center">
                            <div onClick={() => router.push("/test")} className="flex justify-center flex-col hover:last-of-type:w-full group">
                                <div className="flex items-center">
                                    <RiHome6Line className="text-[16px]"/>
                                    <span className="ml-[5px]">Home</span>
                                </div>
                                <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                            </div>
                        </li>
                        <li className="group relative flex justify-center">
                            <div onClick={() => router.push("/test2")} id="dropdown" className="flex justify-center flex-col hover:last-of-type:w-full group">
                                <div className="flex items-center">
                                    <RiFunctionLine className="text-[16px]"/>
                                    <span className="ml-[5px]">Category</span>
                                    <RiArrowRightSLine className="ml-[5px] group-hover:rotate-90 text-[16px] transition duration-200 ease-in-out"/>
                                </div>
                                <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                            </div>
                            <div id="dropdown-content" className="hidden absolute w-[160px] top-[54px] z-[1] group-hover:block">
                                <ul className="flex flex-col m-[10px] bg-[#FFF] rounded-sm shadow-lg shadow-gray-200 [&>li:hover]:bg-slate-200 [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm [&>li]:text-center">
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Technology</li>
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Marketing</li>
                                </ul>
                            </div>
                        </li>
                        <li className="relative flex justify-center">
                            <div onClick={() => router.push("/test")} className="flex justify-center flex-col hover:last-of-type:w-full group">
                                <div className="flex items-center">
                                    <RiInformationLine className="text-[16px]"/>
                                    <span className="ml-[5px]">About</span>
                                </div>
                                <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                            </div>
                        </li>
                        <li className="group relative flex justify-center">
                            <div id="dropdown" className="flex justify-center flex-col hover:last-of-type:w-full group">
                                <div className="flex items-center">
                                    <RiUser3Line className="text-[16px]"/>
                                    <Link className="ml-[5px]" href={"/"}>Account</Link>
                                    <RiArrowRightSLine className="ml-[5px] group-hover:rotate-90 text-[16px] transition duration-200 ease-in-out"/>
                                </div>
                                <div className="h-[2px] w-[0px] bg-[#000] group-hover:w-full transition-width duration-200 ease-in-out"></div>
                            </div>
                            <div id="dropdown-content" className="hidden absolute w-[160px] top-[54px] right-[-10px] z-[1] group-hover:block">
                                <ul className="flex flex-col m-[10px] bg-[#FFF] rounded-sm shadow-lg shadow-gray-200 [&>li:hover]:bg-slate-200 [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm [&>li]:pr-[12px] [&>li]:text-right">
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Log in</li>
                                    <li className="p-[5px] cursor-pointer transition duration-300 ease-in-out">Register</li>
                                    <div className="flex relative flex-row items-center justify-center [&>input]:hidden py-[10px] px-[8px] gap-[5px] bg-slate-100 [&>label]:cursor-pointer [&>label]:p-auto [&>label]:w-full [&>label]:flex [&>label]:justify-center [&>label]:z-[2]">
                                        <input id="0" name="mode" type="radio" className="[&:checked~span]:translate-x-[-43px]"/>
                                        <label htmlFor="0"><RiSunLine/></label>
                                        <input id="1" name="mode" type="radio" className="[&:checked~span]:translate-x-[0]"/>
                                        <label htmlFor="1"><RiTimerLine/></label>
                                        <input id="2" name="mode" type="radio" className="[&:checked~span]:translate-x-[43px]"/>
                                        <label htmlFor="2"><RiMoonLine/></label>
                                        <span className="flex absolute bg-slate-200 h-[24px] w-[38px] z-[1] rounded-sm transition duration-300 ease-in-out"></span>
                                    </div>
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