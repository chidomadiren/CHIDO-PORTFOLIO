import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [category, setCategory] = useState("All");

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">

      <h1 className="text-5xl font-bold text-center text-orange-500 mb-10">
        My Projects
      </h1>

     
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "React", "JavaScript"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              category === item
                ? "bg-orange-500 text-black"
                : "bg-gray-800 hover:bg-orange-500 hover:text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;