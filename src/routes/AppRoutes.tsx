import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard/index';
import MainLayout from '../layout/MainLayout';
import Events from '../pages/Events';
import Teams from '../pages/Teams';
import Registration from '../pages/Registrations';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Events" element={<Events />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="Registration" element={<Registration />} />
      </Route>
    </Routes>
  );
}