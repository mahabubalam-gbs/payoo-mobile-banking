document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("cashout-account").value;
    const pinNumber = getInputValueById("cashout-pin");
    const amount = getInputValueById("cashout-amount");
    const mainBalance = getInnerTextById("main-balance");

    if (accountNumber.length == 11) {
        if (pinNumber === 1234) {
            if (amount <= mainBalance) {
                let sum = mainBalance - amount;
                setInnerTextByIdAndValue("main-balance", sum);
                setInputFieldEmpty("cashout-account");
                setInputFieldEmpty("cashout-amount");
                setInputFieldEmpty("cashout-pin");
            } else {
                alert("Insufficient Amount")
            }

        } else {
            alert("Wrong Pin Number");
        }
    } else {
        alert("Wrong Account Number");
    }
})