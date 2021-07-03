const addToDoButton = document.getElementById('addToDo');
const inputField = document.getElementById('input-field');
const toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = '';
    paragraph.classList.add('paragraph-styling');

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    });
});
