export async function getServerSideProps({ res }) {
    const baseUrl = 'https://udemygo.com';
  
    // Example: Dynamic pages (fetch from your database or API)
    const pages = [
      '',
      '/courses',
      '/about',
      '/contact',
      '/course/react-for-beginners',
      '/course/nextjs-complete-guide'
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
          <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>
        `;
      })
      .join('')}
  </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default function Sitemap() {
    return null;
  }