import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bw58qsc",
        "template_rfifn9d",
        form.current,
        "1_67Tc02YjAW9OlLw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("uh oh email not sent");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Shoot me an email by submitting the form below
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="from_name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="email"
          placeholder="Email"
          name="from_email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="12"
          placeholder="Message"
        />
        <button
          type="submit"
          className="text-white border-2 mt-2 hover:bg-pink-600 px-4 py-3 my-0 mx-auto flex items-center"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
