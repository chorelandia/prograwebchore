$(document).ready(
	function(){
		console.log("hola desde jquery");
		//alert("hola desde jquery")
		$("img").click(
			function(){
				//$(this).width("20px");
				//$(this).hide("slow");
				$(this).attr('src','images/el gorrito.jpg');
		
			}
		);

		$("#btreiniciar").click(
			function(){
				//$(this).width("20px");
				
				$("img").show("slow");
			}
		);


	}
);
/*
$(selector)    1
h1             n
.ss4           n
#ss1           1
*/