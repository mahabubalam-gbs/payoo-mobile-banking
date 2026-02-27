document.getElementById("transfer-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("transfer-account").value;
    const pinNumber = getInputValueById("transfer-pin");
    const amount = getInputValueById("transfer-amount");
    const mainBalance = getInnerTextById("main-balance");

    if (accountNumber.length == 11) {
        if (pinNumber === 1234) {
            if (amount <= mainBalance) {
                let sum = mainBalance - amount;
                setInnerTextByIdAndValue("main-balance", sum);
                setInputFieldEmpty("transfer-account");
                setInputFieldEmpty("transfer-amount");
                setInputFieldEmpty("transfer-pin");
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