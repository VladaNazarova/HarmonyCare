import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ authUser, redirectTo }) {
  if (!authUser) {
    return <Navigate to={redirectTo} replace/>
  }
  return <Outlet />
}
