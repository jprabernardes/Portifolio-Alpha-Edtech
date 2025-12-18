export function Explore() {
  const section = document.createElement("section");
  section.className = "explore";

  // Section Header
  const header = document.createElement("div");
  header.className = "section-header";
  header.innerHTML = `
        <h2 class="section-title">O mundo dos fungos!</h2>
        <p class="section-desc">Descubra um mundo incrível de fungos micro e macroscópicos!</p>
    `;

  // Cards
  const grid = document.createElement("div");
  grid.className = "card-grid";

  // Internal data array (not exported)
  const places = [
    {
      name: "Esporotricose",
      reference: "Fonte: T. M. Pacheco Schubach, R. C. Menezes and B. Wanke",
      image: "assets/Sporo.png", // Reusing canyon for demo
    },
    {
      name: "Histoplasmose",
      reference: "Fonte: Jane E. Sykes, Joseph Taboada.",
      image: "assets/histoplasmosis.png",
    },
    {
      name: "Coccidioidomicose",
      reference: "Fonte: CDC.",
      image: "assets/cocci.png",
    },
  ];

  places.forEach((place) => {
    const card = createCard(place.name, place.reference, place.image);
    grid.appendChild(card);
  });

  const moreLink = document.createElement("div");
  moreLink.style.textAlign = "center";
  moreLink.style.marginTop = "3rem";
  moreLink.innerHTML =
    '<a href="#" style="font-size: 0.8rem; color: #a8b2d1; letter-spacing: 2px;">VEJA MAIS -></a>';

  section.appendChild(header);
  section.appendChild(grid);
  section.appendChild(moreLink);

  return section;
}

function createCard(name, reference, image) {
  const card = document.createElement("div");
  card.className = "card";

  // Check if the image path is valid/exists in a real app, here we just use it.

  card.innerHTML = `
        <img src="${image}" alt="${name}" class="card-img">
        <div class="card-info">
            <span class="card-name">${name}</span>
            <span class="card-reference">${reference}</span>
        </div>
    `;

  return card;
}
