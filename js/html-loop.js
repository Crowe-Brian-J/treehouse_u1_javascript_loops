const main = document.querySelector('main')
let html = ''

//<div>1</div>

//or i=1; i<=10; i++
for (let i = 5; i <= 100; i += 5) {
  html += `<div>${i}</div>`
}

main.innerHTML = html
