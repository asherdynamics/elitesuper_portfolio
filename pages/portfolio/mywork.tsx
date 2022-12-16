import React, {ReactElement} from "react";

import Portfolio from "../../layouts/Portfolio";

export default function MyWork(){
    return(<>
    This is My Work Page.
    </>)
}

MyWork.getLayout = function getLayout(page: ReactElement) {
    return (
      <Portfolio>
        {page}
      </Portfolio>
    )
}
