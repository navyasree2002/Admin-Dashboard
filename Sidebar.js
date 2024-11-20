const Sidebar = ({ setActiveSection }) => (
  <aside className="w-1/4 bg-gray-200 p-4">
    <ul>
      <li className="p-2 cursor-pointer" onClick={() => setActiveSection('userManagement')}>
        User Management
      </li>
      <li className="p-2 cursor-pointer" onClick={() => setActiveSection('contentModeration')}>
        Content Moderation
      </li>
      <li className="p-2 cursor-pointer" onClick={() => setActiveSection('analytics')}>
        Analytics
      </li>
    </ul>
  </aside>
);

export default Sidebar;
