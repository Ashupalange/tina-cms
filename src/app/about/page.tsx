// SCHEMA FIELDS FOR THIS PAGE
// -----------------------------------------------------------------------
// headline            string (textarea)
// originImage         image
// originStory         string (textarea)
// pillars             object[] — { title, description }
// -----------------------------------------------------------------------

import client from "../../../tina/__generated__/client";
import AboutClient from "./about-client";

export default async function AboutPage() {
  const settingsRes = await client.queries.settings({
    relativePath: "global.json",
  });

  const pageRes = await client.queries.about({
    relativePath: "about.md",
  });

  return <AboutClient props={pageRes} settings={settingsRes.data.settings} />;
}
