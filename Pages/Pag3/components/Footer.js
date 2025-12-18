export function Footer() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const div = document.createElement("div");
  div.innerHTML = "&copy; FUNGOZ. All rights reserved.";

  footer.appendChild(div);

  return footer;
}
