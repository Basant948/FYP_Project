import api from './api';
import type { Category, Topic, StudyMaterial } from '../types';

export interface StudyMaterialParams {
  categoryId?: string;
  topicId?: string;
}

export interface TestQuestionDto {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface TestSubmissionDto {
  studyMaterialId: string;
  answers: number[];
}

export const studyService = {
  getCategories: () => api.get<Category[]>('/user/categories'),
  
  getTopics: (categoryId: string) => api.get<Topic[]>(`/user/categories/${categoryId}/topics`),
  
  getStudyMaterials: (params: StudyMaterialParams) => 
    api.get<StudyMaterial[]>('/user/study-materials', { params }),
  
  downloadStudyMaterial: (id: string) => 
    api.get(`/user/study-materials/${id}/download`, { responseType: 'blob' }),
  
  generateTest: (id: string) => api.get<TestQuestionDto[]>(`/user/study-materials/${id}/test`),
  
  submitTest: (data: TestSubmissionDto) => api.post('/user/study-materials/test/submit', data),
};