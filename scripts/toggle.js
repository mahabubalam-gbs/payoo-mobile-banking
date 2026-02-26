handleToggle("cashout", "none")
handleToggle("transfer", "none")

document.getElementById("add-money-card").addEventListener("click", function () {
    handleToggle("addmoney", "block")
    handleToggle("cashout", "none")
    handleToggle("transfer", "none")
})

document.getElementById("cash-out-card").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("transfer", "none")
    handleToggle("cashout", "block")
})

document.getElementById("transfer-money-card").addEventListener("click", function () {
    handleToggle("addmoney", "none")
    handleToggle("cashout", "none")
    handleToggle("transfer", "block")

})
