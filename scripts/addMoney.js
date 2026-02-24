document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = getInputValueById("account-number");
    const pinNumber = getInputValueById("pin");
    const amount = getInputValueById("amount");
    const mainBalance = getInnerTextById("main-balance");

    if (accountNumber.toString().length == 10) {
        if (pinNumber === 1234) {
            let sum = mainBalance + amount;
            setInnerTextByIdAndValue("main-balance", sum);
            setInputFieldEmpty("account-number");
            setInputFieldEmpty("amount");
            setInputFieldEmpty("pin");
        } else {
            alert("Wrong Pin Number")
        }
    } else {
        alert("Wrong Account Number")
    }
})