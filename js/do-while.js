const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper) + 1
}

//code block goes in curly braces, always executes at least once
let counter = 0
do {
  console.log(`The random number is ${getRandomNumber(10)}`)
  counter++
} while (counter < 10)

//seems like both this and while.js should have been combined with one codeblock commented out to show that they're meant to do the same thing

//use do while when you need loop to run at least once
//use while when you need to check condition first
