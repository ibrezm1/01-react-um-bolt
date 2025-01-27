import React from 'react';
import { User } from '../types';
import { Lock, Unlock, UserX, KeyRound } from 'lucide-react';

interface UserTableProps {
  users: User[];
  onDeprovision: (userId: string) => void;
  onUnlock: (userId: string) => void;
  onPasswordReset: (userId: string) => void;
}

export function UserTable({ users, onDeprovision, onUnlock, onPasswordReset }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${user.status === 'active' ? 'bg-green-100 text-green-800' : 
                    user.status === 'locked' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(user.lastLogin).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  {user.status !== 'deprovisioned' && (
                    <button
                      onClick={() => onDeprovision(user.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Deprovision User"
                    >
                      <UserX className="h-5 w-5" />
                    </button>
                  )}
                  {user.status === 'locked' && (
                    <button
                      onClick={() => onUnlock(user.id)}
                      className="text-yellow-600 hover:text-yellow-900"
                      title="Unlock User"
                    >
                      <Unlock className="h-5 w-5" />
                    </button>
                  )}
                  {user.status === 'active' && (
                    <button
                      onClick={() => onUnlock(user.id)}
                      className="text-yellow-600 hover:text-yellow-900"
                      title="Lock User"
                    >
                      <Lock className="h-5 w-5" />
                    </button>
                  )}
                  {user.status !== 'deprovisioned' && (
                    <button
                      onClick={() => onPasswordReset(user.id)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Reset Password"
                    >
                      <KeyRound className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}