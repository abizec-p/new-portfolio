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

 useEffect(()=>{
    if (isOpen) {
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
                <button > My Résumé</button>
                
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
