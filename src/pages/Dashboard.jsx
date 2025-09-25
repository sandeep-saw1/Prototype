import React, { useState } from "react";

export default function ResponsiveDashboard() {
  const [userType, setUserType] = useState("patient"); // 'patient' or 'practitioner'
  const [activeTab, setActiveTab] = useState("Overview");

  const stats = {
    patient: [
      { title: "Upcoming Appointments", value: 6 },
      { title: "Active Treatments", value: 3 },
      { title: "Messages", value: 12 },
      { title: "Wellness Score", value: "78%" },
    ],
    practitioner: [
      { title: "Today Appointments", value: 8 },
      { title: "Patients", value: 42 },
      { title: "Pending Reports", value: 4 },
      { title: "Avg. Satisfaction", value: "4.6/5" },
    ],
  };

  const tabs = ["Overview", "Records", "Schedule", "Messages"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-3 lg:col-span-2 bg-white rounded-2xl p-5 shadow-lg">
            <h2 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
              Navigation
            </h2>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-green-500 to-teal-400 text-white shadow-md"
                      : "text-gray-600 hover:bg-green-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            {/* Role toggle */}
            <div className="mt-6 text-xs text-gray-500">
              <p>
                Role:{" "}
                <span className="font-medium text-gray-800">{userType}</span>
              </p>
              <p className="mt-2">
                Dashboard adapts for the selected role — try toggling below.
              </p>
              <div className="flex items-center bg-gray-100 rounded-full p-1 mt-3">
                <button
                  onClick={() => setUserType("patient")}
                  className={`px-3 py-1 rounded-full text-xs transition ${
                    userType === "patient"
                      ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow"
                      : "text-gray-600 hover:bg-green-50"
                  }`}
                >
                  Patient
                </button>
                <button
                  onClick={() => setUserType("practitioner")}
                  className={`px-3 py-1 rounded-full text-xs transition ${
                    userType === "practitioner"
                      ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow"
                      : "text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  Practitioner
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="col-span-1 lg:col-span-10">
            {/* Tabs */}
            <div className="bg-white rounded-2xl p-5 shadow-lg mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                  {activeTab}
                </h3>
                <div className="mt-3 sm:mt-0 flex items-center space-x-2">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="px-3 py-2 border rounded-md text-sm w-full sm:w-72 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Stats cards */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats[userType].map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border border-green-200 shadow hover:shadow-md transition"
                  >
                    <p className="text-xs text-gray-600">{s.title}</p>
                    <p className="text-2xl font-extrabold text-green-700 mt-2">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Recent Activity
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex justify-between items-start hover:bg-gray-50 p-2 rounded-lg">
                      <div>
                        <div className="text-gray-800 font-medium">
                          Consultation booked
                        </div>
                        <div className="text-xs text-gray-500">
                          by Rajesh on Sep 20, 2025
                        </div>
                      </div>
                      <div className="text-sm text-green-600">2h ago</div>
                    </li>
                    <li className="flex justify-between items-start hover:bg-gray-50 p-2 rounded-lg">
                      <div>
                        <div className="text-gray-800 font-medium">
                          Basti therapy completed
                        </div>
                        <div className="text-xs text-gray-500">
                          by Meera on Sep 18, 2025
                        </div>
                      </div>
                      <div className="text-sm text-green-600">2d ago</div>
                    </li>
                    <li className="flex justify-between items-start hover:bg-gray-50 p-2 rounded-lg">
                      <div>
                        <div className="text-gray-800 font-medium">
                          New patient signed up
                        </div>
                        <div className="text-xs text-gray-500">
                          Sonia — Sep 17, 2025
                        </div>
                      </div>
                      <div className="text-sm text-green-600">3d ago</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Appointments (next 7 days)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="text-xs text-gray-500 uppercase bg-gray-50">
                          <th className="p-3">Patient</th>
                          <th className="p-3">Therapy</th>
                          <th className="p-3">When</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t hover:bg-gray-50">
                          <td className="p-3">Rajesh</td>
                          <td className="p-3">Virechana</td>
                          <td className="p-3">Sep 26, 2025 — 10:00 AM</td>
                          <td className="p-3">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t hover:bg-gray-50">
                          <td className="p-3">Sonia</td>
                          <td className="p-3">Basti</td>
                          <td className="p-3">Sep 27, 2025 — 2:00 PM</td>
                          <td className="p-3">
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t hover:bg-gray-50">
                          <td className="p-3">Amit</td>
                          <td className="p-3">Nasya</td>
                          <td className="p-3">Sep 28, 2025 — 11:30 AM</td>
                          <td className="p-3">
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                              Scheduled
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <aside className="space-y-6">
                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <button className="w-full text-left px-3 py-2 rounded-md border hover:bg-green-50 hover:border-green-400 transition">
                      Create Appointment
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md border hover:bg-green-50 hover:border-green-400 transition">
                      Add Patient Note
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-md border hover:bg-green-50 hover:border-green-400 transition">
                      Send Message
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Notifications</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="text-xs text-green-600">
                      ✅ No urgent notifications
                    </li>
                    <li className="text-xs text-blue-600">
                      ⚡ All systems operational
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>

      <footer className="mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-green-600">Ayursutra</span> — Built
        with 💚
      </footer>
    </div>
  );
}
