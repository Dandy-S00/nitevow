type SeoRoute = { title: string; description: string; body: string; indexable?: boolean };
const site = "v3rya";
const publicRoutes: Record<string, SeoRoute> = {
  "/": { title: "v3rya — Private connections, thoughtfully held", description: "v3rya is a private, adult-only platform for thoughtful connections, local discovery, and unhurried conversation.", body: "<h1>v3rya — Private connections, thoughtfully held</h1><p>Discover people, plans, and possibilities at a pace that feels entirely your own.</p><p><a href=\"/browse\">Browse local connections</a> · <a href=\"/safety\">Safety information</a></p>" },
  "/browse": { title: "Browse local connections | v3rya", description: "Explore adult-only local listings and discover people, plans, and possibilities at your own pace.", body: "<h1>Browse local connections</h1><p>Explore adult-only local listings and find thoughtful ways to connect nearby.</p><p><a href=\"/\">Return to v3rya</a> · <a href=\"/safety\">Safety information</a></p>" },
  "/safety": { title: "Safety information | v3rya", description: "Learn how v3rya supports privacy, reporting, and thoughtful adult-only connections.", body: "<h1>Safety information</h1><p>v3rya supports privacy-minded adult connections with reporting and safety tools.</p><p><a href=\"/\">Return to v3rya</a> · <a href=\"/browse\">Browse local connections</a></p>" },
};
const privatePrefixes = ["/profile", "/post", "/inbox", "/report", "/studio"];
const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function injectRouteSeo(template: string, requestPath: string) {
  const path = requestPath.replace(/\/+$/, "") || "/"; const route = publicRoutes[path]; const privateRoute = privatePrefixes.some(prefix => path === prefix || path.startsWith(`${prefix}/`)); const meta = route ?? { title: site, description: "Private, adult-only connections and local discovery.", body: "<h1>v3rya</h1><p>Private, adult-only connections and local discovery.</p>", indexable: false };
  const robots = route && route.indexable !== false && !privateRoute ? "index,follow,max-image-preview:large" : "noindex,follow";
  const head = `<title>${escape(meta.title)}</title><meta name="description" content="${escape(meta.description)}" /><meta name="robots" content="${robots}" /><meta property="og:type" content="website" /><meta property="og:site_name" content="v3rya" /><meta property="og:title" content="${escape(meta.title)}" /><meta property="og:description" content="${escape(meta.description)}" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="${escape(meta.title)}" /><meta name="twitter:description" content="${escape(meta.description)}" /><script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"v3rya","description":"${escape(meta.description)}"}</script>`;
  return template.replace("<!--route-head-->", head).replace("<!--route-noscript-->", privateRoute ? "<p>This private area is available to signed-in members.</p>" : meta.body);
}
