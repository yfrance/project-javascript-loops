// Loop statements Do{}While()
let iteration = 5;

do {
  console.log(iteration);
  iteration += 2;
} while (iteration < 30);

// Loops statement For()
for (let index = 0; index <= 50; index += 5 - 2) {
  console.log(index * 3);
}

// Loop statements For()
const numbers = [3, 4, 5];

for (let index = 0; index < +numbers.length; index++) {
  const element = numbers[index] * 2;
  console.log(element);
}
