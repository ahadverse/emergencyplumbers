import { getSessionFromCookies } from '@/lib/auth';
import { redirect } from 'next/navigation';
import connectDB from '@/lib/db/connect';
import BlogPost from '@/lib/db/models/BlogPost';
import AnalyticsEvent from '@/lib/db/models/AnalyticsEvent';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getSummary() {
  await connectDB();
  const now = new Date();
  const day7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const day30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [totalBlogs, publishedBlogs, draftBlogs, views7, views30, calls7, calls30, topBlogs] =
    await Promise.all([
      BlogPost.countDocuments(),
      BlogPost.countDocuments({ status: 'published' }),
      BlogPost.countDocuments({ status: 'draft' }),
      AnalyticsEvent.countDocuments({ type: 'blog_view', timestamp: { $gte: day7 } }),
      AnalyticsEvent.countDocuments({ type: 'blog_view', timestamp: { $gte: day30 } }),
      AnalyticsEvent.countDocuments({ type: 'call_click', timestamp: { $gte: day7 } }),
      AnalyticsEvent.countDocuments({ type: 'call_click', timestamp: { $gte: day30 } }),
      BlogPost.find({ status: 'published' }).sort({ viewCount: -1 }).limit(5).select('title slug viewCount publishedAt').lean(),
    ]);

  return { totalBlogs, publishedBlogs, draftBlogs, views7, views30, calls7, calls30, topBlogs };
}

export default async function DashboardPage() {
  const session = await getSessionFromCookies();
  if (!session) redirect('/admin/login');

  let summary: Awaited<ReturnType<typeof getSummary>> | null = null;
  let dbError = false;
  try { summary = await getSummary(); } catch { dbError = true; }

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, <strong>{session.username}</strong> · {today}</p>
        </div>
        <Link href="/admin/blogs/new" className="admin-btn-primary">+ New Post</Link>
      </div>

      {dbError && <div className="admin-notice">Could not connect to MongoDB. Set <strong>MONGODB_URI</strong> in .env.local and restart.</div>}

      {summary && (
        <>
          <div className="admin-stats-section-label">Content Overview</div>
          <div className="admin-stats-grid" style={{ marginBottom: '24px' }}>
            {[
              { icon: '📝', color: 'blue', num: summary.totalBlogs, label: 'Total Posts' },
              { icon: '✅', color: 'green', num: summary.publishedBlogs, label: 'Published' },
              { icon: '📋', color: 'amber', num: summary.draftBlogs, label: 'Drafts' },
              { icon: '👁️', color: 'purple', num: summary.views7, label: 'Blog Views — 7 days' },
            ].map(({ icon, color, num, label }) => (
              <div key={label} className="admin-stat-card">
                <div className={`admin-stat-icon-wrap ${color}`}>{icon}</div>
                <div className="admin-stat-num">{num}</div>
                <div className="admin-stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="admin-stats-section-label">Analytics</div>
          <div className="admin-stats-grid-3" style={{ marginBottom: '28px' }}>
            {[
              { icon: '📈', color: 'purple', num: summary.views30, label: 'Blog Views — 30 days' },
              { icon: '📞', color: 'green', num: summary.calls7, label: 'Call Clicks — 7 days' },
              { icon: '📞', color: 'rose', num: summary.calls30, label: 'Call Clicks — 30 days' },
            ].map(({ icon, color, num, label }) => (
              <div key={label} className="admin-stat-card">
                <div className={`admin-stat-icon-wrap ${color}`}>{icon}</div>
                <div className="admin-stat-num">{num}</div>
                <div className="admin-stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="admin-dashboard-grid">
            <div className="admin-section">
              <div className="admin-section-header">
                <h2 className="admin-section-title">Top Posts by Views</h2>
                <Link href="/admin/blogs" className="admin-link">Manage all →</Link>
              </div>
              {summary.topBlogs.length > 0 ? (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead><tr><th>#</th><th>Title</th><th>Views</th><th>Published</th><th></th></tr></thead>
                    <tbody>
                      {summary.topBlogs.map((post, i) => {
                        const p = post as { _id: unknown; title: string; slug: string; viewCount: number; publishedAt?: string };
                        return (
                          <tr key={String(p._id)}>
                            <td style={{ color: 'var(--text-muted)', fontWeight: 700, width: '36px' }}>{i + 1}</td>
                            <td className="admin-table-title">{p.title}</td>
                            <td style={{ fontWeight: 700, color: 'var(--navy)' }}>{p.viewCount}</td>
                            <td className="admin-table-date">{p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</td>
                            <td><a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" className="admin-link">View ↗</a></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="admin-table-wrap"><p className="admin-table-empty">No published posts yet.</p></div>
              )}
            </div>

            <div>
              <div className="admin-quick-actions">
                <h3>Quick Actions</h3>
                <Link href="/admin/blogs/new" className="admin-quick-action-btn"><span>✏️</span> Write New Post</Link>
                <Link href="/admin/blogs" className="admin-quick-action-btn"><span>📝</span> Manage All Posts</Link>
                <a href="/" target="_blank" rel="noreferrer" className="admin-quick-action-btn"><span>🌐</span> View Website</a>
                <a href="/blog" target="_blank" rel="noreferrer" className="admin-quick-action-btn"><span>📖</span> View Blog</a>
                <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="admin-quick-action-btn"><span>🗺️</span> View Sitemap</a>
              </div>

              <div style={{ marginTop: '16px', background: 'white', borderRadius: '12px', padding: '20px 22px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #e8edf5' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>At a Glance</div>
                {[
                  { label: 'Publish rate', value: summary.totalBlogs > 0 ? `${Math.round((summary.publishedBlogs / summary.totalBlogs) * 100)}%` : '—' },
                  { label: 'Avg views/post', value: summary.publishedBlogs > 0 ? Math.round(summary.views30 / summary.publishedBlogs) : 0 },
                  { label: 'Calls this month', value: summary.calls30 },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f4f8', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
