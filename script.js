var screen = document.querySelector('.calculator .screen input')
var actionButtons =  document.querySelectorAll('.calculator .opration .action button')

actionButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData = screen.value
        prevData =  prevData+button.getAttribute('data-attr').toString()
        screen.value = prevData
    })
})

var actionButtons =  document.querySelectorAll('.calculator .opration .number button')
actionButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData = screen.value
        prevData =  prevData+button.getAttribute('data-attr').toString()
        screen.value = prevData
    })
})

var clearButton = document.querySelector('.calculator .opration .number .clear')
var equalButton = document.querySelector('.calculator .opration .number .equal')

clearButton.addEventListener('click',()=>{
    screen.value=""
})

equalButton.addEventListener('click',()=>{
    let expression = screen.value
    let result = eval(expression)
    screen.value=result
})