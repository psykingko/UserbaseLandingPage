import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    alert("Message sent successfully");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl border border-opacity-10 mx-auto my-12 p-6 shadow-md rounded-lg" style={{backgroundColor: "rgba(28, 36, 46, 0.9)"}}>
      <h2 className="text-3xl text-white font-bold text-center mb-6">Contact Us</h2>
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
    </div>
  );
};

export default ContactForm;
