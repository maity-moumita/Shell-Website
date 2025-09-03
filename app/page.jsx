"use client";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-purple-100 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Recruiting Without Limits
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">Speed and Scale</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We’re building a new model for recruitment one that combines revenue
          sharing, a marketing engine, a competitive broker community, and an
          AI driven learning platform.  
          Recruitment rewritten for the modern era.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "🤝 Revenue Sharing",
            desc: "A fair, transparent model where every recruiter benefits."
          },
          {
            title: "🚀 Marketing Engine",
            desc: "Promote opportunities faster with AI-powered campaigns."
          },
          {
            title: "🌐 Broker Community",
            desc: "Collaborate with top recruiters worldwide and grow together."
          },
          {
            title: "🧠 AI Learning",
            desc: "Smart insights help recruiters match talent efficiently."
          },
          {
            title: "📊 Analytics",
            desc: "Track hiring performance with real-time dashboards."
          },
          {
            title: "💼 Career Growth",
            desc: "Helping recruiters and candidates unlock new opportunities."
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Redefine Recruitment?
        </h2>
        <p className="text-gray-600 mb-6">
          Join us and experience the future of hiring with speed, scale, and fairness.
        </p>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
          Join Now
        </button>
      </section>
    </div>
  );
}
