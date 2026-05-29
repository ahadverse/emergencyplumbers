'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/admin/blogs', label: 'Blogs', icon: '📝' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        Emergency<span>Plumbers</span>
        <small>Admin</small>
      </div>
      <nav className="admin-sidebar-nav">
        {NAV.map(item => (
          <Link key={item.href} href={item.href}
            className={`admin-nav-item${pathname.startsWith(item.href) ? ' active' : ''}`}>
            <span className="admin-nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        <button className="admin-logout-btn" onClick={handleLogout}>↩ Logout</button>
      </nav>
    </aside>
  );
}
