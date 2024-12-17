import React from "react";
import "../Styles/Pages/index.scss";
import kasafooter from "../assets/img/kasafooter.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={kasafooter} alt="kasafooterimg" />
            <p> &copy; 2020 Kasa, All rights reserved</p>
        </footer>
    );
};

export default Footer;
