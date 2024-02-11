import React from "react";
import './Footer.css'
import companyLogo from "../../assets/header-assets/company-logo.svg";
import { FooterConstants } from "../../utils/constants"; 

const Footer: React.FC = () => {

    return (
        <>

            <div className="footer-main">

                <div className="footer">
                    <div className="subscribe-text">
                        <p> { FooterConstants.subscribeText }</p>
                        <p> { FooterConstants.subscribeInfo }</p>
                    </div>

                    <div className="subscribe-input">
                        <input className="input-feild" placeholder="Email Address:" />
                        <button> { FooterConstants.subscribe } </button>
                    </div>

                </div>

                <div className="footer-body">
                    <div className="footer-subheadings">
                        <div className="our-brands">
                            <h5 className="our-brands-heading"> { FooterConstants.ourBrand } </h5>
                            <a href='#' className="footer-links"> { FooterConstants.chemicalToday } </a>
                            <a href='#' className="footer-links"> { FooterConstants.chemicalTodayTV } </a>
                            <a href='#' className="footer-links"> { FooterConstants.chemSquare } </a>
                        </div>
                        <div className="our-brands">
                            <h5 className="our-brands-heading"> { FooterConstants.quickLinks } </h5>
                            <a href='#' className="footer-links"> { FooterConstants.stocks } </a>
                            <a href='#' className="footer-links"> { FooterConstants.becomeEliteMember } </a>
                            <a href='#' className="footer-links"> { FooterConstants.jobs } </a>
                        </div>
                        <div className="our-brands">
                            <h5 className="our-brands-heading"> { FooterConstants.usefulLinks } </h5>
                            <a href='#' className="footer-links"> { FooterConstants.blogs } </a>
                            <a href='#' className="footer-links"> { FooterConstants.articles } </a>
                            <a href='#' className="footer-links"> { FooterConstants.medicalKit } </a>
                        </div>
                        <div className="our-brands">
                            <h5 className="our-brands-heading"> { FooterConstants.infoLinks } </h5>
                            <a href='#' className="footer-links"> { FooterConstants.aboutUs } </a>
                            <a href='#' className="footer-links"> { FooterConstants.contactUs } </a>
                            <a href='#' className="footer-links"> { FooterConstants.termsAndCond } </a>
                            <a href='#' className="footer-links"> { FooterConstants.privacyPolicy } </a>
                        </div>
                    </div>
                    <div>
                        <div className="footer-img">
                            <img src={companyLogo} className="footer-logo" />
                        </div>
                        <div className="footer-icons">
                            <div className="footer-icon"></div>
                            <div className="footer-icon"></div>
                            <div className="footer-icon"></div>
                            <div className="footer-icon"></div>
                            <div className="footer-icon"></div>
                        </div>
                        <p className="footer-copyright"> { FooterConstants.copyright } </p>
                    </div>

                </div>

            </div>
        </>
    )

};

export default Footer;