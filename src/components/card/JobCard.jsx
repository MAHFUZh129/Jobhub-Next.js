import Link from "next/link";

export default function JobCard({ job }) {
  const {
    _id,
    title,
    company,
    location,
    salary,
    jobType,
    logo,
  } = job;

  return (
    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 object-contain border rounded"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>📍 {location}</p>
        <p>💼 {jobType}</p>
        <p className="font-semibold text-indigo-600">{salary}</p>
      </div>

      {/* Action */}
      <Link
        href={`/jobs/${_id}`}
        className="mt-4 btn btn-primary  text-sm text-white font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
