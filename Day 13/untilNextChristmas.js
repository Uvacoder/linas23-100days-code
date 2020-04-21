const d = new Date();

const today = d.getTime();

const nextYear = d.setFullYear(2020,11,25);

const secondsDiff = nextYear - today;

console.log(`Days remaining until next christmas is ${Math.floor(secondsDiff / 86400000 )} `)