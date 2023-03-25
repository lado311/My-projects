let input = document.querySelector ('.card input');
let button = document.querySelector ('.butn');
let taskbox = document.querySelector ('.tasks-box');




button.addEventListener ('click' , function(event){


    if (input.value == '') {
        return false
    }


    let listcont = document.createElement('div');
    let list = document.createElement ('p');
    list.innerText = input.value;
    taskbox.appendChild(listcont);
    listcont.appendChild(list);
    listcont.classList.add('listcont');
    list.classList.add ('list')

    
    let listicons = document.createElement ('span');
    let succesful = document.createElement ('i');
    let trash = document.createElement ('i');
    listcont.appendChild (listicons);
    listicons.appendChild (succesful);
    listicons.appendChild (trash);

    listicons.classList.add ('listicons')
    trash.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    succesful.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    input.value = '';


    succesful.addEventListener ('click' , function(){
        listcont.classList.add ('acept');
    })

    trash.addEventListener ('click' , function(){
        listcont.remove ();
        
    })


   
     let delet = document.querySelector ('.deleteall');

     delet.addEventListener('click' , function deletal(){
         listcont.remove ();
     })


})


