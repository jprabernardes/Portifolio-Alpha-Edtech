export function Header() {
  const header = document.createElement("header");
  header.className = "header";

  const logo = document.createElement("div");
  logo.innerHTML =
    '<img src="assets/logo.svg" alt="Logo" style="width: 30px; height: 30px; filter: invert(100%);">'; // Placeholder logo icon

  const nav = document.createElement("nav");
  nav.className = "nav-links";

  const links = ["Sobre", "Equipe", "Notícias", "Contato"];
  links.forEach((text) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = text;
    nav.appendChild(a);
  });

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}
