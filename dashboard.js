import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserManagement from '../components/UserManagement';
import Analytics from '../components/Analytics';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('userManagement');

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar setActiveSection={setActiveSection} />
        <main className="w-3/4 p-4">
          {activeSection === 'userManagement' && <UserManagement />}
          {activeSection === 'analytics' && <Analytics />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
