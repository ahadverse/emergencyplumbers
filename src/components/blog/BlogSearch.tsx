'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function BlogSearch() {
  const router = useRouter();
  const sp = useSearchParams();
  const [search, setSearch] = useState(sp.get('search') ?? '');
  const [sort, setSort] = useState(sp.get('sort') ?? 'newest');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/blog?search=${encodeURIComponent(search)}&sort=${sort}&page=1`);
  }

  return (
    <form className="blog-search-bar" onSubmit={submit}>
      <input
        className="blog-search-input"
        placeholder="Search articles…"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select className="blog-sort-select" value={sort} onChange={e => setSort(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Most Viewed</option>
      </select>
      <button type="submit" className="blog-page-btn">Search</button>
    </form>
  );
}
