
$(function() {
	$(".devour-burger").on("click", function(){
		console.log('Button clicked!')
		console.log($(this).data());

		var id = $(this).data('id');

		$.ajax("/api/burgers/" + id, {
	      type: "PUT",
	      data: {devoured: 1}
	    }).then(
	      function() {
	        location.reload();
	      }
	    );
	});

	$(".newBurger").on("submit", function(event){
		event.preventDefault();
		console.log('Adding new burger')
		var burgerName = $("#burger-name").val();

		console.log(burgerName);
		$.ajax("/api/burgers", {
			type: "POST",
			data: {burgerName: burgerName}
		}).then(
		  function() {
	        location.reload();
	      }
	    );
	});
});


console.log('button scripts loaded')