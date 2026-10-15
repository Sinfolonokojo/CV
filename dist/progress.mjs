const valid = id => Number.isInteger(id) && id >= 0 && id < 3;
export function readProgress(raw) {
  try { const data=JSON.parse(raw); return Array.isArray(data)?[...new Set(data.filter(valid))]:[]; }
  catch { return []; }
}
export function completeMission(done,id) { return [...new Set([...done,id].filter(valid))]; }
