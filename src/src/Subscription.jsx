import React from "react";
import Header from "./Header";
import Breadsub from "./Breadsub";
import Footer from "./Footer";
import Subs from "./Viewsubs";
import "./Viewsubs.css"

function Subpage() {
    return (
        <div>
            <Header/>
            <Breadsub />
            <Subs />
            <Footer />
        </div>
    )

}

export default Subpage;