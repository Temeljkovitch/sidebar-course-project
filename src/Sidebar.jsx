import { useState } from "react";
import logo from "./logo.svg";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  const [sidebarLinks, setSidebarLinks] = useState(links);
  const [socialLinks, setSocialLinks] = useState(social);

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {sidebarLinks.map((sidebarLink) => {
          const { id, url, text, icon } = sidebarLink;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {socialLinks.map((socialLink) => {
          const { id, url, icon } = socialLink;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
