handleToggle("cashout", "none");
handleToggle("transfer", "none");
handleToggle("bonus", "none");
handleToggle("paybill", "none");

document.getElementById("add-money-card").addEventListener("click", function () {
    handleToggle("addmoney", "block");
    handleToggle("cashout", "none");
    handleToggle("transfer", "none");
    handleToggle("bonus", "none");
    handleToggle("paybill", "none");
});

document.getElementById("cash-out-card").addEventListener("click", function () {
    handleToggle("addmoney", "none");
    handleToggle("transfer", "none");
    handleToggle("bonus", "none");
    handleToggle("paybill", "none");
    handleToggle("cashout", "block");
});

document.getElementById("transfer-money-card").addEventListener("click", function () {
    handleToggle("addmoney", "none");
    handleToggle("cashout", "none");
    handleToggle("bonus", "none");
    handleToggle("paybill", "none");
    handleToggle("transfer", "block");

});

document.getElementById("get-bonus-card").addEventListener("click", function () {
    handleToggle("bonus", "block");
    handleToggle("addmoney", "none");
    handleToggle("cashout", "none");
    handleToggle("transfer", "none");
    handleToggle("paybill", "none");
});

document.getElementById("pay-bill-card").addEventListener("click", function () {
    handleToggle("addmoney", "none");
    handleToggle("cashout", "none");
    handleToggle("transfer", "none");
    handleToggle("bonus", "none");
    handleToggle("paybill", "block");
})
