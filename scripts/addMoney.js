document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin").value;
    const amount = document.getElementById("amount").value;
    const mainBalance = document.getElementById("main-balance").innerText;

    if (accountNumber.length == 11) {
        if (parseInt(pinNumber) === 1234) {
            let sum = parseFloat(mainBalance) + parseFloat(amount)
            document.getElementById("main-balance").innerText = sum;
        } else {
            alert("Wrong Pin Number")
        }
    } else {
        alert("Wrong Account Number")
    }
})