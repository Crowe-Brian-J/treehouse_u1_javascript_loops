const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper) + 1
}

let counter = 0
while (counter < 10) {
  console.log(`The random number is ${getRandomNumber(10)}.`)
  counter++
}

//while loop seems somewhat inefficient because of for loop
