import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '46cf44010b39953719c5fb630856d4cb25c969f1', queries,  });
export default client;
  