import React from "react";
// styles
import "../styles/feature.css";


const Memorius = () => {
    return(
        <>
        {/* <h1 className="heading">Make MEMORIUS WITH US </h1> */}
        <div className="container">
            <div className="ind-container">
                <div className ="image">
                <div className="container-person">
                  <img className="image person"/>
                </div>
                <h3  className="name">Person name</h3>
                </div>
               
            </div>

            <div className="ind-container zig-zag image">
            </div>

            <div className="ind-container image">
            </div>

            <div className="ind-container zig-zag image">
            </div>
        </div>
        </>
    )
}

export default Memorius;