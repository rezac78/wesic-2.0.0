import ProtectedRoute from '../../app/components/ProtectedRoute';
import AddSongs from '@/app/components/AdminDashboard/AddSongs';

const AddSongsDashboard = () => (
  <ProtectedRoute requiredRole="admin">
    <AddSongs/>
  </ProtectedRoute>
);

export default AddSongsDashboard;
