import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course, CourseQueryResult } from "@/lib/types";

export async function getCourses(): Promise<CourseQueryResult> {
  noStore();

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("courses")
      .select("id,title,progress,icon_name,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return {
        courses: [],
        error: error.message
      };
    }

    return {
      courses: (data ?? []) as Course[],
      error: null
    };
  } catch (error) {
    return {
      courses: [],
      error: error instanceof Error ? error.message : "Unable to connect to Supabase."
    };
  }
}
