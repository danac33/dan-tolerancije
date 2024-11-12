function checkDate() {
  const today = new Date();
  const targetDate = new Date(2024, 10, 16);
  if (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  ) {
    alert ("sretan Dan Tolerancije");
  }
}
checkDate();

console.log("ovo je radio Danin Harambasic")