import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

interface ProtectedRouteProps {
  role: string;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, redirectTo }) => {
  const isAuthenticated = useAppSelector(state => state.userSlice.authUser.user !== null);
  const userRole = useAppSelector(state => state.userSlice.roleUser.role);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (userRole !== role && userRole !== 'admin') {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;



{/* <ProtectedRoute role="admin" />
<ProtectedRoute role="patient" />
<ProtectedRoute role="doctor" /> */}