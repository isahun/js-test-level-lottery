// Lógica de la UI

export function playLottery(userNum, numPC) {
    if (typeof userNum !== "number" || isNaN(userNum) || userNum == "" || userNum > 10 || userNum <= 0) {
        throw new Error("Has d'introduir un número de l'1 al 10");
    }

    if (userNum !== numPC) return "Has perdut!";
    if (userNum == numPC) return "Has guanyat!";
}