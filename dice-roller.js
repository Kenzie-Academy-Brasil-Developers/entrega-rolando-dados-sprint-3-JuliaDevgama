let d1 = 0
let d2 = 0

let count = [0,0,0,0,0,0,0,0,0,0,0]

for(let i = 0; i < 1000; i++){
    d1 = Math.floor(Math.random() * 6 + 1)
    d2 = Math.floor(Math.random() * 6 + 1)

    let rollOfDice = parseInt(d1+ d2)

    count[rollOfDice - 2] += 1
}

for(let x = 0; x <= 10; x++){
    document.write(`${x+2} : ${count[x]} <br>`)
}



