import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BottomBar from "../components/BottomBar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      
      <div className="hidden min-[560px]:flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <div className="flex-1 max-[560px]:flex hidden flex-col bg-gray-100 overflow-y-auto">
        <Outlet />
        <BottomBar />
      </div>
    </div>
  );
}
