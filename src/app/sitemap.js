export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hjemmeside-laege.vercel.app';

  const routes = ['', '#services', '#about', '#speciallægeerklæringer', '#contact'].map((path) => ({
    url: `${siteUrl}/${path}`.replace(/#.*$/, ''),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));

  return routes;
}
