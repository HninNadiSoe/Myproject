$(document).ready(function(){
	// console.log('hi');

	// Start Foundation

	// for search bar in foundation

	$("#search").keyup(function(){
		var getinput = $(this).val().toLowerCase();
		// console.log(getinput);


		$("#datatable tr").filter(function(){

					console.log($("datatable tr"));
					// console.log($(this));

					// $(this).log($(this).text());
					// $(this).log($(this).text().toLowerCase().indexOf(getinput));

					$(this).toggle($(this).text().toLowerCase().indexOf(getinput) > -1);
				});


	});
		



	// End Foundation

});
