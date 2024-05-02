import React from "react";
import Heading from "./Heading";
import Table2 from "./Table2";

const Rendering = ({isLoggedIn}) => {
    const Component = isLoggedIn ? Heading : Table2;
    return(
        <Component/>
    )
}

export default Rendering;