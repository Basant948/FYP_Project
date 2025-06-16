import api from './api';
import type { User, Vacancy, PaginatedResponse } from '../types';

export interface RecommendationParams {
  startDate?: string;
  endDate?: string;
}

export interface VacancyParams {
  page?: number;
  pageSize?: number;
}

export const userService = {
  getProfile: () => api.get<User>('/User/profile'),
  updateProfile: (data: Partial<User>) => api.put('/User/profile', data),
  getRecommendations: (params: RecommendationParams) => 
    api.get<{ vacancies: Vacancy[] }>('/User/recommendations', { params }),
  rateVacancy: (data: { vacancyId: string; rating: number }) => 
    api.post('/User/rate-vacancy', data),
  getAllVacancies: (params: VacancyParams) => 
    api.get<PaginatedResponse<Vacancy>>('/User/all-vacancies', { params }),
  toggleTrackVacancy: (vacancyId: string) => 
    api.post(`/User/track/${vacancyId}`),
  getTrackedVacancies: () => 
    api.get<Array<{ vacancyId: string; vacancyDetails: Vacancy }>>('/User/tracked-vacancies'),
};