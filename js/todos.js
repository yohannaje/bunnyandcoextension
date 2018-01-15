// check off specific todos by clicking

$(".ul-list").on("click", ".list", function(){
	$(this).toggleClass("completed");
});

//click on x to delete todo
$(".ul-list").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//creation of new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".ul-list").append("<li class='list'> <span class='notespan'> <i class='fa fa-trash' aria-hidden='true'></i> </span>" + todoText + "</li>");
		
	}

});
