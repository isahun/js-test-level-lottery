// Puedes confirgurar estos casos de test a la tecnología que más te guste, yo te propongo jest
import { expect, describe, test } from "@jest/globals"; 
import { playLottery } from "../src/scripts/lottery.js";


describe('lottery feature tests', () => {

        test('returns win when user number equals random number', () => {
        //Gherking test
        /**
         * Scenario: Usuario gana la lotería
         * Given el usuario ingresa el número 7
         * When el sistema genera aleatoriamente el número 7
         * Then se muestra "Win"
         */

        // Arrange
        let userInput = 7;
        let expected = {
            message: "Has guanyat!", 
            data: {
                userNumber: userInput, 
  		        randomNumber: 7 
            }
        }

        // Act
        let result = playLottery(userInput, expected.data.randomNumber); 
    
        // Assert
        expect(typeof userInput).toBe("number");
        expect(result).toBe(expected.message);
        expect(userInput).toEqual(expected.data.randomNumber);
        expect(result).toBe("Has guanyat!");
    });

        test('returns lose when user number is different from random number', () => {
        //Gherking test
        /**
         * Scenario: Usuario pierde la lotería
         * Given el usuario ingresa el número 4
         * When el sistema genera un número aleatorio distinto, por ejemplo 2
         * Then se muestra "Lose"
         */

            // Arrange
            let userInput = 7;
            let expected = {
                message: "Has perdut!", 
                data: {
                    userNumber: userInput, 
                    randomNumber: 9 
                }
            }
            // Act
            let result = playLottery(userInput, 9); 
            // Assert
            expect(typeof userInput).toBe("number");
            expect(result).toBe(expected.message);
            expect(result).toBe("Has perdut!");

        })

        test('returns error when input is not a number', () => {
            //Gherking test
            /**
             * Scenario: Entrada no numérica
             * Given la entrada "Hola"
             * When el usuario intenta procesar la jugada
             * Then se muestra un mensaje de error
             */
            
            // Arrange
            let userInput = "hola";
            let expected = "Has d'introduir un número de l'1 al 10";
            
            // Act
            let result = playLottery(userInput, 9); 
            // Assert
            expect(typeof userInput).toBe("string");
            expect(result).toBe(expected);
            expect(result).toBe("Has d'introduir un número de l'1 al 10");

        })

        test('returns error when number is outside valid range', () => {
            //Gherking test
            /**
             * Scenario: Número fuera de rango
             * Given el usuario ingresa el número 20
             * When el sistema valida el número
             * Then se muestra un mensaje indicando que debe ser entre 1 y 10
             */

              // Arrange
            let userInput = 11;
            let expected = "Has d'introduir un número de l'1 al 10";
            
            // Act
            let result = playLottery(userInput, 9); 
            // Assert
            expect(typeof userInput).toBe("NaN");
            expect(result).toBe(expected);
            expect(result).toBe("Has d'introduir un número de l'1 al 10");

        })
    }
)