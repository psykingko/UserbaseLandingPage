import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Using EmailJS to send the email
    emailjs
      .send(
        "service_c29eeun", // Your service ID from EmailJS
        "template_djvmz5s", // Your template ID from EmailJS
        formData, // Data to send in the email
        "tR1LhAiEvbeQbjh7n" // Your user ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Message sent successfully");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("Error sending email:", error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      className="max-w-4xl border border-opacity-10 mx-auto my-12 p-6 shadow-md rounded-lg"
      style={{ backgroundColor: "rgba(28, 36, 46, 0.9)" }}
    >
      <h2 className="text-3xl text-white font-bold text-center mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 text-black border rounded-md"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 text-black border rounded-md"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-2 text-black border rounded-md"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#2A1A5E] text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <div className="mt-4 text-center text-white">
          <p className="text-white">{status}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
