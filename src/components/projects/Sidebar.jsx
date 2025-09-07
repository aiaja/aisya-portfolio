import React, { useState } from "react";
import { AlignJustify } from "lucide-react";

// Menu item component for the sidebar
const MenuItem = ({ label, children, isActive, onToggle }) => (
  <li>
    <div
      className={`cursor-pointer font-medium px-4 py-2 rounded-md transition-all duration-300 ${
        isActive ? "bg-gray-600 text-white" : "hover:bg-gray-700"
      }`}
      onClick={onToggle}
    >
      {label}
    </div>
    {isActive && <ul className="pl-4">{children}</ul>}
  </li>
);

// Sidebar component
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Sidebar open state
  const [activeMenu, setActiveMenu] = useState(null);  // Active submenu state

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle submenus
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className={`relative h-screen ${
          isSidebarOpen ? "w-64" : "w-[5%]"
        }`}>
      {/* Hamburger menu to toggle the sidebar */}
      <div className="absolute top-4 left-4 z-50">
        <AlignJustify
          className={`cursor-pointer ${isSidebarOpen ? "text-white" : "text-gray-800"}`}
          size={24}
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar content */}
      <div
        className={`h-screen pt-10 bg-primary w-64 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <ul className="space-y-2">

            {/* Parent menu with collapsible submenu */}
            <MenuItem
              label="Website"
              isActive={activeMenu === 1}
              onToggle={() => toggleMenu(1)}
            >
              <MenuItem label="Frontend" />
              <MenuItem label="Backend" /> 
            </MenuItem>
            <MenuItem
              label="Machine Learning"
              isActive={activeMenu === 2}
              onToggle={() => toggleMenu(2)}
            ></MenuItem>
            <MenuItem
              label="Desktop App"
              isActive={activeMenu === 3}
              onToggle={() => toggleMenu(3)}
            ></MenuItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
