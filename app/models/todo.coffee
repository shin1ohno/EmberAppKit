Todo = DS.Model.extend
  dueDate: DS.attr( 'string' ),

  say: () ->
    due = @get('dueDate');
    if (due == undefined)
      return "lot to do!";
    else
      return "lot to do by #{due} !"

`export default Todo`
