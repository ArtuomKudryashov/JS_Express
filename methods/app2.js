let weight = -15;
if (weight > 0 && weight <= 150) {
  if (weight > 0 || weight <= 10) {
    console.log("Big boy");
  } else if (weight > 10 || weight <= 30) {
    console.log("Drisch");
  } else if (weight > 30 || weight <= 50) {
    console.log("Kachok");
  } else if (weight > 50 || weight <= 100) {
    console.log("Kachok");
  } else {
    console.log("Биоробот");
  }
} else {
  console.log("Введи нормальное число");
}

