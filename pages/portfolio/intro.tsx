import React, { ReactElement } from "react";
import Portfolio from "../../layouts/Portfolio";
import type { NextPageWithLayout } from '../_app'

const Intro:NextPageWithLayout = () => {
    return(<>
    This is Intro Page
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

