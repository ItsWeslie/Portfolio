import { motion } from "framer-motion";
import chairman from "/src/assets/chairman.jpg";
import campusPresident from "/src/assets/campusPresident.jpeg";
import gateways from "/src/assets/gateways.jpg";

const achievements = [
  {
    title: "Chairman",
    subtitle: "Served as Chairman for state level technical symposium",
    description:
      "Led a team of 150+ members and successfully organized a state level technical symposium. ",
    stats: ["🎖️ Leadership"],
    image: chairman,
  },
  {
    title: "Campus President",
    subtitle:
      "Served as Campus President for YUCI - Youth United Council of India",
    description:
      "Worked on campus initiatives, organized events, and encouraged youth engagement and development activities.",
    stats: ["🎖️ Leadership"],
    image: campusPresident,
  },
  {
    title: "Overall Champion",
    subtitle:
      "Secured overall championship in national level technical symposium",
    description:
      "I participated in a National Level Technical Symposium conducted by Christ University, Bangalore, where I won first place in the Technical Quiz and secured runner-up position in the Treasure Hunt event",
    stats: [`💪 Strong technical knowledge`, "🤝 Team Player"],
    image: gateways,
  },
];

export default function PersonalAchievements() {
  return (
    <section id="achievements" className="relative bg-gradient-to-b from-[#0a0f1c] via-[#1a0f2e] to-[#2e1065] text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>

      <div className="text-center mb-24 px-6">
        <p className="text-yellow-400 tracking-[0.4em] text-sm">
          MISSION LOG 06
        </p>
        <h2 className="text-4xl xl:text-6xl font-bold mt-4">Achievements</h2>
      </div>

      <div className="space-y-32 max-w-6xl mx-auto px-6">
        {achievements.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-25 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group backdrop-blur-xl bg-white/5 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>

                <p className="text-md font-normal mb-4 text-gray-300">
                  {item.subtitle}
                </p>

                <p className="text-gray-400 mb-6">{item.description}</p>

                <div className="flex flex-wrap gap-4">
                  {item.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
