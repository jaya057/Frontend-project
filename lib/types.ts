export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export type CourseQueryResult = {
  courses: Course[];
  error: string | null;
};
