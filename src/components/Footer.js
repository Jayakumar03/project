import React from "react";
import "../styles/footer.css"

const Footer = () => {
    return(
   
        <div>
            <div className="container-sub">
                <div className="newsletter">
                    Subscribe Newsletter & Get Latest News
                </div>
                <div className="newsletter">
                    <form>
                        <input type={"email"}  placeholder="Enter your email here"></input>
                        <button className="button">subscribe</button>
                    </form>
                </div> 
            </div>

            {/* nav links */}
            <div className="container-nav">
                <div className="com-con">
                    <h3>"logo" Ft plane</h3>
                    <p>lorem ispun is just an smaple text for the reference for the progarmmer</p>
                    <button><a href="##"></a><i class="fa-brands fa-facebook"></i></button>
                    <button><a href="##"></a><i class="fa-brands fa-twitter"></i></button>
                    <button><a href="##"></a><i class="fa-brands fa-youtube"></i></button>
                </div>

                <div className="com-con">
                    <h3>Address</h3>
                    <p> Hello </p>
                    <p> Hello </p>
                    <p> Hello </p>
                    <p> Hello </p>
                </div>

                <div className="com-con">
                    <h3>Address</h3>
                    <p> Hello </p>
                    <p> Hello </p>
                    <p> Hello </p>
                    <p> Hello </p>
                </div>

                <div className="com-con">
                    <h3>Address</h3>
                    <p> Hello </p>
                    <p> Hello </p>
                    <p> Hello </p>
                    <p> Hello </p>
                </div>
            </div>
            <hr />
            <div className="copyright">
            <h2>@copyright by jayakumar</h2>
            </div>
           

        </div>

    )
}

export default Footer;