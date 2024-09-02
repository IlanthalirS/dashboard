import { FaBell, FaCaretDown } from 'react-icons/fa';

const Navbar = () => (
  <div className="bg-white shadow-md flex items-center justify-between p-4">
    <div className="flex items-center">
      <FaBell className="text-gray-600 text-xl mr-4" />
      <div className="border-r-2 border-gray-200 mx-4"></div>
      <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-2" />
      <div className="flex flex-col">
        <span className="font-bold">Abielan</span>
        <span className="text-gray-500">Accountant</span>
      </div>
      <FaCaretDown className="text-gray-600 text-xl ml-4" />
    </div>
  </div>
);

export default Navbar;
