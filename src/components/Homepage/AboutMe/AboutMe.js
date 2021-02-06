import React from "react";
import "./_aboutMe.scss";
import aboutImg from "../../../assets/images/about.svg";
import contact from "../../../assets/images/contact.png";
import { Link } from "react-router-dom";
import * as routes from "../../../routePaths";

const AboutMe = props => (
  <section id="aboutMe" className="aboutMe container-fluid section-spacing">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 about-text-col">
          <div className="section-heading">
            <h4 className="about-me-heading">About Me</h4>
          </div>
          <div className="about-text">
            <p className="description" style={{color: "#969696"}}> 
            Hi, I'm Shodipo Ayomide a Developer Relations Manager at Stack Overflow with 9 years of experience in Technology and a track record in Web & Mobile Engineering, Community Management and Product Design on a global scale. < br/> < br/>

He has giving talks/workshops at developer conferences around the globe at React Atlanta, FutureSync Conference, VueJS Amsterdam, VueJS Toronto, APIDAYS Hong Kong, Frontend Love Conference Amsterdam, FOSSASIA among many, he is also one of the organizers of the Developer Circles Lagos from Facebook, unStack Africa, Open-Source Community Africa, and various other communities empowering Africa and the world. In addition, he is an Expert and Instructor at egghead.io < br/> < br/>

Among his latest topics we can find: Progressive Imaging & Handling: React + WebPack, Fast and Furious with VueJS & WebPack, Getting up to Speed With Deno, Automating Workflow Processes Using GitHub Actions, Design from the Realm of Open-Source, Technical Principles to Developer Experience and others. < br/> < br/>
            </p>
          </div>
          {/* <div className="row ml-0 about-lists-row">
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Developer Relations</li>
             <p>I have Lead DevRel teams & Managed high scale programs in DevRel acorss Africa, positioning a product at a point of a unique developer onboarding experience.</p>
            </ul>
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Program Manager</li>
              <p>I have managed highscale programs for companies based on contract, my goal was to come up with a program that would help onboard more developers into a cool new program.</p>
              
            </ul>
            <ul className="col-12 col-lg-6 about-list">
            <li className="description">Engineering </li>
            <p>Over 8 years experience building complex systems from the web to mobile and desktop side of engineering, and as a Developer Advocate, working acoross many technologies. </p>
            </ul>
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Community Manager</li>
              <p>Starting, building and scaling communities is exciting, organizing conferences or meetups to empower the people in the community with technology has always been exciting to me.</p>
            </ul>
          </div> */}


          <div className="contact-me-wrapper">
          <Link to={`${routes.homepage}#contactUs`} className="nav-link">
            <button className="primary-btn">
              <img src={contact} alt="contact" />
             Send an Email
            </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-7 about-img-col">
          <img className="img-fluid" src={aboutImg} alt="about-me" style={{width: "500px"}} />
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;