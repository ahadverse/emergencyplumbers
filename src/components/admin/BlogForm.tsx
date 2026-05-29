'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = ['Drain Tips', 'Pipe Maintenance', 'Water Heater', 'Emergency Plumbing', 'General'];

interface BlogFormData {
  title: string; slug: string; excerpt: string; content: string;
  coverImage: string; category: string; tags: string; status: 'draft' | 'published';
}

interface Props {
  initialData?: Partial<BlogFormData & { _id: string }>;
  mode: 'create' | 'edit';
}

function slugify(t: string) {
  return t.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function BlogForm({ initialData, mode }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<BlogFormData>({
    title: '', slug: '', excerpt: '', content: '', coverImage: '',
    category: 'General', tags: '', status: 'draft', ...initialData,
    tags: Array.isArray(initialData?.tags) ? (initialData.tags as unknown as string[]).join(', ') : (initialData?.tags ?? ''),
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (mode === 'create' && form.title) {
      setForm(f => ({ ...f, slug: slugify(f.title) }));
    }
  }, [form.title, mode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) };
    try {
      const url = mode === 'create' ? '/api/blogs' : `/api/blogs/${initialData?._id}`;
      const res = await fetch(url, {
        method: mode === 'create' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error ?? 'Save failed'); }
      router.push('/admin/blogs');
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Save failed');
      setSaving(false);
    }
  }

  function set(field: keyof BlogFormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));
  }

  return (
    <form className="admin-blog-form" onSubmit={handleSubmit}>
      <div className="admin-form-row">
        <label>Title <input value={form.title} onChange={set('title')} required /></label>
        <label>Slug <input value={form.slug} onChange={set('slug')} required /></label>
      </div>
      <label>Excerpt <textarea value={form.excerpt} onChange={set('excerpt')} rows={3} required /></label>
      <label>Content (HTML) <textarea className="admin-content-area" value={form.content} onChange={set('content')} rows={18} required /></label>
      <div className="admin-form-row">
        <label>Cover Image URL <input value={form.coverImage} onChange={set('coverImage')} placeholder="https://..." /></label>
        <label>Category
          <select value={form.category} onChange={set('category')}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
      </div>
      <div className="admin-form-row">
        <label>Tags (comma-separated) <input value={form.tags} onChange={set('tags')} placeholder="drain tips, maintenance" /></label>
        <label>Status
          <select value={form.status} onChange={set('status')}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>
      {error && <p className="admin-error">{error}</p>}
      <div style={{ display: 'flex', gap: '12px' }}>
        <button type="submit" className="admin-btn-primary" disabled={saving}>
          {saving ? 'Saving…' : mode === 'create' ? 'Create Post' : 'Save Changes'}
        </button>
        <button type="button" className="admin-btn-secondary" onClick={() => router.push('/admin/blogs')}>
          Cancel
        </button>
      </div>
    </form>
  );
}
