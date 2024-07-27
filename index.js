let userElem = document.querySelector('.username')
let passElem = document.querySelector('.password')
let modal = document.querySelector('.modal')


function Validiation(){
    let uservalue = userElem.value
    let passwordvalue = passElem.value

    if(uservalue.length < 12 || passwordvalue.length < 8){
        modal.style.display = 'inline'

        setTimeout(function(){
            modal.style.display = 'none'
        },3000)
    }
    else{
        modal.style.display = 'inline'
        modal.style.background = 'green'
        modal.innerHTML = 'اطلاعات به درستی وارد شده است.'
        setTimeout(function(){
            modal.style.display = 'none'
        },3000)
    }

    console.log(uservalue + passwordvalue)
    // if(uservalue.lentgh > 12 )
    // alert('yes')
}
