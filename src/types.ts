export interface User {
  id: string;
  email: string;
  name: string;
  status: 'active' | 'deprovisioned' | 'locked';
  lastLogin: string;
  createdAt: string;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}