"use client";

import { useState, useMemo, useDeferredValue } from "react";
import Link from "next/link";

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function JobsPage({ jobs = [] }) {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const filtered = useMemo(() => {
    const query = deferredSearch.trim();
    if (!query) return jobs;

    const needle = normalize(query);
    return jobs.filter((job) => {
      const haystack = normalize(
        [
          job.title,
          job.company_name,
          job.category,
          job.location,
          job.salary,
          (job.tags || []).join(" "),
          job.description,
        ]
          .filter(Boolean)
          .join(" ")
      );
      return haystack.includes(needle);
    });
  }, [deferredSearch, jobs]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recruitment Listings</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-6"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.length > 0 ? (
          filtered.map((job) => (
            <Link
              key={job.id}
              href={`/Card/${job.id}`}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company_name}</p>
              <p className="text-gray-500">{job.category}</p>
              {job.salary && (
                <p className="text-blue-600 font-bold mt-2">{job.salary}</p>
              )}
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No jobs found...</p>
        )}
      </div>
    </div>
  );
}