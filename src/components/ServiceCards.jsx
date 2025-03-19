const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build responsive and scalable web applications.",
  },
  {
    id: 2,
    title: "API Integration",
    description: "Seamless API integration for smooth data exchange.",
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Optimized web pages for fast loading and better UX.",
  },
];

const ServiceCards = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
