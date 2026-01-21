import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  const members = [
    {
      name: "Tsion Ayana",
      dept: "Civil Engineering",
      icon: "🏗️",
      desc: "Designed the structural framework and site layout of the project."
    },
    {
      name: "Misker Woldesilas",
      dept: "Electrical and Computer Engineering",
      icon: "⚡",
      desc: "Designed and implemented power distribution, control circuits, sensors, and actuators for system automation."
    },
    {
      name: "Chernet Thomas",
      dept: "Electrical and Computer Engineering",
      icon: "⚡",
      desc: "Designed and implemented power distribution, control circuits, sensors, and actuators for system automation."
    },
    {
      name: "Paul Bereket",
      dept: "Software Engineering",
      icon: "💻",
      desc: "Developed the system’s monitoring and control software."
    },
    {
      name: "Mahlet Solomon",
      dept: "Environmental Engineering",
      icon: "🌿",
      desc: "Assessed carbon capture efficiency and evaluated environmental impact."
    },
    {
      name: "Yoseph Sisay",
      dept: "Electromechanical Engineering",
      icon: "⚙️",
      desc: "Integrated electrical and mechanical systems and designed automation controls."
    },
    {
      name: "Hana Amanuel",
      dept: "Mining Engineering",
      icon: "⛏️",
      desc: "Planned subsurface layout and drilling design for CO₂ transport or storage wells."
    },
    {
      name: "Dagem Teferi",
      dept: "Architecture",
      icon: "🏛️",
      desc: "Designed the physical layout and structure to blend with its surroundings."
    }
  ];

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="about-title">Meet the Team</h1>

      <p className="about-intro">
        Our multidisciplinary team combines expertise from different engineering
        fields to create an efficient and innovative carbon capture solution.
      </p>

      <div className="team-grid">
        {members.map((m, index) => (
          <motion.div
            key={index}
            className="member-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="member-icon">{m.icon}</div>
            <h2>{m.name}</h2>
            <h4>{m.dept}</h4>
            <p>{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
