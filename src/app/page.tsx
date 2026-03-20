// SCHEMA FIELDS FOR THIS PAGE
// -----------------------------------------------------------------------
// headline            string
// heroImage           image
// introQuote          string (textarea)
// signatureScents     object[] — { title, notes, image }
// atelierTitle        string
// atelierText         string (textarea)
// atelierImage        image
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
