// SCHEMA FIELDS FOR THIS PAGE (Cafedelightt)
// -----------------------------------------------------------------------
// title               string
// hero                object { tagline, ctaPrimary, ctaSecondary, backgroundImage }
// about               object { headline, story, image }
// menu                object { headline, items[] }
// experience          object { headline, description, gallery[] }
// testimonials        object { headline, list[] }
// location            object { headline, address, hours, whatsappNumber }
// -----------------------------------------------------------------------

import client from "../../tina/__generated__/client";
import HomeClient from "./home-client";

export default async function HomePage() {
  const settingsRes = await client.queries.settings({
    relativePath: "global.json",
  });

  const pageRes = await client.queries.home({
    relativePath: "index.md",
  });

  return <HomeClient props={pageRes} settings={settingsRes.data.settings} />;
}
