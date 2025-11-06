function add(a, b) {
  return Number(a) + Number(b);
}

const first_number = process.argv[2];
const second_number = process.argv[3];

console.log(add(first_number, second_number));
