function getInputValueById(id) {
    const value = document.getElementById(id).value.trim();
    return parseFloat(value);
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}

function setInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

function setInputFieldEmpty(id) {
    document.getElementById(id).value = " ";
}

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}