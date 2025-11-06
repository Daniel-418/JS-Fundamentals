if (isNaN(Number(process.argv[2]))) {
  console.log("Missing number of occurences");
}
else {
  for (let i = 0; i < Number(process.argv[2]); i++) {
    console.log("C is fun");
  }
}
