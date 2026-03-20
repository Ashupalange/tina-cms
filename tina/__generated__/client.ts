import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd217d5cfe5e7351ce35dacd09fc895ba5e1926a3', queries,  });
export default client;
  