import { NavLink } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiGroupLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import ProfilePicture from '../../assets/ProfilePicture.png';
import Logo from '../../assets/logo.png';
import './styles.css';

function Sidebar() {

  const getNavbarClass = (isActive: boolean) => {
    return `default-navbar ${isActive ? "checked-navbar" : "hover-navbar"}`;
  };

  return (
    <div className="w-[210px] h-screen bg-white border-r border-black/10 flex flex-col items-center">
      <img src={Logo} alt="Logo da empresa" className="w-[161px] h-[25px] my-[30px]"/>
      <h1 className="w-[158px] text-[9px] text-[#A3A3A3] font-extrabold">MENU</h1>
      <div>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) => getNavbarClass(isActive)}
        >
          <RxDashboard size={15}/>
          <p className="default-navbar-label">Dashboard</p>
        </NavLink>

        <NavLink
          to="/Events"
          className={({ isActive }) => getNavbarClass(isActive)}
        >
          <LuCalendarDays size={15}/>
          <p className="default-navbar-label">Eventos</p>
        </NavLink>

        <NavLink
          to="/Teams"
          className={({ isActive }) => getNavbarClass(isActive)}
        >
          <HiOutlineUserGroup size={15}/>
          <p className="default-navbar-label">Equipes</p>
        </NavLink>

        <NavLink
          to="/Registration"
          className={({ isActive }) => getNavbarClass(isActive)}
        >
          <RiGroupLine size={15}/>
          <p className="default-navbar-label">Inscrições</p>
        </NavLink>
      </div>

      <div className="flex flex-col items-center justify-center absolute bottom-0 w-[210px] h-[182px]">
        <div className="absolute top-[-8px] w-[160px] h-[1px] bg-black/10"/>

        <div className="w-[180px] flex items-center mb-[5px]">
          <div className="p-[2px] border-[2px] border-[#CC6237] rounded-[19px] bg-white inline-block">
            <img src={ProfilePicture} alt="Imagem do perfil" className="w-[40px] h-[40px] object-cover rounded-[15px]"/>
          </div>
          
          <div className="ml-[10px]">
            <h1 className="font-medium text-black text-[14px]">Kaique Steck</h1>
            <p className="font-normal text-black/50 text-[11px] ">Administrador</p>
          </div>
        </div>

        <NavLink
          to="/UpdateProfile"
          className={({ isActive }) => getNavbarClass(isActive)}
        >
          <IoPersonOutline size={15}/>
          <p className="default-navbar-label">Alterar dados</p>
        </NavLink>
        
        <NavLink
          to="/"
          className={({ isActive }) => getNavbarClass(isActive)}
        >
          <FaPowerOff size={15}/>
          <p className="default-navbar-label">Sair</p>
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;
