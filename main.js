
let resultFinal = document.createElement("p");

let forma = document.forms["forma"];

function getKMI(num1, num2) {
    return (num2 / ((num1 * num1) / 10000));
}
function info(num) {
    if (num < 18) {
        return "Svoris nepakankamas";
    } else if (num >= 18, 5 && num < 25) {
        return "Svoris normalus";
    } else if (num >= 25 && num < 30) {
        return "Antsvoris";
    } else (num > 30)
    return "Nutukimas";
}


forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let ugis = +e.target.elements.ugis.value;
    let svoris = +e.target.elements.svoris.value;
    let result = getKMI(ugis, svoris).toFixed(2);
    resultFinal.textContent = "Jūsų KMI yra " + result + " . " + info(result);
    body.appendChild(resultFinal);
});
