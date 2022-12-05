import React from "react";
import PropTypes, { InferProps } from "prop-types";
import DefaultNavbar from "../components/Navbar/defaultnavbar";


export default function Portfolio({children}:InferProps<typeof Portfolio.propTypes>){
    return(
        <>
            <DefaultNavbar />
            <div>
                {children}
            </div>
        </>
    )
}

Portfolio.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}