export const metadata = { title: 'New Blog Post — Emergency Plumbers Admin' };
import BlogForm from '@/components/admin/BlogForm';

export default function NewBlogPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-header"><h1>New Blog Post</h1></div>
      <BlogForm mode="create" />
    </div>
  );
}
