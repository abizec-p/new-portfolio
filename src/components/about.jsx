import resume from "../assets/file/Resume.pdf";
import topImg from "../assets/img/about-me-abizec.jpg";
import { FaReact, FaHtml5, FaCss3, FaJs, FaFigma } from "react-icons/fa";
import { RiNextjsFill,RiTailwindCssFill  } from "react-icons/ri";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
} from "react-icons/si";

export default function About() {
  return (
    <section className="about-main">
      <div className="about-image">
        <img src={topImg} alt="Abishek-pariyar-about-us" />
        <h1>-About Me-</h1>
      </div>
      <div className="text-part-about">
        <div className="text-part-about-first">
          <p>
            <b>
              Hi, I'm Abishek Pariyar — a front-end developer based in
              Mississauga, Ontario, focused on building fast, responsive,
              well-structured web applications.
            </b>{" "}
            My path here wasn't linear. I started diving into web development at
            19, and along the way picked up a diploma in advertising and graphic
            design and one in computer engineering — a combination that turned
            out to be an asset rather than a detour. I bring a designer's eye
            for clean, usable interfaces together with an engineer's focus on
            how things actually work under the hood.
          </p>
          <div className="resume-section">
            <a href={resume} download="Resume.pdf" className="resume">
              Resume <span></span>
            </a>
          </div>
        </div>

        <div className="text-part-about-second">
          <h1>My Skills / What I work with</h1>
          <p>
            I build with React, Next.js, and TypeScript, styled with Tailwind
            CSS, and I'm now comfortable working across the full stack —
            PostgreSQL, server actions, authentication, and API integration. My
            most recent project, TasteHome, is a full-stack food marketplace app
            that pushed me into backend development for the first time, and I've
            completed Vercel's official Next.js course to sharpen my App Router
            and server-side fundamentals. <br />
            <br />
            My design background (Photoshop, Illustrator, Figma) isn't separate
            from my dev work — it's why I care about the details that make an
            interface actually feel good to use, not just function.
            <div className="social-media-about-me">
              <a href="">
                <FaReact />
              </a>
              <a href="">
                <FaHtml5 />
              </a>
              <a href="">
                <RiNextjsFill />
              </a>
              <a href="">
                <RiTailwindCssFill  />
              </a>
              <a href="">
                <FaCss3 />
              </a>
              <a href="">
                <FaJs />
              </a>
              <br />
              <a href="">
                <FaFigma />
              </a>
              <a href="">
                <SiAdobephotoshop />
              </a>
              <a href="">
                <SiAdobeillustrator />
              </a>
              <a href="">
                <SiAdobeindesign />
              </a>
            </div>
          </p>
          <h1>Beyond the Screen</h1>
          <p>
            When I'm not coding or designing, you’ll likely find me with a
            camera in hand. Photography is my creative outlet – a way to capture
            the world around me and bring that same eye for detail to my work.
            It’s through this lens that I see the beauty in both the smallest
            and the biggest things, and it constantly inspires the work I do.
          </p>
          <p>
            You can see some of my works on{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/pariyar_abizake/"
            >
              Instagram
            </a>
          </p>
          <h1>What I'm looking for.</h1>
          <p>
            I'm currently looking for a junior/entry-level front-end developer role where I can keep growing — someone who's detail-oriented, picks things up fast, and genuinely enjoys the process of turning an idea into a working product. If that sounds like a fit for your team, I'd love to talk. <a href="/contact">Contact</a>
          </p>
        </div>
      </div>
    </section>
  );
}
