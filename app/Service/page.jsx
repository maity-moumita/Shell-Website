export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-12">
        At <span className="font-semibold">Recruiting Without Limits</span>, we provide 
        innovative solutions that empower companies and recruiters to connect with 
        top talent quickly and effectively.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🔍 Talent Acquisition</h2>
          <p className="text-gray-600">
            Streamlined recruitment with AI-powered tools that connect companies 
            to the right candidates faster.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">📢 Marketing Engine</h2>
          <p className="text-gray-600">
            Boost your hiring campaigns with our recruitment marketing strategies 
            designed to reach top talent globally.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🤝 Community Growth</h2>
          <p className="text-gray-600">
            Join our thriving recruiter community and unlock revenue sharing 
            opportunities while building connections.
          </p>
        </div>
      </div>
    </div>
  );
}
