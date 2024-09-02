import { FaMoneyCheckAlt, FaReceipt, FaFileInvoiceDollar, FaExchangeAlt, FaPen } from 'react-icons/fa';

const MainContent = () => (
  <div className="flex-1 p-6 bg-gray-50">
    {/* Summary Cards */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 shadow-md rounded flex items-center">
        <FaExchangeAlt className="text-3xl text-blue-500 mr-4" />
        <div>
          <h2 className="text-lg font-bold">Transaction</h2>
          <p className="text-gray-600">₹5,00,000</p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded flex items-center">
        <FaMoneyCheckAlt className="text-3xl text-green-500 mr-4" />
        <div>
          <h2 className="text-lg font-bold">Amount Received</h2>
          <p className="text-gray-600">₹5,00,000</p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded flex items-center">
        <FaMoneyCheckAlt className="text-3xl text-red-500 mr-4" />
        <div>
          <h2 className="text-lg font-bold">Amount Paid</h2>
          <p className="text-gray-600">₹-1,00,000</p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded flex items-center">
        <FaFileInvoiceDollar className="text-3xl text-indigo-500 mr-4" />
        <div>
          <h2 className="text-lg font-bold">Invoices Generated</h2>
          <p className="text-gray-600">16</p>
        </div>
      </div>
    </div>

    {/* Reminders Section */}
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Reminders</h2>
      <ul className="flex flex-wrap">
        <li className="text-blue-600 cursor-pointer mr-4">15 Review on 11 AM</li>
        <li className="text-blue-600 cursor-pointer mr-4">16 Dashboard Page</li>
        <li className="text-blue-600 cursor-pointer mr-4">17 Meeting with Client</li>
        <li className="text-blue-600 cursor-pointer mr-4">18 Phase 1 Review</li>
        <li className="text-blue-600 cursor-pointer mr-4">19 Meeting with MNC</li>
        <li className="text-blue-600 cursor-pointer mr-4">20 Submit report on 10 AM</li>
        <li className="text-blue-600 cursor-pointer mr-4">21 Review Project</li>
        <li className="text-blue-600 cursor-pointer">22 Core Functionality</li>
      </ul>
    </div>

    {/* Notes and Schedule Section */}
    <div className="flex mb-6">
      {/* Notes Section */}
      <div className="notes grid grid-cols-3 gap-4 mr-4">
        <h2 className="text-xl font-bold col-span-3">Notes</h2>
        <div className="note bg-yellow-200 border-yellow-300">
          <p>Shree - email update</p>
          <FaPen className="icon" />
        </div>
        <div className="note bg-pink-200 border-pink-300">
          <p>Ilan - appointment at 2 PM</p>
          <FaPen className="icon" />
        </div>
        <div className="note bg-blue-200 border-blue-300">
          <p>Review the new project proposal</p>
          <FaPen className="icon" />
        </div>
        <div className="note bg-yellow-300 border-yellow-400">
          <p>Check the client data</p>
          <FaPen className="icon" />
        </div>
        <div className="note bg-green-200 border-green-300">
          <p>Manage client information</p>
          <FaPen className="icon" />
        </div>
        <div className="note bg-pink-300 border-pink-400">
          <p>Meeting with financiers</p>
          <FaPen className="icon" />
        </div>
      </div>

      {/* Schedule Section */}
      <div className="schedule bg-white p-4 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Schedule</h2>
        <div className="calendar bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-blue-600">August 2024</h3>
          {/* Calendar layout */}
          <div className="grid grid-cols-7 gap-2 mt-4">
            {/* Example days */}
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            <span className="day">29</span><span className="day">30</span><span className="day">31</span><span className="day">1</span><span className="day">2</span><span className="day">3</span><span className="day">4</span>
            {/* Continue filling out the days of the month */}
          </div>
        </div>
        <div className="add-task mt-4">
          <input type="text" placeholder="Title" className="mb-2 p-2 border rounded w-full" />
          <textarea placeholder="Notes" className="mb-2 p-2 border rounded w-full"></textarea>
          <button className="bg-blue-500 text-white py-2 rounded w-full">+ Add Task</button>
        </div>
      </div>
    </div>
  </div>
);

export default MainContent;
