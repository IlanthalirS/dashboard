import { FaHome, FaUser, FaBriefcase, FaMoneyBillWave, FaBell } from 'react-icons/fa';

const Sidebar = () => (
  <div className="w-20 bg-blue-500 text-white min-h-screen flex flex-col items-center py-6">
    <div className="mb-10">
      <FaBell className="text-4xl" />
    </div>
    <nav className="w-full">
      <ul className="space-y-8">
        <li className="p-4 flex items-center justify-center cursor-pointer hover:bg-blue-400">
          <FaHome className="text-2xl" />
        </li>
        <li className="p-4 flex items-center justify-center cursor-pointer hover:bg-blue-400">
          <FaUser className="text-2xl" />
        </li>
        <li className="p-4 flex items-center justify-center cursor-pointer hover:bg-blue-400">
          <FaBriefcase className="text-2xl" />
        </li>
        <li className="p-4 flex items-center justify-center cursor-pointer hover:bg-blue-400">
          <FaMoneyBillWave className="text-2xl" />
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
