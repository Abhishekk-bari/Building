import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e3a7910f-11c1-4cde-8cad-bb205d24ad3a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-start">
        <div className="md:w-1/2 p-8">
          <h4 className="text-5xl font-bold mb-6 text-blue-600">Contact Us</h4>
          <p className="mb-4 flex items-center text-lg">
            <FaEnvelope className="mr-2 text-blue-500" />
            <strong>Email:</strong> support@jobtracker.com
          </p>
          <p className="mb-4 flex items-center text-lg">
            <FaPhone className="mr-2 text-blue-500" />
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="mb-4 flex items-center text-lg">
            <FaLocationArrow className="mr-2 text-blue-500" />
            <strong>Address:</strong> 123 Job Lane, Suite 100, Job City, ST
            12345
          </p>
        </div>

        <div className="md:w-1/3 p-4">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Get in Touch
          </h2>

          <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md">
            <label className="block mb-4">
              <span className="text-gray-700">Your Name</span>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Your Email</span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                rows="4"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              name="submit"
              className="mt-2 bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
