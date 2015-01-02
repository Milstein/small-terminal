// Keybard Map Debugging
// enter = 13

// $("#term-command").keypress(function(e){
// 	alert(e.which);
// })


$("#term-command").keypress(function(e){
	function output(o){
		$("#terminal>#term-inner").append("<p id='term-output'>"+o+"</p>")
	}

	if (e.which === 13) {
		// console.log($("#term-command").val());
		var cmd = $("#term-command").val();
		switch(cmd){
			case "help":
				output("help!");
				break;
			case "mom":
				output("night!");
				break;
			default:
				output("Command not found! Use 'help' for a list of commands");
				break;
		}
	};
})
