export function Journal() {
  const section = document.createElement("section");
  section.className = "journal";

  const header = document.createElement("div");
  header.style.textAlign = "center";
  header.style.marginBottom = "3rem";
  header.innerHTML = `
        <h2 class="section-title">Fungos Macroscópicos</h2>
        <p class="section-desc" style="margin: 0 auto;">Infinitas possibilidades para descobrir e aprender sobre os fungos macroscópicos.</p>
    `;

  const grid = document.createElement("div");
  grid.className = "journal-grid";

  const posts = [
    {
      date: "Dezembro, 2025",
      title: "Diversidade",
      description:
        "Existem inúmeras espécies de fungos macroscópicos, cada uma com suas características únicas.",
      image: "assets/fg1.jpg", // Using the generated forest/bridge image
    },
    {
      date: "Dezembro, 2025",
      title: "Ecossistemas",
      description:
        "Os fungos desempenham um papel crucial na natureza, participando de ecossistemas e ajudando na decomposição de matéria orgânica.",
      image: "assets/fg2.jpg", // Reusing
    },
  ];

  posts.forEach((post) => {
    const card = createPost(
      post.date,
      post.title,
      post.description,
      post.image
    );
    grid.appendChild(card);
  });

  const allPosts = document.createElement("div");
  allPosts.style.textAlign = "center";
  allPosts.style.marginTop = "3rem";
  allPosts.innerHTML =
    '<a href="#" style="font-size: 0.8rem; color: #a8b2d1; letter-spacing: 2px;">TODOS OS POSTS -></a>';

  section.appendChild(header);
  section.appendChild(grid);
  section.appendChild(allPosts);

  return section;
}

function createPost(date, title, desc, image) {
  const card = document.createElement("div");
  card.className = "post-card";
  card.innerHTML = `
        <img src="${image}" alt="${title}" class="post-img">
        <div class="post-date">${date}</div>
        <h3 class="post-title">${title}</h3>
        <p class="post-desc">${desc}</p>
    `;
  return card;
}
