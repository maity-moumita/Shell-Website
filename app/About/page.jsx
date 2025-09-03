// app/about/page.jsx
export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">Recruiting Without Limits</span>
        where speed meets scale. We are building a new model for recruitment, one that 
        combines <span className="font-medium">revenue sharing</span>, a powerful 
        <span className="font-medium"> marketing engine</span>, a thriving 
        <span className="font-medium"> broker community</span>, and an 
        <span className="font-medium"> AI driven learning platform</span>.  
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our mission is simple: to help businesses connect with the best talent faster 
        while empowering recruiters with tools, technology, and opportunities to grow. 
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🚀 Innovation</h2>
          <p className="text-gray-600">
            We are redefining recruitment with cutting-edge technology and AI-driven 
            insights to streamline the hiring process.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🤝 Collaboration</h2>
          <p className="text-gray-600">
            Our platform thrives on community. Recruiters, companies, and job seekers 
            come together to build lasting opportunities.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Us</h2>
        <p className="text-gray-700 mb-6">
          Be part of the future of recruitment. Together, let’s make hiring smarter, 
          faster, and limitless.
        </p>
        <a
          href="/Card"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Opportunities
        </a>
      </div>
    </div>
  );
}
