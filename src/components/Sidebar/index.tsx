import { NavLink } from "react-router-dom";
import { MdDashboard, MdEvent, MdGroup, MdAppRegistration } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-[210px] h-screen bg-white border-r border-black/10 flex flex-col">
      
      <div>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `mb-6 ${isActive ? "text-[#CC6237]" : "text-gray-500"}`
          }
        >
          <MdDashboard size={28} />
        </NavLink>

        <NavLink
          to="/Events"
          className={({ isActive }) =>
            `mb-6 ${isActive ? "text-[#CC6237]" : "text-gray-500"}`
          }
        >
          <MdEvent size={28} />
        </NavLink>

        <NavLink
          to="/Teams"
          className={({ isActive }) =>
            `mb-6 ${isActive ? "text-[#CC6237]" : "text-gray-500"}`
          }
        >
          <MdGroup size={28} />
        </NavLink>

        <NavLink
          to="/Registration"
          className={({ isActive }) =>
            `mb-6 ${isActive ? "text-[#CC6237]" : "text-gray-500"}`
          }
        >
          <MdAppRegistration size={28} />
        </NavLink>
      </div>

      <div>
        
      </div>

    </div>
  );
}

export default Sidebar;
