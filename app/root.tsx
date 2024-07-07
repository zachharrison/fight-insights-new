// import styles from "~/styles/index.css?url";
import { Navbar } from "./components/Navbar";
import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { LoaderFunction, MetaFunction } from "@netlify/remix-runtime";
import {
  useLoaderData,
  useMatches,
  Meta,
  Links,
  Outlet,
  ScrollRestoration,
  Scripts,
  LiveReload,
} from "@remix-run/react";

// export const links = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "Fight Insights" },
    { viewport: "width=device-width,initial-scale=1" },
    { charset: "utf-8" },
    {
      property: "og:title",
      content: "Blogs & Reviews for MMA News and fight gear",
    },
    {
      name: "description",
      content: "The home of all things fighting",
    },
  ];
};

// Return the theme from the session storage using the loader
export const loader: LoaderFunction = async ({ request }) => {
  // const { getTheme } = await themeSessionResolver(request);
  // return {
  //   theme: getTheme(),
  // };
  return {
    theme: "dark",
  };
};

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData();
  return (
    // <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
    <App />
    // </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData();
  const [theme] = useTheme();
  const matches = useMatches();

  return (
    <html lang="en" data-theme={theme ?? ""}>
      <head>
        <Meta />
        <Links />
        {/* <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        {typeof document === "undefined" ? "__STYLES__" : null} */}
      </head>
      <body>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          {/* <ol>
            {matches
              .filter((match) => match.handle && match.handle.breadcrumb)
              .map((match, index) => (
                <li style={{ wordSpacing: "5px" }} key={index}>
                  {match.handle.breadcrumb(match)}
                </li>
              ))}
          </ol> */}
          <Outlet />
          <ScrollRestoration />
          <LiveReload />
          <Scripts />
        </div>
      </body>
    </html>
  );
}
