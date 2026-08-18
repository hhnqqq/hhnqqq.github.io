const fs = require("fs");
const js = fs.readFileSync(__dirname + "/js/main.js", "utf8");
const html = fs.readFileSync(__dirname + "/index.html", "utf8");

function extractObj(src, marker) {
  const i = src.indexOf(marker);
  const a = src.indexOf("{", i);
  const b = src.indexOf("[", i);
  const start = a === -1 ? b : (b === -1 ? a : Math.min(a, b));
  const open = src[start], close = open === "{" ? "}" : "]";
  let depth = 0, j = start, inStr = false, esc = false;
  for (; j < src.length; j++) {
    const c = src[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { j++; break; } }
  }
  return src.slice(start, j);
}

const i18n = eval("(" + extractObj(js, "const I18N = ") + ")");
const used = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((x) => x[1]);
const missing = [];
for (const u of used)
  for (const L of ["en", "zh"]) {
    if (i18n[L][u] === undefined) missing.push(L + ":" + u);
  }
console.log("i18n used:", used.length, "| missing:", missing.length ? missing : "none");

const papersArr = eval("(" + extractObj(js, "const PAPERS = ") + ")");
console.log("papers:", papersArr.length);

const sc = eval("(" + extractObj(js, "const SCHOLAR_CITES = ") + ")");
const noScholar = papersArr.filter((p) => !sc[p.title]).map((p) => p.title);
console.log("papers missing scholar citation link:", noScholar.length ? noScholar : "none");
const noNote = papersArr.filter((p) => !p.note || !p.note.en || !p.note.zh).map((p) => p.title);
console.log("papers missing bilingual note:", noNote.length ? noNote : "none");
const badCat = papersArr.filter((p) => !["peft", "science", "bench"].includes(p.cat)).map((p) => p.title);
console.log("papers with bad category:", badCat.length ? badCat : "none");
const badVenue = papersArr.filter((p) => !["neurips", "iclr", "emnlp", "arxiv", "icml"].includes(p.venueClass)).map((p) => p.title);
console.log("papers with unknown venue class:", badVenue.length ? badVenue : "none");