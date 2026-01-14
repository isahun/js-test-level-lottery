export function printResult(response) {
    const result = document.getElementById("result");
    const paragraph = document.createElement("p");

    if (response.status === "success") {
        paragraph.textContent = `Ingressat: ${response.data.userNumber} | Aleatori: ${response.data.randomNum} | Resultat: ${response.message}`
    } else {
        paragraph.textContent = response.message;
    }

    result.appendChild(paragraph);
}