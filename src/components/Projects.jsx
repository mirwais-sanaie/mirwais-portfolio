import { useRef } from "react";
import { PROJECTS } from "../constants";

function Projects() {
  const projectRef = useRef(null);
  return (
    <section className="pt-22" id="projects" rel={projectRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col w-full p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="grow overflow-hidden rounded-lg border border-purple-500/20">
                <a
                  href={project.link}
                  target="_blank"
                  rel="norepenner noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4">
                    <strong>Teach Stack : </strong>
                    <ul className="list-disc">
                      {project.techStack.map((tech, index) => (
                        <li
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                          key={index}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
