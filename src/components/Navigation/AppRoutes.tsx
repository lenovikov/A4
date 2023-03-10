import { Route, Routes } from 'react-router-dom';
import Basket from '../../pages/Basket/Basket';
import Dashboard from '../../pages/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default AppRoutes;
