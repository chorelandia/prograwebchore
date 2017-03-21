$(document).ready(
	function(){
		//console.log("hola desde jquery");
		//alert("hola desde jquery")




		/*$("#im0").click(
			function(){
				//$(this).width("20px");
			$(this).hide("slow");
				//$(this).attr('src','images/frijol.png');
		
			}
		);*/


		//----------------------------
		var cartas = ["","","","","","","","","",""];
		var x3 = setInterval(arreglo,0);
		function arreglo(){

		var z = Math.floor((Math.random() * 10) + 1);
			
			//console.log(z);
	
				
			
				if (z!=cartas [0] &&z!=cartas [1] && z!=cartas [2] && z!=cartas [3] && z!=cartas [4] && z!=cartas [5] && z!=cartas [6] && z!=cartas [7] && z!=cartas [8] && z!=cartas [9]) {//condicion para que no se repita el numero
					
					cartas.unshift(z);//agrega al inicio del arreglo
					cartas.pop();//borra el  ultimo dato

				}
				else{
					x=null;

				}
			
			//console.log(cartas);
		}

		//------------------------------


		var cartasPasadas = ["","","","","","","","","",""];//arreglo donde se guardaran las cartas que ya pasaron
		var x = setInterval(rotarImagenes,5000);//tiempo entre imagen e imagen
		var frij1=0, frij2=0, frij3=0, frij4=0, frij5=0, frij6=0, frij7=0, frij8=0, frij9=0, frij10=0 ;
		var c = 0;//mi contador para que avance por el arreglo
		var tam = 0; //variable con el numero del tamaño del arreglo
		function rotarImagenes(){
			
			var coparre = cartas.slice();//copia el arreglo cartas a otro que se llama coparre

			tam=coparre.length;
			if (c<tam) {
				
				$("#cambio").attr('src', 'images/'+(coparre[c])+'.jpg');
				cartasPasadas.push(coparre[c]);//agrega al final
				cartasPasadas.shift();//elimina al inicio

			}
			else{
				x=null;//detiene el ciclo de seguir buscando un numero nuevo para ingresar al arreglo cartas
			}
			c++;//aumenta en 1 para el avance en el arreglo
			console.log(c);
			//console.log("variable c");
			
			//console.log("catas");
			//console.log(cartas);
			console.log("copia de cartas");
			console.log(coparre);
			console.log("cartas que ya pasaron");
			console.log(cartasPasadas);


			//var i=0;

	
				
			

        	if (cartasPasadas[0]==1 || cartasPasadas[1]==1 || cartasPasadas[2]==1 || cartasPasadas[3]==1 || cartasPasadas[4]==1 || cartasPasadas[5]==1 || cartasPasadas[6]==1 || cartasPasadas[7]==1 || cartasPasadas[8]==1 || cartasPasadas[9]==1) {
        		$("#im1").click(
            		function(){

                	
                		$("#fri1").show("fast");
                		frij1=1;
            		}
        		);
			}

			if (cartasPasadas[0]==2 || cartasPasadas[1]==2 || cartasPasadas[2]==2 || cartasPasadas[3]==2 || cartasPasadas[4]==2 || cartasPasadas[5]==2 || cartasPasadas[6]==2 || cartasPasadas[7]==2 || cartasPasadas[8]==2 || cartasPasadas[9]==2) {
        		$("#im2").click(
            		function(){

                	
                		$("#fri2").show("fast");
                		frij2=1;
            		}
        		);
			}

			if (cartasPasadas[0]==3 || cartasPasadas[1]==3 || cartasPasadas[2]==3 || cartasPasadas[3]==3 || cartasPasadas[4]==3 || cartasPasadas[5]==3 || cartasPasadas[6]==3 || cartasPasadas[7]==3 || cartasPasadas[8]==3 || cartasPasadas[9]==3) {
        		$("#im3").click(
            		function(){

                		$("#fri3").show("fast");
                		frij3=1;
            		}
        		);
			}

			if (cartasPasadas[0]==4 || cartasPasadas[1]==4 || cartasPasadas[2]==4 || cartasPasadas[3]==4 || cartasPasadas[4]==4 || cartasPasadas[5]==4 || cartasPasadas[6]==4 || cartasPasadas[7]==4 || cartasPasadas[8]==4 || cartasPasadas[9]==4) {
        		$("#im4").click(
            		function(){

                
                		$("#fri4").show("fast");
                		frij4=1;
            		}
        		);
			}

			if (cartasPasadas[0]==5 || cartasPasadas[1]==5 || cartasPasadas[2]==5 || cartasPasadas[3]==5 || cartasPasadas[4]==5 || cartasPasadas[5]==5 || cartasPasadas[6]==5 || cartasPasadas[7]==5 || cartasPasadas[8]==5 || cartasPasadas[9]==5) {
        		$("#im5").click(
            		function(){

                	
                		$("#fri5").show("fast");
                		frij5=1;
            		}
        		);
			}

			if (cartasPasadas[0]==6 || cartasPasadas[1]==6 || cartasPasadas[2]==6 || cartasPasadas[3]==6 || cartasPasadas[4]==6 || cartasPasadas[5]==6 || cartasPasadas[6]==6 || cartasPasadas[7]==6 || cartasPasadas[8]==6 || cartasPasadas[9]==6) {
        		$("#im6").click(
            		function(){

                	
                		$("#fri6").show("fast");
                		frij6=1;
            		}
        		);
			}

			if (cartasPasadas[0]==7 || cartasPasadas[1]==7 || cartasPasadas[2]==7 || cartasPasadas[3]==7 || cartasPasadas[4]==7 || cartasPasadas[5]==7 || cartasPasadas[6]==7 || cartasPasadas[7]==7 || cartasPasadas[8]==7 || cartasPasadas[9]==7) {
        		$("#im7").click(
            		function(){

                	
                		$("#fri7").show("fast");
                		frij7=1;
            		}
        		);
			}

			if (cartasPasadas[0]==8 || cartasPasadas[1]==8 || cartasPasadas[2]==8 || cartasPasadas[3]==8 || cartasPasadas[4]==8 || cartasPasadas[5]==8 || cartasPasadas[6]==8 || cartasPasadas[7]==8 || cartasPasadas[8]==8 || cartasPasadas[9]==8) {
        		$("#im8").click(
            		function(){

                	
                		$("#fri8").show("fast");
                		frij8=1;
            		}
        		);
			}

			if (cartasPasadas[0]==9 || cartasPasadas[1]==9 || cartasPasadas[2]==9 || cartasPasadas[3]==9 || cartasPasadas[4]==9 || cartasPasadas[5]==9 || cartasPasadas[6]==9 || cartasPasadas[7]==9 || cartasPasadas[8]==9 || cartasPasadas[9]==9) {
        		$("#im9").click(
            		function(){

                	
                		$("#fri9").show("fast");
                		frij9=1;
            		}
        		);
			}

			if (frij1==1 && frij2==1 && frij3==1 && frij4==1 && frij5==1 && frij6==1 && frij7==1 && frij8==1 && frij9==1) {
        	
           		alert("GANASTE"); 
           	//	$("#finaliza").click(function(){
    		//		$("#funciones").finish();
			//	});  		
			}

			if (c==11) {//en el lapso 11 hace conteo de todo

				alert("PERDISTE!!");
			//	$("#finaliza").click(function(){
    		//		$("#funciones").finish();
			//	}); 
			

			}
			console.log("control de cartas con frijol");
			console.log(frij1);
			console.log(frij2);
			console.log(frij3);
			console.log(frij4);
			console.log(frij5);
			console.log(frij6);
			console.log(frij7);
			console.log(frij8);
			console.log(frij9);
			console.log(frij10);

		
        
		}//rotar imagenes



		

		/*
		$("#btreiniciar").click(
			function(){
				//$(this).width("20px");
				
				$("img").show("slow");
			}
		);*/

		$("#btreiniciar").click(
			function(){

				location.href ="javascript:location.reload()"
				//$("#fri1").hide("slow");
              //  $("#fri2").hide("slow");
             //   $("#fri3").hide("slow");
             //   $("#fri4").hide("slow");
             //   $("#fri5").hide("slow");
             //   $("#fri6").hide("slow");
             //   $("#fri7").hide("slow");
            //    $("#fri8").hide("slow");
             //   $("#fri9").hide("slow");
               // i=0;
			}
		);

		
		


	}//funcion principal
);
/*
$(selector)    1
h1             n
.ss4           n
#ss1           1
*/