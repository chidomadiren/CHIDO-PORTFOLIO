import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500 mb-4">
          My Skills
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;