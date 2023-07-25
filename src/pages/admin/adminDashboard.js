import React from 'react';
import UserTable from './userTable.js';
import PortfolioTable from './portfolioTable';
import CvTable from './cvTable.js';
import CvBulletPointTable from './cvBulletPoint.js';
import BulletPointTable from './bulletPoint.js';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserTable />
      <PortfolioTable />
      <CvTable />
      <CvBulletPointTable />
      <BulletPointTable />
    </div>
  );
};

export default AdminDashboard;