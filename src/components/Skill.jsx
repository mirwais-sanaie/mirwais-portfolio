import { useRef } from "react";
import { SKILLS } from "../constants";

function Skill() {
  const SkillRef = useRef(null);
  return (
    <section className="py-16" id="skills" rel={SkillRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4">
          {SKILLS.map((skill, i) => {
            return (
              <div key={i} className="flex text-center flex-col items-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="mb-2 text-lg font-medium lg:text-xl">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;
