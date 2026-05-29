export const metadata = { title: 'Edit Blog Post — Emergency Plumbers Admin' };
import { notFound } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';
import connectDB from '@/lib/db/connect';
import BlogPost from '@/lib/db/models/BlogPost';
import { getSessionFromCookies } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getSessionFromCookies();
  if (!session) redirect('/admin/login');

  const { id } = await params;
  await connectDB();
  const post = await BlogPost.findById(id).lean();
  if (!post) notFound();

  const p = post as Record<string, unknown>;
  const initialData = {
    _id: String(p._id),
    title: String(p.title ?? ''),
    slug: String(p.slug ?? ''),
    excerpt: String(p.excerpt ?? ''),
    content: String(p.content ?? ''),
    coverImage: String(p.coverImage ?? ''),
    category: String(p.category ?? ''),
    tags: (p.tags as string[]) ?? [],
    status: (p.status as 'draft' | 'published') ?? 'draft',
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header"><h1>Edit Post</h1></div>
      <BlogForm mode="edit" initialData={initialData} />
    </div>
  );
}
