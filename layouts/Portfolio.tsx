import React from "react";
import PropTypes, { InferProps } from "prop-types";
import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import { ParticlesContainer } from '../components/particles/ParticlesContainer'

export default function Portfolio({children}:InferProps<typeof Portfolio.propTypes>){
    return(
        <>
            <DefaultNavbar />
            <div>
                {children}
            </div>
            <ParticlesContainer/>
        </>
    )
}

Portfolio.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}