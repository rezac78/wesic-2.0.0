import Dashboard from '@/app/components/AdminDashboard/Dashboard';
import ProtectedRoute from '../../app/components/ProtectedRoute';

const AdminDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    <Dashboard/>
  </ProtectedRoute>
);

export default AdminDashboard;
