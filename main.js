
let transactions = [200, 250, -100, 300, -500, 600]

let box = document.getElementById("box")

let activities = function (transactions){
    transactions.forEach(function(el) {
        let type = el > 0 ? "Deposit" : "Withdrawl"
        let html = `

        <div class="row">
        <div>
        ${type}
        </div>
        <div>
        ${el}
        </div>
        </div>
        `;
        box.insertAdjacentHTML("afterbegin", html)
    })
}
activities(transactions)

const withdrawl = transactions.filter(amount => amount < 0)


// BALANCE START//
//TRANSACTIONS  = [200, 250, -100, 300, -500, 600]//
const total = transactions.reduce((bal, cur) => bal + cur)
const updateBalance = function(transactions){
    let balance = document.getElementById("balance")

    return balance.innerText = total
}

updateBalance()
// BALANCE END//
