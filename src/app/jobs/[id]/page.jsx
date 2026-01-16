import { getSingleJob } from '@/actions/server/jobs';
import Link from 'next/link';
import { notFound } from "next/navigation";


const page = async ({ params }) => {
    const {id}= await params
    const job = await getSingleJob(id);

    if (!job) {
        notFound();
    }

    const {
        title,
        company,
        location,
        salary,
        jobType,
        experience,
        description,
        requirements,
        logo,
        postedDate,
    } = job;

    return (
        <section className="max-w-5xl mx-auto px-4 pb-10 pt-24">

            {/* Header */}
            <div className="flex items-center gap-6 mb-10">
                <img
                    src={logo}
                    alt={company}
                    className="w-20 h-20 object-contain border rounded"
                />

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {title}
                    </h1>
                    <p className="text-gray-600 mt-1">
                        {company} • {location}
                    </p>
                </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
                <p><strong>Job Type:</strong> {jobType}</p>
                <p><strong>Experience:</strong> {experience}</p>
                <p><strong>Salary:</strong> {salary}</p>
                <p><strong>Posted:</strong> {postedDate}</p>
            </div>

            {/* Description */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                    Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Requirements */}
            <div className="mb-10">
                <h2 className="text-xl font-semibold mb-2">
                    Requirements
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    {requirements}
                </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <Link
                    href="/login"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                    Apply Now
                </Link>

                <Link
                    href="/jobs"
                    className="px-6 py-3 border rounded-md hover:bg-gray-100 transition"
                >
                    Back to Jobs
                </Link>
            </div>
        </section>
    );
};

export default page;