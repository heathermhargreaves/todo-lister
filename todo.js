$('document').ready(function() {
      var todoApp = $('#todoApp');
      var todoTitle = $('<h1>Todo App</h1>');
      var todoInput = $('<input placeholder=\'add an item...\'></input>');
      var todoAddItemButton = $('<button>Add</button>');
      var todoClearButton = $('<button>Clear Done</button>');
      var todoList = $('<ul></ul>');
      var todoItem = $('<li></li>');

      todoApp.append(todoTitle);
      //input
      todoApp.append(todoInput);
      //addButton
      todoApp.append(todoAddItemButton);
      //ClearButton
      todoApp.append(todoClearButton);
      //List
      todoApp.append(todoList);

      //
      todoAddItemButton.click(function(){
        var inputText = todoInput.val();
        var itemClone = todoItem.clone();
        itemClone.text(inputText);
        todoList.append(itemClone);

        todoInput.val('');


      });

      todoInput.keypress(function(e){
        if(e.which === 13) {
          todoAddItemButton.click();
        }
      });

      todoList.on('click', 'li', (function() {
        var listItem = $(this);

        listItem.toggleClass('done');

      }));

      todoClearButton.click(function() {
        $('.done').remove();
      });

      // styling
      todoClearButton.css('margin-bottom', '25px');
      todoClearButton.css('background', '#f44336');
      todoAddItemButton.css('background', '#2980B9');

});
