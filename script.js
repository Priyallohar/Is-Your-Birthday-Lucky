const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const luckymessage = document.querySelector(".lucky-number-message");
const errorMessage = document.querySelector(".error-message");
const checkButton = document.querySelector(".check-btn");
const unluckymessage = document.querySelector(".unlucky-number-message");

luckymessage.style.display = "none";
unluckymessage.style.display = "none";
errorMessage.style.display = "none"

checkButton.addEventListener('click', valueCheck);

function valueCheck() {
    const birthDate = dateOfBirth.value;
    const luckyNumbervalue = luckyNumber.value;

    if (birthDate === "" || luckyNumbervalue === ""||Number(luckyNumber)<0) {
        errorMessage.style.display = "block";
        luckymessage.style.display = "none";
        unluckymessage.style.display = "none";
    } else {
        errorMessage.style.display = "none"
        sumDOB()
    }
}


function sumDOB() {
    let dob = dateOfBirth.value.replaceAll("-", "");
    let addDOB = 0;
    for (let i = 0; i < dob.length; i++) {
        addDOB += Number(dob[i]);
    }
    checkLuckyNumber(dob);
}

function checkLuckyNumber(dob) {
    luckymessage.style.display = "none";
    unluckymessage.style.display = "none";

    const newLuckyNumebr = Number(luckyNumber.value);

    if (dob % newLuckyNumebr === 0) {
        luckymessage.style.display = "block";
    } else {
        unluckymessage.style.display = "block";
    }
}
