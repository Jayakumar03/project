import React from "react";
// styles
import "../styles/feature.css";


const FloatingDiv = () => {
    return(
        <>
        <h1 className="heading">FEATURES </h1>
        <div className="container">
            <div className="ind-container">
                <div className="head-icons " >
                <i className="fa fa-address-book icons" aria-hidden="true"></i>
                </div>
                <h3>Best Guide</h3>

                <div className="div-text">
                    Lorem ispun some text to clarify the icons to show case.
                </div>
                <div className="tail-icons">
                <i class="fa-solid fa-arrow-right icons"></i>
                </div>

            </div>

            <div className="ind-container zig-zag">
                <div className="head-icons " >
                <i className="fa fa-address-book icons" aria-hidden="true"></i>
                </div>
                <h3>Private</h3>

                <div className="div-text">
                    Lorem ispun some text to clarify the icons to show case.
                </div>
                <div className="tail-icons">
                <i class="fa-solid fa-arrow-right icons"></i>
                </div>

            </div>

            <div className="ind-container">
                <div className="head-icons " >
                <i className="fa fa-address-book icons" aria-hidden="true"></i>
                </div>
                <h3>Discount</h3>

                <div className="div-text">
                    Lorem ispun some text to clarify the icons to show case.
                </div>
                <div className="tail-icons">
                <i class="fa-solid fa-arrow-right icons"></i>
                </div>

            </div>

            <div className="ind-container zig-zag">
                <div className="head-icons " >
                <i className="fa fa-address-book icons" aria-hidden="true"></i>
                </div>
                <h3>More discount</h3>

                <div className="div-text">
                    Lorem ispun some text to clarify the icons to show case.
                </div>
                <div className="tail-icons">
                <i class="fa-solid fa-arrow-right icons"></i>
                </div>

            </div>
        </div>
        </>
    )
}

export default FloatingDiv