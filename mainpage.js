const input_boxes = document.getElementsByTagName("input")
const period = document.getElementsByTagName("select")
const submitButton = document.getElementsByTagName("button")

console.log(input_boxes)
console.log(period)


function checkInputs() {
    for (i = 0; i < 7; i++){
        if (input_boxes[i].value == ""){
            return false
        } 
    }
    return true
}


console.log(submitButton)

submitButton[0].addEventListener("click", function(){
    if (checkInputs){
        console.log("button active")
    } else {
        console.log("button disabled")
    }
})


// submitButton.disabled = true