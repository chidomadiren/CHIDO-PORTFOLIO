import profile from "../assets/chichi.jpg";

function About() {
  const strengths = [
    "Problem Solving",
    "Quick Learner",
    "Team Player",
    "Creative Thinking",
    "Adaptability",
    "Attention to Detail",
  ];

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500 mb-16">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-14 items-center">

       
          <div className="flex justify-center">
            <img
              src={profile}
              alt="chichi"
              className="w-80 h-80 rounded-2xl object-cover border-4 border-orange-500 shadow-xl"
            />
          </div>


          <div>

            <h2 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-orange-500">Chido</span>
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              I am a passionate Software Engineer
              with a strong interest in building
              modern, responsive, and user-friendly
              web applications.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              Throughout my learning journey, I have gained
              experience with HTML, CSS, JavaScript, React,
              Tailwind CSS, TypeScript, Git, GitHub, Python,
              and REST APIs.
            </p>

            <p className="text-gray-300 leading-8">
              My goal is to become a professional Full stack Software Engineer
              who creates innovative solutions that solve real-world
              problems and positively impact people's lives.
            </p>

          </div>

        </div>

        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
            My Strengths
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-orange-500 rounded-xl p-6 text-center hover:bg-orange-500 hover:text-black transition duration-300"
              >
                <h3 className="text-xl font-semibold">
                  {strength}
                </h3>
              </div>
            ))}

          </div>

        </div>

      
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
            Education
          </h2>

          <div className="bg-gray-900 border border-orange-500 rounded-xl p-8">

            <h3 className="text-2xl font-bold">
              Uncommon.org Bootcamp
            </h3>

            <p className="text-orange-500 mt-2">
              Software Development
            </p>

            <p className="text-gray-400 mt-2">
              2026
            </p>

            <p className="text-gray-300 mt-5 leading-7">
              Learned software engineering fundamentals including
              HTML, CSS, JavaScript, React, TypeScript, Python,
              Git, GitHub, APIs, responsive design, and collaborative
              development.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;