import React, {useState} from "react";
import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

import { data } from '../../utils/data'

export default function DefaultNavbar(){

    const [toggle, settoggle] = useState(false);
    const {name} = data;

    const setMenuStat = () =>{
        settoggle(!toggle)
    }
    return(<>
            <Head>
                <title>{name}</title>
                <meta name="description" content={name} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black bg-opacity-25">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                    <Image 
        src="/asher-logo-tan.png"
          width={199}
          height={68}
          alt="Asher Dynamics"
          className="py-2"
          />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={()=>setMenuStat()}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${toggle===true?"":"hidden"} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                            <li>
                                <Link href="/" className="block py-2 pl-3 pr-4 text-amber-300 bg-blue-700 rounded md:bg-transparent md:text-amber-300 md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/portfolio/ourwork" className="block py-2 pl-3 pr-4 text-amber-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-amber-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Work</Link>
                            </li>
                            <li>
                                <Link href="/portfolio/about" className="block py-2 pl-3 pr-4 text-amber-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-amber-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link href="/portfolio/contact" className="block py-2 pl-3 pr-4 text-amber-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-amber-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </>)
}