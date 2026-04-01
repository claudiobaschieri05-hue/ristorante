/* ================================================
   app.js – Guida Ristoranti d'Italia
   ================================================ */

// ── TAB LABELS ──
const TAB_LABELS = {
  antipasti:  "🥗 Antipasti",
  pizze:      "🍕 Pizze",
  colazione:  "☕ Colazione",
  cicchetti:  "🍢 Cicchetti",
  panini:     "🥖 Panini",
  aperitivo:  "🍸 Aperitivo",
  gelati:     "🍦 Gelati",
  granite:    "🧊 Granite",
  cioccolato: "🍫 Cioccolato",
  primi:      "🍝 Primi",
  secondi:    "🍖 Secondi",
  dolci:      "🍰 Dolci",
  bevande:    "🥤 Bevande",
  vini:       "🍷 Vini",
  birre:      "🍺 Birre",
  bibite:     "🥤 Bibite & Caffè",
};

// ── DRINK CLASSES ──
const DRINK_CLASSES = { vini:"drink-wine", birre:"drink-beer", bibite:"drink-soft", bevande:"drink-soft" };

// ── MAP INIT ──
let map;
const markers = [];

function initMap() {
  map = L.map("map", { zoomControl: true, scrollWheelZoom: false }).setView([42.4, 13.0], 5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
    maxZoom: 18,
  }).addTo(map);

  RESTAURANTS.forEach(r => {
    const icon = L.divIcon({
      className: "",
      html: `<div style="background:var(--gold,#c9933a);width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 3px 12px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:1.1rem;cursor:pointer;">${r.emoji}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -38],
    });

    const marker = L.marker([r.lat, r.lng], { icon }).addTo(map);
    marker.bindPopup(`
      <div style="min-width:160px;">
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:#f0c060;">${r.emoji} ${r.name}</div>
        <div style="font-size:.8rem;color:#9a8060;margin-top:2px;">📍 ${r.city}</div>
        <div style="font-size:.8rem;color:#c4a878;margin-top:4px;">${r.stars} · ${r.avgPrice}</div>
        <button onclick="openModal(${r.id})" style="margin-top:8px;background:#c9933a;color:#1a1208;border:none;border-radius:12px;padding:5px 14px;font-size:.8rem;font-weight:700;cursor:pointer;">Vedi Menu →</button>
      </div>
    `, { className: "map-popup" });
    markers.push({ marker, restaurant: r });
  });
}

// ── RENDER CARDS ──
function renderCards(list) {
  const grid = document.getElementById("cardsGrid");
  grid.innerHTML = "";
  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", r.id);
    card.setAttribute("data-cat", r.cat);
    card.innerHTML = `
      <div class="card-img">${r.emoji}</div>
      <div class="card-body">
        <span class="card-cat">${r.cat}</span>
        <div class="card-name">${r.name}</div>
        <div class="card-city">📍 ${r.city}</div>
        <div class="card-desc">${r.desc}</div>
        <div class="card-footer">
          <div>
            <div class="card-stars">${r.stars}</div>
            <div class="card-price">Medio: <strong>${r.avgPrice}</strong></div>
          </div>
          <button class="card-btn" onclick="openModal(${r.id})">Vedi Menu →</button>
        </div>
        ${r.website ? `<a href="${r.website}" target="_blank" class="card-website-btn">🌐 Visita sito web</a>` : ''}
      </div>`;
    grid.appendChild(card);
  });
}

// ── OPEN MODAL ──
function openModal(id) {
  const r = RESTAURANTS.find(x => x.id === id);
  if (!r) return;

  const tabs = Object.keys(r.menu);
  const tabsHTML = tabs.map((k, i) =>
    `<button class="menu-tab ${i===0?"active":""}" data-tab="${k}" onclick="switchTab('${k}',this)">${TAB_LABELS[k]||k}</button>`
  ).join("");

  const panelsHTML = tabs.map((k, i) => {
    const dClass = DRINK_CLASSES[k] || "";
    const items = r.menu[k].map(item => `
      <div class="menu-item ${dClass}">
        <div class="mi-info">
          <div class="mi-name">${item.name}</div>
          ${item.desc ? `<div class="mi-desc">${item.desc}</div>` : ""}
        </div>
        <div class="mi-price">${item.price}</div>
      </div>`).join("");
    return `<div class="menu-panel ${i===0?"active":""}" id="panel-${k}">${items}</div>`;
  }).join("");

  document.getElementById("modalContent").innerHTML = `
    <div class="m-header">
      <div class="m-cat">${r.cat.toUpperCase()}</div>
      <div class="m-name">${r.emoji} ${r.name}</div>
      <div class="m-meta">
        <span class="m-meta-item">📍 ${r.address}</span>
        <span class="m-meta-item">📞 ${r.phone}</span>
        <span class="m-meta-item">🕐 ${r.orari}</span>
        <span class="m-meta-item">${r.stars}</span>
        <span class="m-meta-item">💶 ${r.avgPrice}</span>
        ${r.website ? `<a href="${r.website}" target="_blank" class="m-meta-item website-link">🌐 SITO UFFICIALE</a>` : ''}
      </div>
      <div class="m-desc">${r.desc}</div>
    </div>
    <div class="menu-tabs">${tabsHTML}</div>
    <div class="menu-body">${panelsHTML}</div>`;

  const overlay = document.getElementById("modal");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";

  // fly map to restaurant
  if (map) map.setView([r.lat, r.lng], 12);
}

function switchTab(key, btn) {
  document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".menu-panel").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  const panel = document.getElementById("panel-" + key);
  if (panel) panel.classList.add("active");
}

// ── CLOSE MODAL ──
function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modal").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ── FILTERS ──
function applyFilters() {
  const cat = document.querySelector(".filter-btn.active")?.dataset.cat || "all";
  const q = document.getElementById("searchInput").value.toLowerCase().trim();
  const filtered = RESTAURANTS.filter(r => {
    const matchCat = cat === "all" || r.cat === cat;
    const matchQ = !q || r.name.toLowerCase().includes(q) || r.city.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  renderCards(filtered);

  // update map markers visibility
  markers.forEach(({ marker, restaurant: r }) => {
    const show = filtered.some(f => f.id === r.id);
    if (show) { if (!map.hasLayer(marker)) marker.addTo(map); }
    else { map.removeLayer(marker); }
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
});

document.getElementById("searchInput").addEventListener("input", applyFilters);

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderCards(RESTAURANTS);
  initMap();
  document.getElementById("countRest").textContent = RESTAURANTS.length;
});

// ── AI CHATBOT VIRTUAL SOMMELIER ──
const chatFab = document.getElementById("chatbot-fab");
const chatWindow = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chatbot-close");
const chatInput = document.getElementById("chat-input-text");
const chatSend = document.getElementById("chat-send-btn");
const chatMsgs = document.getElementById("chatbot-messages");

chatFab.addEventListener("click", () => { chatWindow.classList.remove("hidden"); chatInput.focus(); });
chatClose.addEventListener("click", () => chatWindow.classList.add("hidden"));

function addChatMsg(text, isUser, suggestionId) {
  const msg = document.createElement("div");
  msg.className = `msg ${isUser ? 'user-msg' : 'ai-msg'}`;
  msg.innerHTML = text;
  
  if (suggestionId) {
    const r = RESTAURANTS.find(x => x.id === suggestionId);
    if (r) {
      const card = document.createElement("div");
      card.className = "chat-sugg-card";
      card.onclick = () => { openModal(r.id); chatWindow.classList.add("hidden"); };
      card.innerHTML = `
        <div class="chat-sugg-icon">${r.emoji}</div>
        <div class="chat-sugg-info">
          <div class="chat-sugg-title">${r.name}</div>
          <div class="chat-sugg-meta">${r.cat} a ${r.city} · ${r.avgPrice}</div>
        </div>
      `;
      msg.appendChild(card);
    }
  }
  
  chatMsgs.appendChild(msg);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function handleAiResponse(query) {
  const q = query.toLowerCase();
  
  // Basic semantic match
  let matches = RESTAURANTS.filter(r => {
    return r.name.toLowerCase().includes(q) || 
           r.city.toLowerCase().includes(q) || 
           r.cat.toLowerCase().includes(q) ||
           r.desc.toLowerCase().includes(q);
  });
  
  const mStr = JSON.stringify(RESTAURANTS).toLowerCase();
  if (q.includes("pesce") || q.includes("mare")) {
    matches = matches.filter(r => JSON.stringify(r.menu).toLowerCase().includes("pesce") || r.desc.toLowerCase().includes("mare") || JSON.stringify(r.menu).toLowerCase().includes("gamber"));
  }
  if (q.includes("carne") || q.includes("bistecca") || q.includes("grigliata")) {
    matches = matches.filter(r => JSON.stringify(r.menu).toLowerCase().includes("bistecca") || JSON.stringify(r.menu).toLowerCase().includes("carne") || JSON.stringify(r.menu).toLowerCase().includes("grigliata"));
  }
  if (q.includes("pizza") || q.includes("pizzeria")) {
    matches = matches.filter(r => r.cat === "pizzeria" || JSON.stringify(r.menu).toLowerCase().includes("pizza"));
  }

  if (matches.length > 0) {
    const top = matches[0];
    addChatMsg(`Certamente! Ti suggerisco <strong>${top.name}</strong> a ${top.city}. Clicca qui sotto per vedere il menu completo!`, false, top.id);
  } else {
    // try random suggestion
    const r = RESTAURANTS[Math.floor(Math.random()*RESTAURANTS.length)];
    addChatMsg(`Hmm, non ho trovato corrispondenze esatte per questa ricerca, ma ti consiglio vivamente di provare <strong>${r.name}</strong> a ${r.city}!`, false, r.id);
  }
}

function processChat() {
  const text = chatInput.value.trim();
  if (!text) return;
  addChatMsg(text, true);
  chatInput.value = "";
  
  // Fake thinking delay
  setTimeout(() => handleAiResponse(text), 600);
}

chatSend.addEventListener("click", processChat);
chatInput.addEventListener("keydown", (e) => { if (e.key === "Enter") processChat(); });
