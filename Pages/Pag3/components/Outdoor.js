export function Outdoor() {
  const section = document.createElement("section");
  section.className = "outdoor";

  // Set background image
  section.style.backgroundImage = "url('assets/hero.png')";

  const content = document.createElement("div");
  content.className = "outdoor-content";

  const h1 = document.createElement("h1");
  h1.textContent = "Fungoz!";

  const p = document.createElement("p");
  p.textContent = "Explore o mundo dos fungos!";

  content.appendChild(h1);
  content.appendChild(p);

  section.appendChild(content);

  return section;
}
