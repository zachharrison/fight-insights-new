import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

installGlobals();

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      remix({
        routes: async (defineRoutes) => {
          return defineRoutes((route) => {
            route("/", "routes/index.tsx");
            route("/posts", "routes/posts/index.tsx");
            route("/posts/:slug", "routes/posts/$slug.tsx");
            route("/reviews", "routes/reviews/index.tsx");
            route("/reviews/:slug", "routes/reviews/$slug.tsx");
            route(
              "/reviews/productCategory/:slug",
              "routes/reviews/productCategory.$slug.tsx"
            );
          });
        },
        // ignoredRouteFiles: ["**/*"],
      }),
      netlifyPlugin(),
      tsconfigPaths(),
      // react({
      //   include: /\.(jsx|tsx)$/,
      // }),
      react({
        include: /\.(jsx|tsx)$/,
      }),
    ],

    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./app", import.meta.url)),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
