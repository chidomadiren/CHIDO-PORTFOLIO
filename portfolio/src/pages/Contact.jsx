import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500 mb-10">
          Contact Me
        </h1>

        <div className="bg-gray-900 p-8 rounded-xl border border-orange-500">

          <h2 className="text-2xl mb-4">Get In Touch</h2>

          <p className="mb-2">
            📞 <strong>Phone:</strong> +263 77 6610 675
          </p>

          <p className="mb-2">
            📧 <strong>Email:</strong> madirensabuneti@gmail.com
          </p>

          <p className="mb-6">
            📍 Harare, Zimbabwe
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-orange-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;