"use client"
import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";



const Navbar = () => {
 
    return (
        <div className="w-full h-11 dark:text-white uppercase text-lg  text-md flex items-center justify-between px-16 bg-gray-800 text-white">
                <div>BirNet</div>
                <div className="hidden lg:flex"><input type="search" placeholder="Axtar..." className="px-2 py-1 bg-transparent outline-white border rounded-md text-white w-full" /></div>
                <div className="flex items-center cursor-pointer">
                    <MdOutlinePhoneInTalk size={20} className="mr-2 text-white" />
                <div>055 8080801</div>
                </div>                

        </div>
    );
}

export default Navbar;