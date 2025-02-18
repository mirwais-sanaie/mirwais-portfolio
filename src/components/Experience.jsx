import { useRef } from "react";
import { EXPERIENCES } from "../constants";

function Experience() {
  const experienceRef = useRef(null);
  return (
    <section className="py-16" id="work" rel={experienceRef}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
          Experience
        </h2>
        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between md:flex-row"
            >
              <div className="w-full text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>
              <div className="md:w-3/4 w-full">
                <h3 className="mb-2 text-lg lg:text-2xl">
                  {exp.role} - {""}
                  <span className="bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>
                <p className="mb-4 text-sm lg:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
