const KEY = "urls";

export function getAllUrls() {
  const data=localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveUrl(code, original) {
  const urls=getAllUrls();
  urls.push({ code, original, visits: 0 });
  localStorage.setItem(KEY, JSON.stringify(urls));
}

export function getUrl(code) {
  const urls=getAllUrls();
  const found=urls.find((u) => u.code === code);
  return found ? found.original : null;
}

export function incrementVisit(code) {
  const urls=getAllUrls();
  const idx=urls.findIndex((u) => u.code === code);
  if (idx > -1) {
    urls[idx].visits += 1;
    localStorage.setItem(KEY,JSON.stringify(urls));
  }
}
