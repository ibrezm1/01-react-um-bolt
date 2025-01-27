import React, { useState, useMemo } from 'react';
import { Users, UserPlus } from 'lucide-react';
import { UserTable } from './components/UserTable';
import { Pagination } from './components/Pagination';
import { LoginForm } from './components/LoginForm';
import { CreateUserModal } from './components/CreateUserModal';
import { SearchBar } from './components/SearchBar';
import { mockUsers } from './data/mockUsers';
import { User, AuthState } from './types';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would validate credentials against an API
    const user = users.find(u => u.email === email);
    if (user) {
      setAuth({
        isAuthenticated: true,
        user,
      });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleCreateUser = (name: string, email: string) => {
    const newUser: User = {
      id: `user-${users.length + 1}`,
      email,
      name,
      status: 'active',
      lastLogin: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    setUsers([...users, newUser]);
  };

  const handleDeprovision = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'deprovisioned' } : user
    ));
  };

  const handleUnlock = (userId: string) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const newStatus = user.status === 'locked' ? 'active' : 'locked';
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  const handlePasswordReset = (userId: string) => {
    // In a real application, this would trigger a password reset flow
    alert(`Password reset initiated for user ${userId}`);
  };

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    const lowercasedSearch = searchTerm.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(lowercasedSearch) ||
      user.email.toLowerCase().includes(lowercasedSearch)
    );
  }, [users, searchTerm]);

  if (!auth.isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Total Users: {filteredUsers.length}
              </div>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                New User
              </button>
            </div>
          </div>

          <div className="mb-6">
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          </div>

          <UserTable
            users={currentUsers}
            onDeprovision={handleDeprovision}
            onUnlock={handleUnlock}
            onPasswordReset={handlePasswordReset}
          />

          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredUsers.length}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateUser={handleCreateUser}
      />
    </div>
  );
}

export default App;