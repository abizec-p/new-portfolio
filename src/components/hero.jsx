import plant from "../assets/img/planttt.png";
import Works from "./work";
import resume from "../assets/file/Resume.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

 useEffect(()=>{
    if (isOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
    if (resumeOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }

 })
  return (
    <>
      <section className="hero">
        <div className="main">
          <img src={plant} alt="plant picture" />
          <h3>
            "Hi, I'm Abishek Pariyar — a passionate Web Developer and Designer
            dedicated to building responsive, user-focused websites that blend
            creativity with clean code."
            <br />
            <div className="hero-call-to-action">
              <button onClick={() => {setIsOpen(true)}}>Contact Me</button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div className="background-layer-modal"
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  exit={{opacity:0}}
                  onClick={()=> {setIsOpen(false)}}
                  >
                    <motion.div 
                    className="contact-info-modal"
                    initial={{opacity:0,scale:0.8}}
                    animate={{opacity:1, scale:1}}
                    exit={{opacity:0, scale: 0.7}}>
                        <div className="contact-detail-modal">
                            <div className="profile-icon"><CgProfile />
</div>
                            <div>

                            <label>Abishek Pariyar</label>
                            <p>Front-End Developer & Designer</p>
                            </div>
                            <br />
                            <div>
                            <p>(437)665-1393</p>
                            <a href="mailto:pariyarabishek@gmail.com">pariyarabishek@gmail.com</a>
                                                        <div className="social-media-modal">

                            <a href="https://www.linkedin.com/in/abishek-pariyar/" target="_blank"><FaLinkedin/></a>
                            <a href="https://github.com/abizec-p" target="_blank"><FaGithubSquare/></a>
                            <a href="https://www.instagram.com/pariyar_abizake/" target="_blank"><FaInstagramSquare/></a>

</div></div>

                        </div>


                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
                <button  onClick={()=>{setResumeOpen(true)}}> My Résumé</button>
                <AnimatePresence>
                    {resumeOpen && (
                        <motion.div
                        className="background-layer-modal"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        onClick={()=>{setResumeOpen(false)}}                      
                        
                        >
                            <motion.div
                            className="resume-modal"
                            initial={{opacity:0, scale:0.8}}
                            animate={{opacity:1, scale:1}}
                            exit={{opacity:0, scale:0.7}}
                            transition={{duration:0.03}}
                            onClick={(e)=>{e.stopPropagation()}}
                            >
                              <div className="resume-doc">
                                <label onClick={()=> {setResumeOpen(false)}} htmlFor="label">X</label>
                                <p>Skills</p>
                                <ul>
                                <li>HTML5, CSS3, ReactJs, Javascript, JSX, Framer Motion</li>
                                <li>Typography, Color Theory, Layout & Composition, Branding & Identity Design, Adobe Creative Suite.</li>
                                <li>Version Control, Debugging, Error handling</li>
                                <li>Responsive design</li>
                                <li>Deployment and hosting</li>
                                </ul>
                                <br />
                                <p>Experience</p>
                                <ul>
                                <span>Front-end Web developer | Salyani Technologies – Chitwan, Nepal (Feb.2022 – Apr.2023)</span>
                                <li>Typography, Color Theory, Layout & Composition, Branding & Identity Design, Adobe Creative Suite.</li>
                                <li>Version Control, Debugging, Error handling</li>
                                <li>Responsive design</li>
                                <li>Deployment and hosting</li>
                                </ul>
                                <br />
                                <p>Projects</p>
                                <li><a href="https://abishekportfolionew.netlify.app/">Graphic design portfolio - Abishek pariyar</a></li>
                                <li><a href="https://2broshvac.ca/">HVAC Website - 2 Bros Hvac</a></li>
                                <li><a href="https://calculatemate.netlify.app/">Calculator App</a></li>
                                <br />
                                <p>Education</p>
                                <ul>
                                  <li>Advertising and Graphics designing – Humber college, Etobicoke, Canada (2024 – running)</li>
                                  <li>Diploma in Computer Engineering – Nepal Polytechnic Institute, Chitwan, Nepal (2019 - 2021)</li>
                                </ul>
                              </div>
    





                            </motion.div>
                            
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </div>
          </h3>
        </div>
      </section>
      <section className="work">
        <Works />
      </section>
    </>
  );
}
