const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$19/mo",
    features: ["1 Website", "5GB Storage", "Basic Support"],
  },
  {
    id: 2,
    name: "Pro",
    price: "$49/mo",
    features: ["5 Websites", "50GB Storage", "Priority Support"],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Websites", "200GB Storage", "24/7 Support"],
  },
];

const PricingTable = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition text-center"
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-2xl font-bold">{plan.price}</p>
            <ul className="mt-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-[#2A1A5E] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
