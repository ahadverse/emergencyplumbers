/**
 * Returns the correct base URL for server-side API fetches.
 * - Local dev: uses NEXT_LOCAL_API_URL (localhost:3000)
 * - Production: uses NEXT_PUBLIC_BASE_URL (emergencyplumbers.live)
 */
export const API_BASE =
  process.env.NEXT_LOCAL_API_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  'http://localhost:3000';
