import React from "react";
import "../styles/footer.css"

const Footer = () => {
    return(
   
        <div>
            <div className="container-sub">
                <div className="newletter-heading">
                    Subscribe Newsletter & Get Latest News
                </div>
                <div>
                    <form>
                        <input type={"email"}><button>subscribe</button></input>
                    </form>
                </div>



            </div>
        </div>

    )
}

export default Footer;