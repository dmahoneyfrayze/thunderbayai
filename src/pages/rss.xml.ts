const items = [
  {
    title: 'Claude Sonnet 4.6: what it means for Thunder Bay operators and agencies',
    link: 'https://thunderbayai.com/news/claude-sonnet-4-6-what-it-means-for-thunder-bay-operators-and-agencies',
    description: 'Why Anthropic\'s Claude Sonnet 4.6 matters for local operators, agencies, and AI workflow builders in Thunder Bay.'
  },
  {
    title: 'NVIDIA GTC 2026: physical AI moves closer to real deployment for Northwestern Ontario',
    link: 'https://thunderbayai.com/news/nvidia-gtc-2026-physical-ai-moves-closer-to-real-deployment-for-northwestern-ontario',
    description: 'Why NVIDIA\'s latest physical AI push matters for industrial operators, contractors, and logistics-heavy businesses in Northwestern Ontario.'
  },
  {
    title: "Google's Gemini API spend caps: what they mean for Thunder Bay business builders",
    link: 'https://thunderbayai.com/news/google-gemini-api-spend-caps-what-they-mean-for-thunder-bay-business-builders',
    description: 'How Google\'s new Gemini API billing controls lower the risk of practical AI pilots for local businesses.'
  },
  {
    title: "NVIDIA's physical AI data factory: why it matters for Thunder Bay robotics and operations",
    link: 'https://thunderbayai.com/news/nvidia-physical-ai-data-factory-why-it-matters-for-thunder-bay-robotics-and-operations',
    description: 'A local operations take on NVIDIA\'s latest physical AI infrastructure announcement.'
  },
  {
    title: 'How AI missed-call text back could help Thunder Bay contractors stop losing leads',
    link: 'https://thunderbayai.com/news/how-ai-missed-call-text-back-could-help-thunder-bay-contractors-stop-losing-leads',
    description: 'Local impact article on missed-call recovery for contractors.'
  },
  {
    title: 'How to automate missed-call text back for a Thunder Bay contractor',
    link: 'https://thunderbayai.com/guides/how-to-automate-missed-call-text-back-thunder-bay',
    description: 'Implementation guide for a contractor missed-call workflow.'
  },
  {
    title: 'New AI receptionist tools: what they mean for local service businesses',
    link: 'https://thunderbayai.com/news/new-ai-receptionist-tools-what-they-mean-for-local-service-businesses',
    description: 'Short-form alert on AI receptionist tooling.'
  }
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>ThunderBayAI</title>\n    <link>https://thunderbayai.com/</link>\n    <description>Local AI intelligence for Thunder Bay and Northwestern Ontario businesses.</description>\n${items.map((item) => `    <item>\n      <title>${item.title}</title>\n      <link>${item.link}</link>\n      <description>${item.description}</description>\n    </item>`).join('\n')}\n  </channel>\n</rss>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
