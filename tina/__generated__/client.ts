import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/nandhu/My-projects/chaitu-editz-website/tina/__generated__/.cache/1771351855749', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  