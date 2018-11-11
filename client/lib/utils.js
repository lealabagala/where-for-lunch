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

export function getDayOfTheWeek(index) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (index >= 0 && index < 7) {
    return days[index];
  }
}

export function getOperatingHours(arr, index) {
  const hours = arr.find(obj => obj.day === index);
  const formatHour = (hour) => {
    return [hour.slice(0, 2), ':', hour.slice(2)].join('');
  };

  if (hours) {
    return `${formatHour(hours.start)} - ${formatHour(hours.end)}`;
  }
}
