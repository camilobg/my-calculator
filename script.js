let ce = document.querySelector(".ce")
let keys = [...document.querySelectorAll(".key")]
let screen = document.querySelector(".inner-screen")
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let operators = ["+", "-", "*", "/"]

let firstOperand = 1
let currentOperator = ""
let secondOperand = 0

ce.addEventListener("mousedown", () => {
    ce.style["box-shadow"] = "1px 1px 3px black"
})

ce.addEventListener("mouseup", () => {
    ce.style["box-shadow"] = "4px 4px 3px black"
})

ce.addEventListener("click", () => {
    screen.firstElementChild.textContent = "0"
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
            screen.firstElementChild.textContent += Number(key.firstChild.textContent).toString()
        }

        if(key.firstChild.textContent == "."){
            if(screen.firstElementChild.textContent == ""){
                screen.firstElementChild.textContent = "0."
            }else if(!screen.firstElementChild.textContent.includes(".")){
                screen.firstElementChild.textContent+= "."
            }
        }
        
        if(operators.includes(key.firstChild.textContent)){
            firstOperand = Number(screen.firstElementChild.textContent)
            currentOperator = key.firstChild.textContent
            screen.firstElementChild.textContent = "0"



            if(currentOperator == "+"){
                ans = firstOperand + secondOperand
            }else if(currentOperator == "-"){
                ans = firstOperand - secondOperand
            }else if(currentOperator == "*"){
                ans = firstOperand * secondOperand
            }else if(currentOperator == "/"){
                ans = firstOperand / secondOperand
            }

            
            firstOperand = ans
        }

        if(key.firstElementChild.textContent == "="){
            screen.firstElementChild.textContent = ans.toString()
        }
    })
}



