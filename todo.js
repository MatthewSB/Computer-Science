var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    deleteAll = document.getElementById('deleteAll')
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  field.value=""
  evt.preventDefault();
}, false); 
//this will submit anything that I have written in the bar

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);
//this will reset anything that I have written in my bar

deleteAll.addEventListener('click', function(evt) {
  todo.innerHTML = "";
  evt.preventDefault();
  
});
//this will delete anything that is already on the cheack list