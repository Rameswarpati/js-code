const addmore=()=>{
    let name = document.querySelector("#name").value
    if(name==''){
document.getElementById('error').innerHTML='please enter valid value'
    }else{
        let box = document.querySelector('#box')
        let li = document.createElement('li')
li.textContent= name



let a = document.createElement('a')
a.textContent='x'
a.href=''
li.appendChild(a)
box.appendChild(li)

    }
    document.querySelector("#name").value=''
}
let btn = document.querySelector('ul')
btn.addEventListener('click', function(e){
    let box = document.querySelector('#box')
    let li = e.target.parentNode
    box.removeChild(li)
})