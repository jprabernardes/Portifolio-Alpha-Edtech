import { Page } from "./components/Page.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("body");
  // We append the result of Page() which is an HTMLElement
  app.appendChild(Page());
});
