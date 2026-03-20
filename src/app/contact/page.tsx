// SCHEMA FIELDS FOR THIS PAGE
// -----------------------------------------------------------------------
// headline            string
// subheadline         string (textarea)
// email               string
// instagram           string
// phone               string
// -----------------------------------------------------------------------

import client from "../../../tina/__generated__/client";
import ContactClient from "./contact-client";

export default async function ContactPage() {
  const settingsRes = await client.queries.settings({
    relativePath: "global.json",
  });

  const pageRes = await client.queries.contact({
    relativePath: "contact.md",
  });

  return <ContactClient props={pageRes} settings={settingsRes.data.settings} />;
}
