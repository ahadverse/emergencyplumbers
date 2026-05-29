export async function trackEvent(type: 'blog_view' | 'call_click', blogSlug?: string) {
  try {
    await fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, blogSlug, page: window.location.pathname }),
    });
  } catch {
    // silently ignore tracking errors
  }
}
