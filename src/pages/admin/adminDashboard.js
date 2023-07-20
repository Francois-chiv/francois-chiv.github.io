import React from 'react';
import UserTable from './userTable.js';
import PortfolioTable from './portfolioTable';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserTable />
      <PortfolioTable />
    </div>
  );
};

export default AdminDashboard;