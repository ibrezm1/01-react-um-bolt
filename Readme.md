# User Management System

A modern, responsive user management application built with React, TypeScript, and Tailwind CSS.

![User Management Dashboard](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000)

## Features

- 🔐 **Authentication**
  - Secure login system
  - Session management
  - Protected routes

- 👥 **User Management**
  - View all users in a paginated table
  - Create new users
  - Deprovision existing users
  - Lock/unlock user accounts
  - Initiate password resets

- 🔍 **Search & Filter**
  - Real-time search functionality
  - Filter users by name or email
  - Instant results updates

- 📱 **Responsive Design**
  - Modern, clean interface
  - Mobile-friendly layout
  - Optimized for all screen sizes

## Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Vite** - Next generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Login

- Use any email from the mock users (e.g., `user1@example.com`)
- Any password will work in the demo version

### Managing Users

1. **Search Users**
   - Use the search bar to filter users by name or email
   - Results update in real-time

2. **Create User**
   - Click the "New User" button
   - Fill in the required information
   - Submit the form

3. **User Actions**
   - Deprovision: Click the user icon with X
   - Lock/Unlock: Click the lock/unlock icon
   - Reset Password: Click the key icon

4. **Pagination**
   - Navigate through users using the pagination controls
   - Shows 10 users per page

## Project Structure

```
src/
├── components/        # React components
│   ├── CreateUserModal.tsx
│   ├── LoginForm.tsx
│   ├── Pagination.tsx
│   ├── SearchBar.tsx
│   └── UserTable.tsx
├── data/             # Mock data
│   └── mockUsers.ts
├── types/            # TypeScript types
│   └── index.ts
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI components inspired by [Tailwind UI](https://tailwindui.com/)