import {
  Briefcase,
  ShieldCheck,
  LayoutDashboard,
  Layers,
  Cpu,
} from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-20">

        {/* HEADER */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold text-indigo-600 bg-indigo-100">
            <Briefcase className="w-4 h-4" />
            About Platform
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900">
            Building a Simple &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Modern Job Platform
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A clean and user-friendly job listing platform built with modern
            web technologies to help users explore opportunities effortlessly.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* WHAT WE DO */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
              What We Do
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This application allows users to browse job listings, view job
              details, and explore opportunities without creating an account.
              Certain actions like adding new jobs are protected using a simple
              authentication system.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The project is developed as part of a job task using Next.js App
              Router, focusing on clean UI, simple logic, and real-world use
              cases.
            </p>
          </div>

          {/* FEATURES */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              Key Features
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-indigo-500 mt-0.5" />
                Public landing page with multiple sections
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-indigo-500 mt-0.5" />
                Mock authentication using cookies
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-indigo-500 mt-0.5" />
                Public job listing and job details pages
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-indigo-500 mt-0.5" />
                Protected page for adding new jobs
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-indigo-500 mt-0.5" />
                Fully responsive design
              </li>
            </ul>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center flex justify-center items-center gap-2">
            <Cpu className="w-7 h-7 text-indigo-600" />
            Technology Stack
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Next.js 15 / 16",
              "React",
              "Tailwind CSS",
              "Express.js",
            ].map((tech) => (
              <div
                key={tech}
                className="text-center py-6 rounded-2xl border border-gray-200 font-semibold text-gray-700
                           hover:border-indigo-300 hover:bg-indigo-50 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
