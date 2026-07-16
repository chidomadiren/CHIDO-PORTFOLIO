import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import profile from "../assets/chichiee.jpg";

function Home() {
  const titles = [
    "Software Developer",
    "React Developer",
    "Frontend Developer",
    "Problem Solver",
    "Software Engineer"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

return (
  <>
   
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

       
        <div>
          <p className="text-orange-500 text-xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Chido
          </h1>

          <h2 className="text-3xl text-orange-500 font-semibold mb-6">
            {titles[currentTitle]}
          </h2>

          <p className="text-gray-300 leading-8 mb-8">
            I'm a passionate Software Engineer.
            I enjoy building modern,
            responsive, and user-friendly web applications
            using React, JavaScript, Tailwind CSS,
            and other modern technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
                View Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-orange-500 hover:bg-orange-500 hover:text-black px-6 py-3 rounded-lg">
                Contact Me
              </button>
            </Link>

            <a
              href="/resume.pdf"
              download
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              Download CV
            </a>
          </div>
        </div>

        
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Chichiee"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-orang-500"
          />
        </div>

      </div>
    </section>

   
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        <div className="bg-gray-900 p-8 rounded-xl text-center border border-orange-500">
          <h2 className="text-5xl font-bold text-orange-500">10+</h2>
          <p className="mt-3">Projects Completed</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl text-center border border-orange-500">
          <h2 className="text-5xl font-bold text-orange-500">8+</h2>
          <p className="mt-3">Technologies Learned</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl text-center border border-orange-500">
          <h2 className="text-5xl font-bold text-orange-500">2026</h2>
          <p className="mt-3">Bootcamp Graduate</p>
        </div>

      </div>
    </section>
  </>
);
}
export default Home;
 