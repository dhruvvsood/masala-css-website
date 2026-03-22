/* ── DATA ── */
const utilities = [
  // Colors
  {
    cls: "masala-bg-red",
    css: "background-color: red;",
    cat: "colors",
    preview: "bg",
    value: "red",
  },
  {
    cls: "masala-bg-blue",
    css: "background-color: blue;",
    cat: "colors",
    preview: "bg",
    value: "blue",
  },
  {
    cls: "masala-bg-green",
    css: "background-color: green;",
    cat: "colors",
    preview: "bg",
    value: "green",
  },
  {
    cls: "masala-bg-black",
    css: "background-color: black;",
    cat: "colors",
    preview: "bg",
    value: "black",
  },
  {
    cls: "masala-bg-white",
    css: "background-color: white;",
    cat: "colors",
    preview: "bg",
    value: "white",
  },
  {
    cls: "masala-text-red",
    css: "color: red;",
    cat: "colors",
    preview: "text",
    value: "red",
  },
  {
    cls: "masala-text-blue",
    css: "color: blue;",
    cat: "colors",
    preview: "text",
    value: "blue",
  },
  {
    cls: "masala-text-black",
    css: "color: black;",
    cat: "colors",
    preview: "text",
    value: "black",
  },
  {
    cls: "masala-text-white",
    css: "color: white;",
    cat: "colors",
    preview: "text",
    value: "white",
  },

  // Typography
  {
    cls: "masala-text-sm",
    css: "font-size: 12px;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-text-md",
    css: "font-size: 16px;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-text-lg",
    css: "font-size: 20px;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-text-xl",
    css: "font-size: 24px;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-font-bold",
    css: "font-weight: bold;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-font-normal",
    css: "font-weight: normal;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-font-light",
    css: "font-weight: 300;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-text-left",
    css: "text-align: left;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-text-center",
    css: "text-align: center;",
    cat: "typography",
    preview: null,
  },
  {
    cls: "masala-text-right",
    css: "text-align: right;",
    cat: "typography",
    preview: null,
  },

  // Spacing – padding
  { cls: "masala-p-5", css: "padding: 5px;", cat: "spacing", preview: null },
  { cls: "masala-p-10", css: "padding: 10px;", cat: "spacing", preview: null },
  { cls: "masala-p-20", css: "padding: 20px;", cat: "spacing", preview: null },
  {
    cls: "masala-pt-10",
    css: "padding-top: 10px;",
    cat: "spacing",
    preview: null,
  },
  {
    cls: "masala-pb-10",
    css: "padding-bottom: 10px;",
    cat: "spacing",
    preview: null,
  },
  {
    cls: "masala-pl-10",
    css: "padding-left: 10px;",
    cat: "spacing",
    preview: null,
  },
  {
    cls: "masala-pr-10",
    css: "padding-right: 10px;",
    cat: "spacing",
    preview: null,
  },

  // Spacing – margin
  { cls: "masala-m-5", css: "margin: 5px;", cat: "spacing", preview: null },
  { cls: "masala-m-10", css: "margin: 10px;", cat: "spacing", preview: null },
  { cls: "masala-m-20", css: "margin: 20px;", cat: "spacing", preview: null },
  {
    cls: "masala-mt-10",
    css: "margin-top: 10px;",
    cat: "spacing",
    preview: null,
  },
  {
    cls: "masala-mb-10",
    css: "margin-bottom: 10px;",
    cat: "spacing",
    preview: null,
  },
  {
    cls: "masala-ml-10",
    css: "margin-left: 10px;",
    cat: "spacing",
    preview: null,
  },
  {
    cls: "masala-mr-10",
    css: "margin-right: 10px;",
    cat: "spacing",
    preview: null,
  },

  // Borders
  {
    cls: "masala-border",
    css: "border: 1px solid black;",
    cat: "borders",
    preview: "border",
    value: "black",
  },
  {
    cls: "masala-border-2",
    css: "border: 2px solid black;",
    cat: "borders",
    preview: "border",
    value: "black",
  },
  {
    cls: "masala-border-red",
    css: "border-color: red;",
    cat: "borders",
    preview: "border",
    value: "red",
  },
  {
    cls: "masala-border-blue",
    css: "border-color: blue;",
    cat: "borders",
    preview: "border",
    value: "blue",
  },
  {
    cls: "masala-rounded-sm",
    css: "border-radius: 4px;",
    cat: "borders",
    preview: null,
  },
  {
    cls: "masala-rounded",
    css: "border-radius: 8px;",
    cat: "borders",
    preview: null,
  },
  {
    cls: "masala-rounded-lg",
    css: "border-radius: 16px;",
    cat: "borders",
    preview: null,
  },
  {
    cls: "masala-rounded-full",
    css: "border-radius: 9999px;",
    cat: "borders",
    preview: null,
  },

  // Layout
  { cls: "masala-block", css: "display: block;", cat: "layout", preview: null },
  {
    cls: "masala-inline",
    css: "display: inline;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-inline-block",
    css: "display: inline-block;",
    cat: "layout",
    preview: null,
  },
  { cls: "masala-flex", css: "display: flex;", cat: "layout", preview: null },
  { cls: "masala-grid", css: "display: grid;", cat: "layout", preview: null },
  { cls: "masala-hidden", css: "display: none;", cat: "layout", preview: null },
  {
    cls: "masala-flex-row",
    css: "flex-direction: row;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-flex-col",
    css: "flex-direction: column;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-justify-center",
    css: "justify-content: center;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-justify-between",
    css: "justify-content: space-between;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-items-center",
    css: "align-items: center;",
    cat: "layout",
    preview: null,
  },
  { cls: "masala-w-full", css: "width: 100%;", cat: "layout", preview: null },
  { cls: "masala-h-full", css: "height: 100%;", cat: "layout", preview: null },
  { cls: "masala-w-50", css: "width: 50%;", cat: "layout", preview: null },
  { cls: "masala-h-50", css: "height: 50%;", cat: "layout", preview: null },
  {
    cls: "masala-relative",
    css: "position: relative;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-absolute",
    css: "position: absolute;",
    cat: "layout",
    preview: null,
  },
  {
    cls: "masala-fixed",
    css: "position: fixed;",
    cat: "layout",
    preview: null,
  },

  // Extras
  {
    cls: "masala-shadow",
    css: "box-shadow: 0 2px 5px rgba(0,0,0,0.2);",
    cat: "extras",
    preview: null,
  },
  {
    cls: "masala-transition",
    css: "transition: all 0.3s ease;",
    cat: "extras",
    preview: null,
  },
  {
    cls: "masala-pointer",
    css: "cursor: pointer;",
    cat: "extras",
    preview: null,
  },
  {
    cls: "masala-opacity-50",
    css: "opacity: 0.5;",
    cat: "extras",
    preview: null,
  },
];

/* ── RENDER ── */
const tbody = document.getElementById("tableBody");
const catBadgeColors = {
  colors: "#c0572a",
  typography: "#7a5230",
  spacing: "#8a6e40",
  borders: "#6a7a40",
  layout: "#407a6a",
  extras: "#7a407a",
};

function previewCell(u) {
  if (!u.preview) return "—";
  if (u.preview === "bg") {
    return `<div class="preview"><div class="swatch" style="background:${u.value}"></div></div>`;
  }
  if (u.preview === "text") {
    return `<div class="preview"><div class="swatch" style="background:${u.value}; border-color:${u.value}"></div></div>`;
  }
  if (u.preview === "border") {
    return `<div class="preview"><div class="swatch" style="border:2px solid ${u.value}; background:transparent"></div></div>`;
  }
  return "—";
}

function renderRows(data) {
  if (data.length === 0) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="4">No utilities found. Try a different filter or search.</td></tr>`;
    return;
  }
  tbody.innerHTML = data
    .map(
      (u) => `
      <tr data-cat="${u.cat}">
        <td><span class="cls-name">.${u.cls}</span></td>
        <td><span class="css-val">${u.css}</span></td>
        <td><span class="cat-badge" style="border-color:${catBadgeColors[u.cat]}40; color:${catBadgeColors[u.cat]}">${u.cat}</span></td>
        <td>${previewCell(u)}</td>
      </tr>
    `,
    )
    .join("");
}

renderRows(utilities);
document.getElementById("totalCount").textContent = utilities.length;

/* ── FILTER ── */
let activeCat = "all";
let searchVal = "";

function applyFilter() {
  const filtered = utilities.filter((u) => {
    const catMatch = activeCat === "all" || u.cat === activeCat;
    const srchMatch =
      u.cls.includes(searchVal) || u.css.toLowerCase().includes(searchVal);
    return catMatch && srchMatch;
  });
  renderRows(filtered);
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat;
    applyFilter();
  });
});

document.getElementById("searchBox").addEventListener("input", (e) => {
  searchVal = e.target.value.toLowerCase().trim();
  applyFilter();
});

/* ── THEME TOGGLE ── */
const toggle = document.getElementById("themeToggle");
const label = document.getElementById("toggleLabel");
let dark = false;

// respect system preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  dark = true;
  document.documentElement.setAttribute("data-theme", "dark");
  label.textContent = "dark";
}

toggle.addEventListener("click", () => {
  dark = !dark;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  label.textContent = dark ? "dark" : "light";
});

/* ── SCROLL REVEAL ── */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".step-card, .stat-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  io.observe(el);
});
