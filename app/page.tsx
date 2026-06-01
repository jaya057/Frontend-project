import { Dashboard } from "@/components/dashboard";
import { getCourses } from "@/lib/courses";

export default async function Home() {
  const result = await getCourses();

  return <Dashboard courses={result.courses} error={result.error} />;
}
