const EXTERNAL_DATA_URL = "https://www.droot.in";
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.droot.in/</loc>
     </url>
     <url>
       <loc>https://www.droot.in/about</loc>
     </url>
     ${posts
       .map((item) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${item}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap([
    "work",
    "privacy-policy",
    "contact",
    "about",
    "ideas",
    "services/design",
    "services/development",
    "services/data-and-ai",
    "services/strategy",
  ]);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
