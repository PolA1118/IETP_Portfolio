// src/pages/Home.jsx
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const sections = [
      "introduction",
      "overview",
      "technologies",
      "features",
      "team",
      "conclusion",
    ];

    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3; // offset to trigger earlier

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial call in case page is already scrolled

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* TABLE OF CONTENTS */}
      <aside className="toc">
        <h3>Contents</h3>
        <ul>
          <li className={activeSection === "introduction" ? "active" : ""}>
            <a href="#introduction">Introduction</a>
          </li>
          <li className={activeSection === "overview" ? "active" : ""}>
            <a href="#overview">Project Overview</a>
          </li>
          <li className={activeSection === "technologies" ? "active" : ""}>
            <a href="#technologies">Technologies Used</a>
          </li>
          <li className={activeSection === "features" ? "active" : ""}>
            <a href="#features">Key Features</a>
          </li>
          <li className={activeSection === "team" ? "active" : ""}>
            <a href="#team">Team Members</a>
          </li>
          <li className={activeSection === "conclusion" ? "active" : ""}>
            <a href="#conclusion">Conclusion</a>
          </li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <section id="introduction">
          <h1>Group Project Portfolio</h1>
          <p className="subtitle">
            A carbon capture system is a technology used to remove carbon dioxide (CO₂) from the air or from industrial gases. It helps reduce air pollution and global warming by trapping harmful carbon emissions before they reach the atmosphere.
          </p>
        </section>

        <section id="overview">
          <h2>Project Overview</h2>
          <p>
            Carbon capture and storage (CCS) is a set of methods that capture carbon dioxide (CO2) from power plants and industrial facilities and then store it (sequestration) or reuse it to help limit global warming.
            Common approaches include post-combustion, pre-combustion, and oxy-fuel combustion.
            Its cost and performance can influence future energy and climate policy.
          </p>
        </section>

        <section id="features" className="key-takeaways">
          <h2>Key Features</h2>
          <ul>
            <li>Carbon capture and storage (CCS) involves trapping and storing CO2 to reduce emissions.</li>
            <li>Methods like post-combustion and direct air capture aim to prevent CO2 from entering the atmosphere.</li>
            <li>CCS is praised for addressing industrial emissions, but criticized for high costs and slow adoption.</li>
            <li>Carbon capture can be a stopgap until renewable energy sources are more widely adopted.</li>
          </ul>
        </section>

        <section id="technologies">
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>CO₂ Capture System:</strong> This is where flue or ambient gas comes into contact with the chemical sorbent through modular gas–liquid contactors or structured absorbers.</li>
            <br />
            <li><strong>Regeneration and Heating Unit:</strong> This subsystem uses heaters, heat exchangers, and condensers to regenerate the sorbent at scheduled intervals.</li>
            <br />
            <li><strong>Environmental Monitoring System:</strong> temperature sensors installed to monitor the system in real time. These sensors help determine when regeneration should occur based on actual operating conditions.</li>
            <br />
            <li><strong>Automation and Control Module:</strong> microcontroller runs the time-based regeneration algorithm. It controls heaters, and safety mechanisms, allowing the system to operate automatically based on preset schedules or sensor feedback.</li>
            <br />
          </ul>
        </section>

        <section id="team">
          <h2>Team Members</h2>
          <p>Developed collaboratively by group members.</p>

          <Link to="/about" className="about-link">
            Meet the Team →
          </Link>
        </section>

        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>
            • Automated system simplifies carbon capture <br />
            • Energy-efficient and affordable solution <br />
            • Strong potential for industrial application
          </p>
        </section>
      </main>
    </motion.div>
  );
}
