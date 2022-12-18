import React, { ReactElement } from "react";
import Portfolio from "../../layouts/Portfolio";
import type { NextPageWithLayout } from '../_app'

const Intro:NextPageWithLayout = () => {
    return(<>
    <div className="w-full">
      <div className="w-5/6 mx-auto mt-8">
        <div className="sm:w-full md:w-1/2 p-4">
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Full Stack Web Developer</p>
          <p className="text-xl font-bold pb-4">
            The #1 AI Profile Picture Maker and Generator
          </p>
          <p className="text-xl pb-4">
            Your profile picture is the first thing people see when they look at your profile. Web use artificial intelligene to generate on magical avatars of you that looks perfect and captures who you are. You can be anything or anyone!
          </p>
        </div>
        <div className="sm:w-full md:w-1/2">
        </div>
      </div>
    </div>
    </>)
}
Intro.getLayout = function getLayout(page: ReactElement) {
    return (
      <Portfolio>
        {page}
      </Portfolio>
    )
  }

export default Intro;

