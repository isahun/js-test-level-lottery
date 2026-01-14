import { playLottery } from "./lottery";
import { printResult } from "./dom";

export const button = document.getElementById("button");
export const input = document.getElementById("userNum");

button.addEventListener("click", () => {
    let response;
    
    try {
        const userNum = Number(input.value);
        const numPC = Math.floor(Math.random()*10) + 1;
        const result = playLottery(userNum, numPC);

        response = {
            status: "success",
            message: result,
            data: {
                userNumber: userNum,
                randomNum: numPC
            }
        }
    } catch (error) {
        response = {
            status: "error",
            message: error.message,
            data: null
        }
    }
});