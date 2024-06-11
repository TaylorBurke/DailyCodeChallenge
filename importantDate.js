function printDateTime() {
  const currentTime = new Date(Date.now());
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const month = currentTime.getMonth() + 1; // Months are zero-indexed
  const date = currentTime.getDate();
  const year = currentTime.getFullYear().toString().slice(-2); // Get the last two digits of the year
  const hours = currentTime.getHours(); // this will be military time format, if you want to convert to 12 hour format, you will need to add some logic
  const minutes = String(currentTime.getMinutes()).padStart(2, "0"); // Add leading zero if needed
  const seconds = String(currentTime.getSeconds()).padStart(2, "0"); // Add leading zero if needed

  return currentTime.toString();
  //   return `Glancing at your vintage Rolex you notice that it is ${hours}:${minutes} and ${seconds} seconds, on ${dayOfWeek} ${month}/${date}/${year}`;
}

console.log(new Date(Date.now()).toString());
