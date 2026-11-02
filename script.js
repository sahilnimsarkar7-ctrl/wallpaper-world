// Wallpaper World gallery data.
// Replace demo image URLs with images you own or have permission to use before publishing.
const wallpapers = [
  {id:1,title:"Mountain Morning",category:"Nature",resolution:"4K",description:"A dramatic mountain landscape for a calm, open-screen feel.",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"},
  {id:2,title:"Starry Night",category:"Space",resolution:"4K",description:"A deep night sky filled with stars.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85"},
  {id:3,title:"Forest Escape",category:"Nature",resolution:"HD",description:"Lush forest tones for a peaceful wallpaper.",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"},
  {id:4,title:"Ocean Blue",category:"Nature",resolution:"4K",description:"Blue ocean water and a refreshing coastal mood.",image:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85"},
  {id:5,title:"Neon Streets",category:"Gaming",resolution:"HD",description:"A neon-lit city street with a futuristic atmosphere.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85"},
  {id:6,title:"Performance Machine",category:"Cars",resolution:"4K",description:"A polished sports-car detail for automotive fans.",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"},
  {id:7,title:"Midnight Drive",category:"Cars",resolution:"HD",description:"A modern car photographed in a cinematic setting.",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"},
  {id:8,title:"City Geometry",category:"Architecture",resolution:"HD",description:"Clean lines and modern city architecture.",image:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85"},
  {id:9,title:"Soft Petals",category:"Flowers",resolution:"HD",description:"A delicate floral close-up with soft colours.",image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85"},
  {id:10,title:"Wild Companion",category:"Animals",resolution:"HD",description:"A wildlife portrait for animal lovers.",image:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85"},
  {id:11,title:"Minimal Calm",category:"Aesthetic",resolution:"HD",description:"A simple, balanced composition for a clean screen.",image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85"},
  {id:12,title:"Anime Inspired Sky",category:"Anime",resolution:"HD",description:"A colourful sky with a dreamy animated-film mood. Use only licensed art for anime character images.",image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"},
  {id:13,title:"Purple Cosmos",category:"Space",resolution:"4K",description:"A cosmic-looking purple and blue night sky.",image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=85"},
  {id:14,title:"Desert Dunes",category:"Nature",resolution:"4K",description:"Warm desert shapes and sweeping sand dunes.",image:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=85"},
  {id:15,title:"City at Dusk",category:"Architecture",resolution:"HD",description:"A city skyline as the evening lights come on.",image:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85"},
  {id:16,title:"Bloom in Pink",category:"Flowers",resolution:"HD",description:"A bright flower study with soft pink tones.",image:"https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=85"}
];

const grid = document.getElementById("wallpaperGrid");
const searchInput = document.getElementById("searchInput");
const categoryRow = document.getElementById("categoryRow");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const sortSelect = document.getElementById("sortSelect");
const dialog = document.getElementById("wallpaperDialog");
let activeCategory = "All";
let searchTerm = "";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

function getVisibleWallpapers() {
  let items = wallpapers.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const searchable = `${item.title} ${item.category} ${item.description}`.toLowerCase();
    return matchesCategory && searchable.includes(searchTerm.toLowerCase());
  });
  if (sortSelect.value === "title") items.sort((a,b) => a.title.localeCompare(b.title));
  if (sortSelect.value === "category") items.sort((a,b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
  return items;
}

function renderWallpapers() {
  const items = getVisibleWallpapers();
  resultsCount.textContent = `${items.length} wallpaper${items.length === 1 ? "" : "s"}`;
  emptyState.hidden = items.length > 0;
  grid.innerHTML = items.map(item => `
    <article class="wallpaper-card" tabindex="0" role="button" aria-label="Preview ${escapeHTML(item.title)}" data-id="${item.id}">
      <div class="wallpaper-thumb">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} wallpaper" loading="lazy" decoding="async">
        <div class="card-overlay"></div>
        <div class="card-topline"><span class="card-category">${escapeHTML(item.category)}</span><span class="resolution-pill">${escapeHTML(item.resolution)}</span></div>
        <span class="preview-icon" aria-hidden="true">↗</span>
      </div>
      <div class="card-info"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.category)} wallpaper</p></div>
    </article>
  `).join("");
}

function openPreview(id) {
  const item = wallpapers.find(w => w.id === Number(id));
  if (!item) return;
  document.getElementById("dialogImage").src = item.image;
  document.getElementById("dialogImage").alt = `${item.title} wallpaper preview`;
  document.getElementById("dialogCategory").textContent = `${item.category} · ${item.resolution}`;
  document.getElementById("dialogTitle").textContent = item.title;
  document.getElementById("dialogDescription").textContent = item.description;
  // External images may not allow direct file download. Open the source image instead.
  const downloadButton = document.getElementById("downloadButton");
  downloadButton.href = item.image;
  downloadButton.textContent = "Open image ↗";
  dialog.showModal();
}

grid.addEventListener("click", event => {
  const card = event.target.closest(".wallpaper-card");
  if (card) openPreview(card.dataset.id);
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".wallpaper-card")) {
    event.preventDefault();
    openPreview(event.target.dataset.id);
  }
});
categoryRow.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  categoryRow.querySelectorAll(".category-chip").forEach(chip => {
    const selected = chip === button;
    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderWallpapers();
});
searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim();
  renderWallpapers();
});
sortSelect.addEventListener("change", renderWallpapers);
document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  activeCategory = "All";
  categoryRow.querySelectorAll(".category-chip").forEach(chip => {
    const selected = chip.dataset.category === "All";
    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  sortSelect.value = "featured";
  renderWallpapers();
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.getElementById("menuButton");
const headerNav = document.querySelector(".header-nav");
menuButton.addEventListener("click", () => {
  const open = headerNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
headerNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    headerNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
renderWallpapers();
