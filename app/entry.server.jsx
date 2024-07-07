import { RemixServer } from "@remix-run/react";
// import { renderToString } from "react-dom/server";
// import { ServerStyleSheet } from "styled-components";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  // const sheet = new ServerStyleSheet();

  // let markup = renderToString(
  //   sheet.collectStyles(
  //     <RemixServer context={remixContext} url={request.url} />
  //   )
  // );
  // const styles = sheet.getStyleTags();
  // markup = markup.replace("__STYLES__", styles);

  if (typeof window === "undefined") {
    global.window = {
      matchMedia: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
      }),
    };
  }

  responseHeaders.set("Content-Type", "text/html");

  // return new Response("<!DOCTYPE html>" + markup, {
  //   status: responseStatusCode,
  //   headers: responseHeaders,
  // });
  return new Response(
    "<!DOCTYPE html>" +
      {
        status: responseStatusCode,
        headers: responseHeaders,
      }
  );
}
