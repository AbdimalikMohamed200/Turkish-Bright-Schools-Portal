export interface Program {
  id: string;
  name: string;
  ageGroup: string;
  grades: string;
  description: string;
  image: string;
  badgeColor: string;
  curriculumOverview: string;
  coreSubjects: string[];
  languages: {
    name: string;
    description: string;
  }[];
  keyFeatures: string[];
  weeklyHours: number;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  iconName: 'school' | 'groups' | 'workspace_premium' | 'award' | 'book';
  subtext: string;
}

export interface EnrollmentFormData {
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | '';
  programLevel: 'kindergarten' | 'primary' | 'high_school' | '';
  targetGrade: string;
  previousSchool: string;
  parentFullName: string;
  parentPhone: string;
  parentEmail: string;
  district: string;
  campusPreference: 'hodan' | 'wadajir';
  requestedTour: boolean;
  notes: string;
}

export interface CampusFacility {
  title: string;
  description: string;
  tag: string;
  icon: string;
}
