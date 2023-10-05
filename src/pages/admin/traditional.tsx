// AdminDashboard.tsx
import ProtectedRoute from '../../app/components/ProtectedRoute';
import Transition from '@/app/components/AdminDashboard/Traditional';

const AdminDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    <Transition/>
  </ProtectedRoute>
);

export default AdminDashboard;
