import React from 'react'
import './style.css';
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


const ContactUsComponent = () => {
  const currentUrl = window.location.href;
  return (
    <div><div className="container3">
      <div className="contact">
        <div className="contact-detail">
          <h2>How can I contact the organiser with any question</h2>
          <br />
          <p style={{ fontSize: "20px" }}>Please contact :-  <a style={{ textDecoration: "none" }}>+91 88517 11857</a> for any event related query </p>
        </div>
      </div>
      <div className="socials">
        <div className="share">
          <h2>Share With Friends</h2>
        </div>
        <br />
        <div className="socials-logo">
          <a className="fa"><WhatsappShareButton url={currentUrl}><BsWhatsapp /></WhatsappShareButton></a>
          <a className="fa"><LinkedinShareButton url={currentUrl}><BsLinkedin /></LinkedinShareButton></a>
          <a className="fa"><TwitterShareButton url={currentUrl}><BsTwitter /></TwitterShareButton></a>
          <a className="fa"><FacebookShareButton url={currentUrl}><BsFacebook /></FacebookShareButton></a>
        </div>
      </div>
    </div></div>
  )
}

export default ContactUsComponent

