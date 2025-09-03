import JobsPage from "../components/JobPage";

async function getJobs() {
  try {
    const res = await fetch("https://remotive.com/api/remote-jobs", {
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.jobs) ? data.jobs.slice(0, 30) : [];
  } catch {
    return [];
  }
}

export default async function Page() {
  const jobs = await getJobs();
  return <JobsPage jobs={jobs} />;
}