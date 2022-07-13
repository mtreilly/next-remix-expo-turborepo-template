import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

if (process.env.NODE_ENV !== "production") {
  console.warn("Using ReactDOM.hydrate rather than hydrateRoot until the latter is patched to not break when dev tools inject into the dom");
  require("react-dom").hydrate(<RemixBrowser />, document);
} else {
  hydrateRoot(document, <RemixBrowser />);
}
