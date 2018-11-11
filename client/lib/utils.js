export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export function formatPrice(arr) {
  return Array.prototype.join.call(arr);
}

export function isPriceChecked(arr, obj) {
  return arr.indexOf(obj) >= 0;
}

export function removePrice(arr, obj) {
  const index = arr.indexOf(obj);
  if (index >= 0) {
    arr.splice(index, 1);
  }
  return arr;
}
