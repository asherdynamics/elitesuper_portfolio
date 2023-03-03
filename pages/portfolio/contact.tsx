import React, {ReactElement} from "react";
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Portfolio from "../../layouts/Portfolio";


export default function Contact(){

    return(<>
    <div className="flex items-center min-h-screen bg-transparent">
  <div className="container mx-auto">
    <div className="max-w-md mx-auto my-10 bg-opacity-60 bg-black p-5 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Contact Us
        </h1>
        <p className="text-gray-400 dark:text-gray-400">
          Fill up the form below to send us a message.
        </p>
      </div>
      <div className="m-7">
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <input type="checkbox" name="botcheck" id="" className="hidden" />
          <div className="mb-6">
            <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label for="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

            <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full px-3 py-4 text-black bg-amber-300 rounded-md focus:bg-indigo-600 focus:outline-none">
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
    return (
      <Portfolio>
        {page}
      </Portfolio>
    )
}




