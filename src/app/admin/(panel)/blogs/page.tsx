'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DeleteModal from '@/components/admin/DeleteModal';

interface Post { _id: string; title: string; slug: string; status: string; publishedAt?: string; viewCount: number; category: string; }

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<Post | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ search, status, page: String(page), limit: '15' });
    const res = await fetch(`/api/blogs?${params}`);
    const data = await res.json();
    setPosts(data.posts ?? []); setTotal(data.total ?? 0); setPages(data.pages ?? 1);
    setLoading(false);
  }, [search, status, page]);

  useEffect(() => { load(); }, [load]);

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    await fetch(`/api/blogs/${deleteTarget._id}`, { method: 'DELETE' });
    setDeleteTarget(null); setDeleting(false); load();
  }

  return (
    <div className="admin-page">
      {deleteTarget && <DeleteModal title={deleteTarget.title} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} loading={deleting} />}
      <div className="admin-page-header">
        <div><h1>Blogs</h1><p>{total} total posts</p></div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/admin/blogs/new" className="admin-btn-primary">+ New Post</Link>
          <button className="admin-btn-secondary" onClick={async () => { await fetch('/api/blogs/auto-generate', { method: 'POST' }); load(); }}>
            ✨ Auto-Generate
          </button>
        </div>
      </div>
      <div className="admin-filters">
        <input className="admin-search" placeholder="Search posts…" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} />
        <select className="admin-select" value={status} onChange={e => { setStatus(e.target.value); setPage(1); }}>
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead><tr><th>Title</th><th>Category</th><th>Status</th><th>Views</th><th>Published</th><th>Actions</th></tr></thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} className="admin-table-empty">Loading…</td></tr>
            ) : posts.length === 0 ? (
              <tr><td colSpan={6} className="admin-table-empty">No posts found.</td></tr>
            ) : posts.map(post => (
              <tr key={post._id}>
                <td className="admin-table-title">{post.title}</td>
                <td><span className="admin-badge">{post.category}</span></td>
                <td><span className={`admin-status ${post.status}`}>{post.status}</span></td>
                <td>{post.viewCount}</td>
                <td className="admin-table-date">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</td>
                <td>
                  <div className="admin-actions">
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer" className="admin-action-btn" title="View">👁</a>
                    <Link href={`/admin/blogs/${post._id}/edit`} className="admin-action-btn" title="Edit">✏️</Link>
                    <button className="admin-action-btn danger" onClick={() => setDeleteTarget(post)} title="Delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pages > 1 && (
        <div className="admin-pagination">
          <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Previous</button>
          <span>Page {page} of {pages}</span>
          <button onClick={() => setPage(p => p + 1)} disabled={page === pages}>Next</button>
        </div>
      )}
    </div>
  );
}
