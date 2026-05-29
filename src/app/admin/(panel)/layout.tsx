import Sidebar from '@/components/admin/Sidebar';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Emergency Plumbers Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="admin-shell">
      <Sidebar />
      <main className="admin-main">{children}</main>
    </div>
  );
}
