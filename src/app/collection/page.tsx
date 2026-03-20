// SCHEMA FIELDS FOR THIS PAGE
// -----------------------------------------------------------------------
// headline            string
// subheadline         string (textarea)
// scents              object[] — { title, notes, description, image }
// -----------------------------------------------------------------------

import client from "../../../tina/__generated__/client";
import CollectionClient from "./collection-client";

export default async function CollectionPage() {
  const settingsRes = await client.queries.settings({
    relativePath: "global.json",
  });

  const pageRes = await client.queries.collectionPage({
    relativePath: "collection.md",
  });

  return <CollectionClient props={pageRes} settings={settingsRes.data.settings} />;
}
