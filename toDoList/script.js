
async function add(item){
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var span = document.createElement('span');

    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('class',checkbox);
    span.setAttribute('class',span);

    var newToDo = document.getElementById('newItem').value;
if(newToDo==""){
    document.getElementById('newItem').setAttribute('placeholder','Escreva algo!');
}else{

    var item = document.createTextNode(newToDo);
    span.appendChild(item);
    document.getElementById('lista').appendChild(label);
   label.appendChild(checkbox);
   label.appendChild(span);
}
}