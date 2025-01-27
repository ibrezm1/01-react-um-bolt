import { User } from '../types';

export const mockUsers: User[] = Array.from({ length: 50 }, (_, index) => ({
  id: `user-${index + 1}`,
  email: `user${index + 1}@example.com`,
  name: `User ${index + 1}`,
  status: index % 3 === 0 ? 'active' : index % 3 === 1 ? 'locked' : 'deprovisioned',
  lastLogin: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  createdAt: new Date(Date.now() - Math.random() * 20000000000).toISOString(),
}));