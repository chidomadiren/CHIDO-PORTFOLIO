import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-orange-500 py-8 mt-20">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Chido
        </h2>

        <p className="text-gray-400 mb-6">
          Building responsive and modern web applications with React.
        </p>

        <div className="flex justify-center gap-8 text-3xl mb-6">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:madirensabuneti@gmail.com"
            className="hover:text-orange-500"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500">
          © {new Date().getFullYear()} Chido. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;