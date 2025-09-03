import { notFound } from "next/navigation";

export default async function JobDetail({ params }) {
  const { id } = await params;

  const res = await fetch("https://remotive.com/api/remote-jobs", {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  if (!res.ok) notFound();

  const data = await res.json();
  const job = (data?.jobs || []).find((j) => String(j.id) === String(id));
  if (!job) notFound();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">Company: {job.company_name}</p>
      <p className="text-gray-500 mb-2">Category: {job.category}</p>
      {job.salary && <p className="text-blue-600 font-bold mb-4">{job.salary}</p>}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Job Description</h2>
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />
    </div>
  );
}