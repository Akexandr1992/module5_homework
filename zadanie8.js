let car = new Map([

  ["BMW", "black"],

  ["Vw", "blue"],

  ["Lada", "green"],

  ["Ford", "yellow"],

  ["Merseds", "red"],

  ["Nissan", "green"]

]);
for (const [key, value] of car) {
  console.log(`Ключ - ${key}, значение - ${value}`);

}