// ProtectedRoute.tsx
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const router = useRouter();
  
  // Ensure we're in the browser
  const isBrowser = typeof window !== 'undefined';

  const user:any = isBrowser ? JSON.parse(localStorage.getItem('userData') || '{}') : {};

  useEffect(() => {
    if (isBrowser && user.roles !== requiredRole) {
      router.push('/login');
    }
  }, [user, router, requiredRole]);

  if (isBrowser && user.roles !== requiredRole) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
