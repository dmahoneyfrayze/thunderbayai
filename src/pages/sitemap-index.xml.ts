const urls = [
  '/',
  '/services',
  '/about',
  '/start-here',
  '/weekly-digest',
  '/free-ai-audit',
  '/workflow-map',
  '/faq',
  '/contact',
  '/thunder-bay-ai-automation',
  '/thunder-bay-crm-systems',
  '/thunder-bay-local-seo',
  '/thunder-bay-website-systems',
  '/thunder-bay-lead-generation-systems',
  '/contractor-crm-automation-thunder-bay',
  '/restaurant-marketing-automation-thunder-bay',
  '/ai-opportunity-audit',
  '/website-audit-thunder-bay',
  '/missed-lead-calculator',
  '/ai-for-contractors',
  '/ai-for-restaurants',
  '/ai-for-home-services',
  '/ai-for-automotive',
  '/ai-for-real-estate',
  '/ai-for-nwo-businesses',
  '/news',
  '/guides',
  '/tools'
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>https://thunderbayai.com${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
