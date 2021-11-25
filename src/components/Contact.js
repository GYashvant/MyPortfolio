import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-details">
            <ul>
              <li>
                <h5>
                <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
                </h5>
              </li>
              <li>
                <h5 style={{marginLeft: "2px"}}>
                  <a target="_blank" 
                  href="https://github.com/GYashvant">
                <img src="https://img.icons8.com/small/48/ffffff/github.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank" 
                  href="https://www.linkedin.com/in/yashvant-kumar-gogineni-799828207/">
                <img src="https://img.icons8.com/ios-glyphs/48/4a90e2/linkedin.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank"
                   href="https://www.google.co.in/maps/place/Gudivada,+Andhra+Pradesh/@16.4299302,80.9569909,13z/data=!4m13!1m7!3m6!1s0x3a361ca9703a5305:0xb92bbf81640f13be!2sGudivada,+Andhra+Pradesh!3b1!8m2!3d16.4344461!4d80.9931388!3m4!1s0x3a361ca9703a5305:0xb92bbf81640f13be!8m2!3d16.4344461!4d80.9931388">
                <img src="https://img.icons8.com/external-justicon-flat-justicon/48/4a90e2/external-gps-map-and-location-justicon-flat-justicon.png"/>
                </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:gyashvantkumar@gmail.com"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
