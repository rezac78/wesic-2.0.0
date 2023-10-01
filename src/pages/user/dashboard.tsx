// UserDashboard.tsx
import ProtectedRoute from '../../app/components/ProtectedRoute';

const UserDashboard = () => (
  <ProtectedRoute requiredRole="user">
    UserDashboard
  </ProtectedRoute>
);

export default UserDashboard;
