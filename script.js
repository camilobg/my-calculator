function operate(a, b ,operator){
    let ans = 0

    if(operator == "+"){
        ans = a + b
    }else if(operator == "-"){
        ans = a - b
    }else if(operator == "*"){
        ans = a * b
    }else if(operator == "/"){
        ans = a / b
    }
    if(b == 0 && operator == "/") return "Error"
    return ans
}

let ce = document.querySelector(".ce")
let keys = [...document.querySelectorAll(".key")]
let screen = document.querySelector(".inner-screen")
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let operators = ["+", "-", "*", "/"]

let firstOperand = 0
let secondOperand = 0
let erase = false
let newOperator = false
let operatorStack = ""



ce.addEventListener("mousedown", () => {
    ce.style["box-shadow"] = "1px 1px 3px black"
})

ce.addEventListener("mouseup", () => {
    ce.style["box-shadow"] = "4px 4px 3px black"
})

ce.addEventListener("click", () => {
    screen.firstElementChild.textContent = "0"
    firstOperand = 0
    secondOperand = 0
    operatorStack = ""
})



for(let key of keys){
    key.addEventListener("mousedown", () => {
        key.style["box-shadow"] = "1px 1px 3px black"
    })

    key.addEventListener("mouseup", () => {
        key.style["box-shadow"] = "4px 4px 3px black"
    })

    key.addEventListener("click", () => {
        

        if(digits.includes(key.firstChild.textContent)){
            if(screen.firstElementChild.textContent == "0"){
                screen.firstElementChild.textContent = ""
            }
            
            if(erase){
                screen.firstElementChild.textContent = ""
                erase = false
            }
            screen.firstElementChild.textContent += Number(key.firstChild.textContent).toString()
            console.log(`Pantalla: ${screen.firstElementChild.textContent}`);
        }

        if(key.firstChild.textContent == "."){
            if(screen.firstElementChild.textContent == ""){
                screen.firstElementChild.textContent = "0."
            }else if(!screen.firstElementChild.textContent.includes(".")){
                screen.firstElementChild.textContent+= "."
            }
        }
        
        if(operators.includes(key.firstChild.textContent)){
            
            operatorStack+= key.firstChild.textContent

            if(operatorStack.length > 1){
                console.log("operacion anidada");
                console.log(`firstOperand: ${firstOperand}`);
                console.log(`secondOperand: ${secondOperand}`);

                secondOperand = Number(screen.firstElementChild.textContent)
                screen.firstElementChild.textContent = operate(firstOperand, secondOperand, operatorStack[operatorStack.length-2])
            }
            
            firstOperand = Number(screen.firstElementChild.textContent)
            console.log(`Primer operador: ${firstOperand}`);

            console.log(`Operador: ${operatorStack[operatorStack.length-1]}`);

            erase = true
            newOperator = true
        }

        if(key.firstElementChild.textContent == "="){
            

            if(newOperator){
                secondOperand = Number(screen.firstElementChild.textContent)
            }
            console.log(`Segundo operador: ${secondOperand}`);
            
            let ans = operate(firstOperand, secondOperand, operatorStack[operatorStack.length-1])
            

            console.log(`Resultado: ${ans}`);
            


            screen.firstElementChild.textContent = ans.toString()

            firstOperand = ans
            newOperator = false
            erase = true

            ans = 0
            //operatorStack = ""
        }
    })
}



