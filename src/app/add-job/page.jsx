"use client";

import { addJobs } from "@/actions/server/jobs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  FileText,
} from "lucide-react";

export default function AddJobPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const job = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      salary: form.salary.value,
      jobType: form.jobType.value,
      description: form.description.value,
    };

    const res = await addJobs(job);

    if (res.success) {
      toast.success("Job added successfully!");
      router.push("/jobs");
    } else {
      toast.error("Failed to add job");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-24 pb-10 px-4">
      
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
            <Briefcase className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Add New Job
          </h2>
          <p className="text-gray-500 mt-1">
            Fill in the details to publish a new job opening
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <InputField
            icon={Briefcase}
            name="title"
            placeholder="Job Title"
          />

          <InputField
            icon={Building2}
            name="company"
            placeholder="Company Name"
          />

          <InputField
            icon={MapPin}
            name="location"
            placeholder="Location"
          />

          <InputField
            icon={DollarSign}
            name="salary"
            placeholder="Salary (e.g. 50k – 70k)"
          />

          {/* job type */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="jobType"
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
            </select>
          </div>

          {/* description */}
          <div className="relative">
            <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="description"
              rows="4"
              placeholder="Job Description"
              required
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold
                       hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
          >
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
}

/* reusable Input */
const InputField = ({ icon: Icon, name, placeholder }) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      name={name}
      required
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);
