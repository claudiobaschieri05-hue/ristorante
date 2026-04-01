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
            ${r.form_available ? (r.postiDisponibili > 0 ? `<div class="card-availability av-green">🟢 ${r.postiDisponibili} Posti disponibili</div>` : `<div class="card-availability av-red">🔴 Completo</div>`) : ''}
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
  ).join("") + `<button class="menu-tab" data-tab="recensioni" onclick="switchTab('recensioni',this)">⭐ Recensioni</button>`;

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
  
  // Costruzione Pannello Recensioni
  const reviewsHTML = r.reviewsList ? r.reviewsList.map(rev => `
    <div class="review-card">
      <div class="rev-avatar">👤</div>
      <div class="rev-body">
        <div class="rev-header">
          <strong>${rev.user}</strong>
          <span class="rev-date">${rev.date}</span>
        </div>
        <div class="rev-stars">${rev.stars}</div>
        <div class="rev-text">"${rev.text}"</div>
      </div>
    </div>
  `).join("") : "";

  document.getElementById("modalContent").innerHTML = `
    <div class="m-header">
      <div class="m-cat">${r.cat.toUpperCase()}</div>
      <div class="m-name">${r.emoji} ${r.name}</div>
      <div class="m-meta">
        <span class="m-meta-item">📍 ${r.address}</span>
        <span class="m-meta-item">📞 ${r.phone}</span>
        <span class="m-meta-item">✉️ ${r.email}</span>
        <span class="m-meta-item">🕐 ${r.orari}</span>
        <span class="m-meta-item">${r.stars}</span>
        <span class="m-meta-item">💶 ${r.avgPrice}</span>
        ${r.website ? `<a href="${r.website}" target="_blank" class="m-meta-item website-link">🌐 SITO UFFICIALE</a>` : ''}
        
        ${r.form_available ? 
          `<button class="m-book-action" onclick="openBooking(${r.id})" ${r.postiDisponibili <= 0 ? 'disabled' : ''}>
             ${r.postiDisponibili > 0 ? '📅 PRENOTA UN TAVOLO' : '❌ ESAURITO'}
           </button>` 
        : ''}

      </div>
      <div class="m-desc">${r.desc}</div>
    </div>
    <div class="menu-tabs">${tabsHTML}</div>
    <div class="menu-body">
      ${panelsHTML}
      <div class="menu-panel" id="panel-recensioni">
        <div class="reviews-summary">
          ⭐ <strong>${r.rating} / 5</strong> - Basato su ${r.reviewsCount} recensioni TripAdvisor
        </div>
        ${reviewsHTML}
      </div>
    </div>`;

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
const chatTyping = document.getElementById("chat-typing");
const chatOverlay = document.getElementById("chatbot-overlay");

function openChat() {
  chatOverlay.classList.remove("hidden");
  chatWindow.classList.remove("hidden");
  chatInput.focus();
}

function closeChat() {
  chatOverlay.classList.add("hidden");
  chatWindow.classList.add("hidden");
}

chatFab.addEventListener("click", openChat);
chatClose.addEventListener("click", closeChat);
chatOverlay.addEventListener("click", closeChat);

// Used by the Quick Reply buttons in HTML
window.sendQuickReply = function(text) {
  chatInput.value = text;
  processChat();
};

function scrollToBottom() {
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function addChatMsg(text, isUser, suggestionIds = null) {
  const row = document.createElement("div");
  row.className = `msg-row ${isUser ? 'user-row' : 'ai-row'}`;
  
  const avatarHtml = isUser ? `<div class="msg-avatar">👤</div>` : `<div class="msg-avatar">🤖</div>`;
  
  let msgContent = `<div class="msg ${isUser ? 'user-msg' : 'ai-msg'}">${text}</div>`;
  
  if (isUser) {
    row.innerHTML = msgContent + avatarHtml;
  } else {
    row.innerHTML = avatarHtml + msgContent;
  }
  
  const msgDiv = row.querySelector('.msg');

  if (suggestionIds && !isUser) {
    // Se è un array di id (Multi-card)
    let ids = Array.isArray(suggestionIds) ? suggestionIds : [suggestionIds];
    
    ids.forEach(id => {
      const r = RESTAURANTS.find(x => x.id === id);
      if (r) {
        const card = document.createElement("div");
        card.className = "chat-sugg-card";
        card.onclick = () => { openModal(r.id); chatWindow.classList.add("hidden"); };
        
        const ratingColor = parseFloat(r.rating) >= 4.5 ? '#2d8a39' : '#c9933a';
        
        card.innerHTML = `
          <div class="chat-sugg-icon">${r.emoji}</div>
          <div class="chat-sugg-info">
            <div class="chat-sugg-title">${r.name}</div>
            <div class="chat-sugg-meta">
              📍 ${r.city} • 💶 ${r.avgPrice}<br>
              <span style="color:${ratingColor};font-weight:700;">${r.rating}/5</span> su ${r.reviewsCount} recensioni
            </div>
          </div>
        `;
        msgDiv.appendChild(card);
      }
    });
  }
  
  chatMsgs.appendChild(row);
  scrollToBottom();
}

function handleAiResponse(query) {
  chatTyping.classList.add("hidden"); 
  
  const q = query.toLowerCase().trim();
  
  const isVago = q.length < 5 || q === "ciao" || q.includes("ho fame") || q.includes("consigli") || q.includes("aiuto");
  const specificMatch = RESTAURANTS.find(r => q.includes(r.name.toLowerCase()));

  // 1. Dettagli Specifici (TripAdvisor) su Ristorante
  if (specificMatch && (q.includes("info") || q.includes("recension") || q.includes("vota") || q.includes("tripadvisor") || q.includes("dati"))) {
    addChatMsg(`Certamente! Ecco i dati TripAdvisor per <strong>${specificMatch.name}</strong> a ${specificMatch.city}.<br><br>🌟 <strong>${specificMatch.rating}/5</strong> (su ${specificMatch.reviewsCount} recensioni)<br><br>💬 Dicono di loro: <br><em>"${specificMatch.topReview}"</em><br><br>Clicca la scheda per prenotare.`, false, [specificMatch.id]);
    return;
  }

  // 2. Query Vaga -> Tre scelte random spettacolari
  if (isVago) {
    const misti = [...RESTAURANTS].sort(() => 0.5 - Math.random()).slice(0, 3).map(r => r.id);
    addChatMsg("Sembri indeciso! Ecco **3 tra i nostri locali meglio recensiti** su TripAdvisor per ispirarti:", false, misti);
    return;
  }

  // 3. MOTORE DI RICERCA SEMANTICA STRICT
  let matches = RESTAURANTS;
  let hasFoodOrCatFilter = false;

  // A) Filtri Categoria Assoluti (Se scrivi Pizzeria, escono *solo* Pizzerie)
  if (q.includes("pizza") || q.includes("pizzeria") || q.includes("margherita")) {
    matches = matches.filter(r => r.cat === "pizzeria");
    hasFoodOrCatFilter = true;
  } else if (q.includes("dolce") || q.includes("pasticceria") || q.includes("gelato") || q.includes("cornetto")) {
    matches = matches.filter(r => r.cat === "pasticceria");
    hasFoodOrCatFilter = true;
  } else if (q.includes("bar") || q.includes("aperitivo") || q.includes("cocktail") || q.includes("spritz") || q.includes("tapas")) {
    matches = matches.filter(r => r.cat === "bar");
    hasFoodOrCatFilter = true;
  } else if (q.includes("osteria") || q.includes("trattoria") || q.includes("nonna")) {
    matches = matches.filter(r => r.cat === "osteria");
    hasFoodOrCatFilter = true;
  } else if (q.includes("ristorante") || q.includes("gourmet")) {
    matches = matches.filter(r => r.cat === "ristorante");
    hasFoodOrCatFilter = true;
  }
  
  // B) Filtri Cibo Specifico (se non ha matchato la categoria pura)
  if (!hasFoodOrCatFilter) {
    if (q.includes("pesce") || q.includes("mare") || q.includes("sushi")) {
      matches = matches.filter(r => JSON.stringify(r.menu).toLowerCase().includes("pesce") || r.desc.toLowerCase().includes("mare") || JSON.stringify(r.menu).toLowerCase().includes("gamber"));
      hasFoodOrCatFilter = true;
    } else if (q.includes("carne") || q.includes("bistecca") || q.includes("grigliata")) {
      matches = matches.filter(r => JSON.stringify(r.menu).toLowerCase().includes("bistecca") || JSON.stringify(r.menu).toLowerCase().includes("carne") || r.desc.toLowerCase().includes("carne"));
      hasFoodOrCatFilter = true;
    }
  }

  // C) Ricerca Testuale (Solo se non c'è già un filtro Categoria/Cibo forte)
  if (!hasFoodOrCatFilter) {
    matches = matches.filter(r => r.name.toLowerCase().includes(q) || r.city.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q));
  }

  // D) Modificatori Addizionali
  if (q.includes("economico") || q.includes("studenti")) {
    matches = matches.filter(r => parseInt(r.avgPrice.replace(/[^0-9]/g, '').substring(0,2)) <= 20 || r.cat === 'pizzeria' || r.cat === 'bar');
  }
  if (q.includes("romantica") || q.includes("elegante") || q.includes("lusso") || q.includes("anniversario")) {
    matches = matches.filter(r => r.stars === '★★★★★' || r.stars === '★★★★☆');
  }

  // E) Estrazione automatica CITTÀ (Forza il match della città)
  const allCities = [...new Set(RESTAURANTS.map(r => r.city.toLowerCase()))];
  for (let c of allCities) {
    if (q.includes(c)) {
      matches = matches.filter(r => r.city.toLowerCase() === c);
      break; // fermati alla prima città trovata
    }
  }

  // 4. ELABORAZIONE FINALE DELLA RISPOSTA
  if (matches.length > 0) {
    if (matches.length === 1) {
      const top = matches[0];
      addChatMsg(`Perfetto, ho una scelta miratissima per te! Ecco <strong>${top.name}</strong> a ${top.city}.`, false, [top.id]);
    } else {
      // Prendi fino a 3 migliori (Ordinati per r.rating discendente simulato e presi a caso tra i top)
      const scelti = matches.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 3);
      const ids = scelti.map(r => r.id);
      addChatMsg(`Assolutamente! Ho trovato ${matches.length} locali incredibili. Ecco la mia <strong>Top ${ids.length}</strong> assoluta in base a quello che cerchi:`, false, ids);
    }
  } else {
    const misti = [...RESTAURANTS].sort(() => 0.5 - Math.random()).slice(0, 3).map(r => r.id);
    addChatMsg(`Cavolo, non ho trovato un match 100% esatto per questa estrosa richiesta... ma ti prometto che questi 3 posti in giro per l'Italia sono una bomba:`, false, misti);
  }
}

function processChat() {
  const text = chatInput.value.trim();
  if (!text) return;
  addChatMsg(text, true);
  chatInput.value = "";
  
  // Show typing indicator
  chatMsgs.appendChild(chatTyping); // move it to the bottom
  chatTyping.classList.remove("hidden");
  scrollToBottom();
  
  // Fake thinking delay for realism
  const thinkingTime = Math.random() * 800 + 800; // 800-1600ms
  setTimeout(() => handleAiResponse(text), thinkingTime);
}

chatSend.addEventListener("click", processChat);
chatInput.addEventListener("keydown", (e) => { if (e.key === "Enter") processChat(); });

// ── SISTEMA PRENOTAZIONI ──
const bookModal = document.getElementById("bookModal");
const bookClose = document.getElementById("bookClose");
const bookForm = document.getElementById("bookForm");
const bookRestName = document.getElementById("bookRestName");
let currentBookingRestId = null;

window.openBooking = function(id) {
  const r = RESTAURANTS.find(x => x.id === id);
  if (!r) return;
  currentBookingRestId = r.id;
  bookRestName.innerHTML = `Prenota da <strong>${r.name}</strong>`;
  bookForm.reset();
  bookModal.classList.add("open");
};

bookClose.addEventListener("click", () => bookModal.classList.remove("open"));

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const guests = parseInt(document.getElementById("bookGuests").value, 10);
  
  const r = RESTAURANTS.find(x => x.id === currentBookingRestId);
  if (!r) return;

  if (guests > r.postiDisponibili) {
    alert(`Spiacenti, il locale ha a disposizione solo ${r.postiDisponibili} posti. Non possiamo accettare prenotazioni per ${guests} persone in questo orario.`);
    return;
  }

  // Conferma
  r.postiDisponibili -= guests;
  alert(`✔️ SUCCESS!\n\nLa richiesta per ${guests} persone è stata inviata a ${r.email}.\n\nIl Ristorante ${r.name} ti confermerà a breve il tavolo.`);
  bookModal.classList.remove("open");
  
  // Ricarica la vista modal e le cards per mostrare i posti scalati
  openModal(r.id);
  applyFilters();
});
