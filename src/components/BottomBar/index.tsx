import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiGroupLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosPower } from "react-icons/io";

function BottomBar() {
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center px-3 py-2 rounded ${
      isActive ? "checked-navbar text-[#CC6237]" : "hover-navbar text-black"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[60px] bg-white border-t border-black/10 flex items-center justify-between px-4 z-50">
      <div className="flex flex-1 justify-between">
        <NavLink to="/Dashboard" className={navItemClass}>
          <RxDashboard size={22} />
        </NavLink>
        <NavLink to="/Events" className={navItemClass}>
          <LuCalendarDays size={22} />
        </NavLink>
        <NavLink to="/Teams" className={navItemClass}>
          <HiOutlineUserGroup size={22} />
        </NavLink>
        <NavLink to="/Registration" className={navItemClass}>
          <RiGroupLine size={22} />
        </NavLink>
      </div>

      <div className="flex items-center ml-[10px]">
        <div className="w-[1px] h-[34px] bg-black/10 mr-[10px]" />
        <NavLink to="/UpdateProfile" className={navItemClass}>
          <IoPersonOutline size={22} />
        </NavLink>
        <NavLink to="/" className={navItemClass}>
          <IoIosPower size={26} />
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomBar;
