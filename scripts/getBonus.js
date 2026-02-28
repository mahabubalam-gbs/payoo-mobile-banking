document.getElementById("bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const coupon = document.getElementById("coupon").value;
    const mainBalance = getInnerTextById("main-balance");
    console.log(coupon.toLowerCase())

    if (coupon.toLowerCase().trim() === 'ramadan') {
        const newBalance = mainBalance + 10
        setInnerTextByIdAndValue("main-balance", newBalance);
        setInputFieldEmpty("coupon");
    } else {
        alert("Invalid Coupon!")
    }
})