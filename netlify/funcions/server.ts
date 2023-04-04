import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { listen } from "app/src-ssr/server";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // your server-side functionality
  return await listen()
};

export { handler };
