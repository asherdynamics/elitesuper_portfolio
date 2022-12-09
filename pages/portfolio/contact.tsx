import React,{ReactElement} from "react";

import Portfolio from "../../layouts/Portfolio";

export default function Contact(){
    
    return(<>
        This is Contact Page
    </>)

}

Contact.getLayout = function getLayout(page: ReactElement) {
    return (
      <Portfolio>
        {page}
      </Portfolio>
    )
}