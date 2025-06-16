export interface User {
  id: string;
  username: string;
  role: 'User' | 'Admin';
  fullName?: string;
  email?: string;
  gender?: string;
  minimumQualification?: string;
  qualificationStream?: string;
  dateOfBirth?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  loading: boolean;
}

export interface Vacancy {
  id: string;
  topic: string;
  postedDate: string;
  qualifications: string;
  ageRange: string;
  requiredQualificationStream: string;
  applicationLink: string;
  examDate?: string;
  tracked?: boolean;
  imageCount?: number;
}

export interface StudyMaterial {
  id: string;
  title: string;
  categoryName: string;
  topicName: string;
  categoryId: string;
  topicId: string;
  filePath: string;
  uploadedDate: string;
  uploadedBy: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Topic {
  id: string;
  name: string;
  categoryId: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

export interface RecommendedVacancyDto {
  Id: string;
  Topic: string;
  PostedDate: string;
  Qualifications: string;
  AgeRange: string;
  RequiredQualificationStream: string;
  ApplicationLink: string;
  ExamDate?: string;
  PostedBy: string;
  ImagePaths: string[];
}