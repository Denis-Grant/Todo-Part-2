const form = document.querySelector('#form');
const li = document.querySelector('.trash');
const addToDo = document.querySelector('#addToDo');
const toDoList = [];
const ul = document.querySelector('ul.list');
var i = document.createElement('I');
var iClass = i.classList.add('fa','fa-trash','trash');

form.addEventListener('click', e =>{
    console.log(e.target);
    if (e.target.tagName === 'I'){
        e.target.parentElement.remove();
    }
});

addToDo.addEventListener('keypress', e =>{
    if (e.keyCode== 13 && addToDo.value.length > 0) {
        toDoList.push(addToDo.value);
        // toDoList.forEach(li => console.log(li));
        var item = document.createElement('LI');
        // var itemNode = document.createTextNode('Go shopping<i class="fa fa-trash trash" aria-hidden="true"></i>');
        var itemNode = document.createTextNode(addToDo.value);
        
        item.appendChild(itemNode);
        ul.appendChild(item);
        // .innerHTML += '<i class="fa fa-trash trash" aria-hidden="true">';
        item.innerHTML += '<i class="fa fa-trash trash" aria-hidden="true">';
        // ul.innerHTML += '<i class="fa fa-trash trash" aria-hidden="true">';
        addToDo.value = '';
    }
});
// NEW