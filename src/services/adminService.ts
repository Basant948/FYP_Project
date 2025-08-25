import api from './api';
import type{ Vacancy } from '../types';

export interface VacancyData {
  topic: string;
  qualifications: string;
  ageRange: string;
  requiredQualificationStream: string;
  applicationLink: string;
  examDate: string;
  images?: File[];
}

export interface VacancyUpdateData {
  vacancyId: string;
  updateTopic: string;
  applicationLink: string;
  images?: File[];
}

export const adminService = {
  postVacancy: (data: VacancyData) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'images' && data.images) {
        data.images.forEach(file => formData.append('Images', file));
      } else {
        formData.append(key, (data as any)[key]);
      }
    });
    return api.post('/AdminVacancy', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  postVacancyUpdate: (data: VacancyUpdateData) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'images' && data.images) {
        data.images.forEach(file => formData.append('Images', file));
      } else {
        formData.append(key, (data as any)[key]);
      }
    });
    return api.post('/AdminVacancy/post-vacancy-update', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  manageVacancies: () => api.get<Vacancy[]>('/AdminVacancy/manage'),
  
  getAllUsers: () => api.get('/AdminVacancy/all-users'),
  
  getTrackedUsers: () => api.get('/AdminVacancy/tracked-users'),
  
  createCategory: (data: { name: string }) => api.post('/admin/categories', data),
  
  deleteCategory: (id: string) => api.delete(`/admin/categories/${id}`),
  
  createTopic: (data: { name: string; categoryId: string }) => api.post('/admin/topics', data),
  
  deleteTopic: (id: string) => api.delete(`/admin/topics/${id}`),
  
uploadStudyMaterial: (data: { title: string; categoryId?: string; topicId?: string; file: File }) => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.categoryId && data.categoryId !== '' && data.categoryId !== 'undefined') {
        formData.append('categoryId', data.categoryId);
    }
    if (data.topicId && data.topicId !== '' && data.topicId !== 'undefined') {
        formData.append('topicId', data.topicId);
    }
    formData.append('file', data.file);
    return api.post('/admin/study-materials', formData);
},
  
  deleteStudyMaterial: (id: string) => api.delete(`/admin/study-materials/${id}`),
};