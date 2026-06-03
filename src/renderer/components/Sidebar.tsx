/**
 * Sidebar Navigation Component
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiFileText,
  FiTrendingUp,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import './Sidebar.css';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome, path: '/' },
    { id: 'projects', label: 'Projects', icon: FiFileText, path: '/projects' },
    { id: 'accounting', label: 'Accounting', icon: FiFileText, path: '/accounting' },
    { id: 'profitability', label: 'Profitability', icon: FiTrendingUp, path: '/profitability' },
    { id: 'settings', label: 'Settings', icon: FiSettings, path: '/settings' },
  ];

  const handleNavigate = (id: string, path: string) => {
    setCurrentPage(id);
    navigate(path);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle Sidebar"
        >
          <FiMenu />
        </button>
        {isOpen && <h1 className="sidebar-title">Tanzania PM</h1>}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavigate(item.id, item.path)}
              title={item.label}
            >
              <IconComponent className="nav-icon" />
              {isOpen && <span className="nav-label">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        {isOpen && <p className="version">v1.0.0</p>}
      </div>
    </aside>
  );
};

export default Sidebar;
