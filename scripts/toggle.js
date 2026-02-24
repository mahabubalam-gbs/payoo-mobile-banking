handleToggle("cashout", "none")

document.getElementById("add-money-card").addEventListener("click", function () {
    handleToggle("addmoney", "block")
    handleToggle("cashout", "none")
})

document.getElementById("cash-out-card").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("cashout", "block")
})

