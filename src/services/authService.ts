import api from './api';

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
  userType: 'User' | 'Admin';
}

export const authService = {
  login: (data: LoginData) => api.post<LoginResponse>('/Auth/login', data),
  register: (data: RegisterData) => api.post('/Auth/register', data),
  changePassword: (data: { oldPassword: string; newPassword: string }) => 
    api.post('/Auth/change-password', data),
};