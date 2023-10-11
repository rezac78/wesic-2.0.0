import ProtectedRoute from '../../app/components/ProtectedRoute';
import Transition from '@/app/components/AdminDashboard/Traditional';

const AddSongsDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    <Transition/>
  </ProtectedRoute>
);

export default AddSongsDashboard;
