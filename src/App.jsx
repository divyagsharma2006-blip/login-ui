import React from 'react';
import LoginPage from './login_page';
import AdminPage from './admin_page';

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  if (path === '/admin') {
    return <AdminPage />;
  }

  // Default to login page (also handles '/' and '/login')
  return <LoginPage />;
}

export default App;