// AdminDashboard.tsx
import ProtectedRoute from '../../app/components/ProtectedRoute';

const AdminDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    AdminDashboard
  </ProtectedRoute>
);

export default AdminDashboard;
