
$('.weight').mask('000.00')
$('.height').mask('0.00')

const button = document.querySelector('button')

function convertvalue() {
    const weight = document.querySelector('.weight').value
    const height = document.querySelector('.height').value
    const result = weight / (height * height)
    
    if(result > 24.9 ){
        swal('Você está acima do peso', ' Seu índice de massa corporal é de : ' + result.toFixed(2))
    }else if(result < 18.5){
        swal('Você está abaixo do peso ideal', ' Seu índice de massa corporal é de : ' + result.toFixed(2))

    } else{
        swal('Você está com peso ideal', 'Seu índice de massa corporal é de : ' + result.toFixed(2))
    }
}

button.addEventListener('click', convertvalue)