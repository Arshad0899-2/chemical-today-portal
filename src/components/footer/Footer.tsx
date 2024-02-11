import React from "react";
import './Footer.css'

const Footer: React.FC = () => {

    return (
        <>

            <div className="footer-main">

                <div className="footer">
                    <div className="subscribe-text">
                        <p>Subscribe to our Newsletter</p>
                        <p>Stay updated with the latest chemical industry trends and innovations.</p>
                    </div>

                    <div className="subscribe-input">
                        <input className="input-feild" placeholder="Email Address:"/>
                        <button>Subscribe</button>
                    </div>

                </div>
            </div>
        </>
    )

};

export default Footer;