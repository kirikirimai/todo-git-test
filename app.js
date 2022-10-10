$("#addtodo").click(function(){
    const inpuTodo =$("input").val();
    $("#todolist").append("<li><input type='checkbox'"+inpuTodo+"</li>");

    $("input").val()

})