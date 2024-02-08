

export default function ProtectedRoute({ authUser, redirectTo }) {
  if (!authUser) {
    return <Navigate to={redirectTo} replace/>
  }
  return <Outlet />
}
