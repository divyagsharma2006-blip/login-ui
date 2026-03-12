import React from 'react';

const AdminPage = () => {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F4E6] to-[#E5E7EB] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#111827]">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-[#1A73E8] hover:bg-[#1557B0] text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-[#1A73E8]">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Active Sessions</h3>
              <p className="text-3xl font-bold text-[#22C58E]">567</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Pending Tasks</h3>
              <p className="text-3xl font-bold text-[#111827]">89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;