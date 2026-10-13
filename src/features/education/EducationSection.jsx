import SectionHeading from "../../components/ui/SectionHeading";
import { useState } from "react";
import { Code2, Terminal, GraduationCap, BookOpen, CalendarDays, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { education } from "./data/education";
import { reveal } from "../shared/reveal";

export default function EducationSection() {
  const [activeEducation, setActiveEducation] = useState(0);
  const edu = education[activeEducation];
  const eduJson = JSON.stringify(
    {
      qualification: edu.fullTitle,
      period: edu.year,
      score: edu.meta,
      focus: edu.focus,
    },
    null,
    2,
  );
  return (
        <section
          id="education"
          className="sw-section sw-block education-section"
        >
          <SectionHeading eyebrow="04. EDUCATION" title="My academic journey.">
              Formal learning that built the foundation for my problem-solving
              and software engineering skills.
            </SectionHeading>
          <div className="education-layout">
            <div className="timeline education-timeline">
              {education.map((e, i) => (
                <motion.button
                  type="button"
                  className={`timeline-item education-entry ${activeEducation === i ? "active" : ""}`}
                  key={e.id}
                  onClick={() => setActiveEducation(i)}
                  {...reveal}
                >
                  <span className="timeline-dot" />
                  <time className="ml-3 mt-1">{e.year}</time>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.detail}</p>
                    <b>{e.meta}</b>
                  </div>
                </motion.button>
              ))}
            </div>
            <motion.div
              className="academic-record glass liquid-card"
              {...reveal}
            >
              <div
                className="academic-tabs"
                role="tablist"
                aria-label="Education records"
              >
                {education.map((e, i) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeEducation === i}
                    className={activeEducation === i ? "active" : ""}
                    key={e.id}
                    onClick={() => setActiveEducation(i)}
                  >
                    <BookOpen size={13} />
                    {e.file}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={edu.id}
                  className="academic-content"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="academic-code">
                    <div className="code-label">
                      <Code2 size={14} /> education/{edu.file}
                    </div>
                    <pre>{eduJson}</pre>
                  </div>
                  <div className="academic-summary">
                    <span className="record-status">ACADEMIC RECORD</span>
                    <h3>{edu.fullTitle}</h3>
                    <p>{edu.detail}</p>
                    <div className="focus-chips">
                      {edu.focus.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </div>
                    <div className="record-metrics">
                      <div>
                        <CalendarDays />
                        <span>
                          <b>{edu.year}</b>
                          <small>Academic period</small>
                        </span>
                      </div>
                      <div>
                        <BarChart3 />
                        <span>
                          <b>{edu.meta}</b>
                          <small>Score</small>
                        </span>
                      </div>
                      <div>
                        <GraduationCap />
                        <span>
                          <b>{edu.title}</b>
                          <small>Qualification</small>
                        </span>
                      </div>
                    </div>
                    <div className="record-note">
                      <Terminal size={15} />
                      <span>foundation → practice → software engineering</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
  );
}
