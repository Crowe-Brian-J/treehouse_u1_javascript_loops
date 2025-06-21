const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper) + 1
}

//wish we could just import the same function to each page instead of having to copy and paste it every time

for (let i = 0; i < 10; i++) {
  console.log(`The random number is ${getRandomNumber(10)}`)
}
