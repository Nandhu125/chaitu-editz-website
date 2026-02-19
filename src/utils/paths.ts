/**
 * Utility to handle base URL paths in Astro
 * When base: '/new' is set, absolute paths must be prefixed with /new
 */

/**
 * Prepend the base URL to an absolute path if needed
 * @param path - The image/asset path (e.g., "/works/thumbnails/foo.jpg")
 * @returns The full path with base included (e.g., "/new/works/thumbnails/foo.jpg")
 */
export function withBase(path: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // If path is already relative or empty, return as-is
  if (!path || path.startsWith('http')) {
    return path;
  }
  
  // If path doesn't start with /, it's relative - prepend base and /
  if (!path.startsWith('/')) {
    return baseUrl.endsWith('/') 
      ? baseUrl + path 
      : baseUrl + '/' + path;
  }
  
  // Path starts with / (absolute)
  // If base is just '/', return path as-is
  if (baseUrl === '/') {
    return path;
  }
  
  // Otherwise prepend base to the path
  return baseUrl.replace(/\/$/, '') + path;
}
