import { Header } from "./Header.js";
import { Outdoor } from "./Outdoor.js";
import { Explore } from "./Explore.js";
import { Journal } from "./Journal.js";
import { Footer } from "./Footer.js";

export function Page() {
  const container = document.createElement("div");

  // Assemble the page
  container.appendChild(Header());
  container.appendChild(Outdoor());
  container.appendChild(Explore());
  container.appendChild(Journal());
  container.appendChild(Footer());

  return container;
}
