function ProjectCard({ title, description, image, github, demo }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-orange-500 hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-3">
          {title}
        </h2>

        <p className="text-gray-300 mb-6">
          {description}
        </p>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="border border-orange-500 px-4 py-2 rounded hover:bg-orange-500"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;