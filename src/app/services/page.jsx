import {
  FaBriefcase,
  FaInfoCircle,
  FaLock,
  FaPlusCircle,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide simple and effective services to connect job seekers
            with the right opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaBriefcase className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Job Listings
            </h3>
            <p className="mt-3 text-gray-600">
              Browse a wide range of job opportunities from trusted companies.
            </p>
            <button className="mt-5 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaInfoCircle className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Job Details
            </h3>
            <p className="mt-3 text-gray-600">
              View complete job descriptions, salary, and company info.
            </p>
            <button className="mt-5 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaLock className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Secure Access
            </h3>
            <p className="mt-3 text-gray-600">
              Protected access for adding and managing job posts.
            </p>
            <button className="mt-5 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaPlusCircle className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Add New Jobs
            </h3>
            <p className="mt-3 text-gray-600">
              Easily post new job opportunities with a simple form.
            </p>
            <button className="mt-5 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Responsive Design
            </h3>
            <p className="mt-3 text-gray-600">
              Smooth experience on mobile, tablet, and desktop.
            </p>
            <button className="mt-5 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaRocket className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Fast Performance
            </h3>
            <p className="mt-3 text-gray-600">
              Optimized with Next.js for fast loading and navigation.
            </p>
            <button className="mt-5 text-blue-600 font-semibold hover:underline">
              View Details →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
