// sessions.server.tsx

import { createCookieSessionStorage } from "@netlify/remix-runtime";
import { createThemeSessionResolver } from "remix-themes";

// TODO: Enable secure and domain for production
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    // domain: 'remix.run',
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    // secure: true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
