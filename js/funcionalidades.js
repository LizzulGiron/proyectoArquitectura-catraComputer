$(document).ready(function(){
	$('#txt-ubicacion-1').val("001");
	$('#txt-ubicacion-2').val("002");
	$('#txt-ubicacion-3').val("003");
	$('#txt-ubicacion-4').val("004");
	$('#txt-ubicacion-5').val("005");
	$('#txt-ubicacion-6').val("006");
	$('#txt-ubicacion-7').val("007");
	$('#txt-ubicacion-8').val("008");
	$('#txt-ubicacion-9').val("009");
	$('#txt-ubicacion-10').val("010");
	$('#txt-ubicacion-11').val("011");
	$('#txt-ubicacion-12').val("012");
	$('#txt-ubicacion-13').val("013");
	$('#txt-ubicacion-14').val("014");
	$('#txt-ubicacion-15').val("015");
	$('#txt-ubicacion-16').val("016");
	$('#txt-ubicacion-17').val("017");
	$('#txt-ubicacion-18').val("018");
	$('#txt-ubicacion-19').val("019");
	$('#txt-ubicacion-20').val("020");

	$('#btn-limpiar').click(function(){
     $('#txt-contenido-1').val("");
     $('#txt-contenido-2').val("");
     $('#txt-contenido-3').val("");
     $('#txt-contenido-4').val("");
     $('#txt-contenido-5').val("");
     $('#txt-contenido-6').val("");
     $('#txt-contenido-7').val("");
     $('#txt-contenido-8').val("");
     $('#txt-contenido-9').val("");
     $('#txt-contenido-10').val("");
     $('#txt-contenido-11').val("");
     $('#txt-contenido-12').val("");
     $('#txt-contenido-13').val("");
     $('#txt-contenido-14').val("");
     $('#txt-contenido-15').val("");
     $('#txt-contenido-16').val("");
     $('#txt-contenido-17').val("");
     $('#txt-contenido-18').val("");
     $('#txt-contenido-19').val("");
     $('#txt-contenido-20').val("");
     $('#txt-instruccion-1').val("");
     $('#txt-instruccion-2').val("");
     $('#txt-instruccion-3').val("");
     $('#txt-instruccion-4').val("");
     $('#txt-instruccion-5').val("");
     $('#txt-instruccion-6').val("");
     $('#txt-instruccion-7').val("");
     $('#txt-instruccion-8').val("");
     $('#txt-instruccion-9').val("");
     $('#txt-instruccion-10').val("");
     $('#txt-instruccion-11').val("");
     $('#txt-instruccion-12').val("");
     $('#txt-instruccion-13').val("");
     $('#txt-instruccion-14').val("");
     $('#txt-instruccion-15').val("");
     $('#txt-instruccion-16').val("");
     $('#txt-instruccion-17').val("");
     $('#txt-instruccion-18').val("");
     $('#txt-instruccion-19').val("");
     $('#txt-instruccion-20').val("");





});

	$('#btn-compilar').click(function(){


     var arrayInstrucciones = new array(12);
     for(i=0; i<2; i++){
      arrayInstrucciones[i]= new array(2);
     }



     arrayInstrucciones[0][0] = 10;
     arrayInstrucciones[0][1] = 'Leer';

     arrayInstrucciones[1][0] = 11;
     arrayInstrucciones[1][1] = 'Escribir';

     arrayInstrucciones[2][0] = 20;
     arrayInstrucciones[2][1] = 'Cargar';

     arrayInstrucciones[3][0] = 21;
     arrayInstrucciones[3][1] = 'Almacenar';

     arrayInstrucciones[4][0] = 30;
     arrayInstrucciones[4][1] = 'Sumar';

     arrayInstrucciones[5][0] = 31;
     arrayInstrucciones[5][1] = 'Restar';

     arrayInstrucciones[6][0] = 32;
     arrayInstrucciones[6][1] = 'Dividir';

     arrayInstrucciones[7][0] = 33;
     arrayInstrucciones[7][1] = 'Multiplicar';

     arrayInstrucciones[8][0] = 40;
     arrayInstrucciones[8][1] = 'Bifurca';

     arrayInstrucciones[9][0] = 41;
     arrayInstrucciones[9][1] = 'Bifurca negativo';

     arrayInstrucciones[10][0] = 42
     arrayInstrucciones[10][1] = 'Bifurca cero';

     arrayInstrucciones[11][0] = 43;
     arrayInstrucciones[11][1] = 'Alto';

		var regex = /^(10|11|20|21|30|31|32|33|40|41|42|43)[0-9]{3}$/;
       	for (var i = 1; i  < 2; i++) {

       		var input = "#txt-contenido-"+i+"";
       		var cadena = $(input).val();
       		var contenido = regex.test(cadena.trim());
       		var subcadena = cadena.substring(2,5);
       		if ((contenido) && (subcadena == '001')) {
       			$(input).css("background-color", "white");
 				alert('correcto');
    		}
    		else
    			$(input).focus();
    		    $(":focus").css("background-color", "#D5F5E3");
       	}




        //Prueba de la correspondencia de la instruccion
        var input2 = "#txt-instruccion-"+i+"";
        var subcadena2 = cadena.substring(0,2);
        for (var i = 0; i < 12; i++) {
          if (arrayInstrucciones[i] == subcadena2) {
              var instruccion = arrayInstrucciones[i][1];
              $(input2).val(instruccion);
          }
        }

	})

	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var paso = $(e.target).data('paso');
		var porcentaje = (parseInt(paso) / 4) * 100;
		$('.progress-bar').css({width: porcentaje + '%'});
		$('.progress-bar').text("Paso " + paso + " de 4");
	})

    $('#txt-fecha').click(function(){
		$("#txt-fecha").datepicker();
	})

	$('#personal').click(function(){
 		var nombre = $("#txt-nombre").val();
 		var apellido = $("#txt-apellido").val();
 		var fecha = $("#txt-fecha").val();
 		if (nombre=="") {
 			$("#mensaje1").fadeIn("slow");
                  return false;
 		}
 		else{
 			$("#mensaje1").fadeOut();
 			if (apellido=="") {
 				$("#mensaje2").fadeIn("slow");
 				return false;
 			}
 			else{
 				$("#mensaje2").fadeOut();
 				if (fecha=="") {
 					$("#mensaje3").fadeIn("slow");
 					return false;
 				}
 				else{
 					$("#mensaje3").fadeOut();
 					$('.nav-pills a[href="#'+'paso2'+'"]').tab('show');
 							
 				}
 			}
 		}		
 	})

 	$('#social').click(function(){
 		$('.nav-pills a[href="#'+'paso3'+'"]').tab('show');
 	})

			$('#seguridad').click(function(){
 				var correo = $("#txt-correo").val();
 				var contraseña = $("#txt-contraseña").val();
 				var contraseña2 = $("#txt-contraseña2").val();
 				if (correo=="") {
 					$("#mensaje4").fadeIn("slow");
                    return false;
 				}
 				else{
 					$("#mensaje4").fadeOut();
 					var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
 					if (regex.test($('#txt-correo').val().trim())) {
 							$("#mensaje8").fadeOut();
    				}
    				else {
        				
        				$("#mensaje8").fadeIn("slow");
                    	return false;
    				}
 					if (contraseña=="") {
 						$("#mensaje5").fadeIn("slow");
 						return false;
 					}
 					else{
 						$("#mensaje5").fadeOut();
 						if (contraseña2=="") {
 							$("#mensaje6").fadeIn("slow");
 							return false;
 						}
 						else{
 							$("#mensaje6").fadeOut();
 							if (contraseña!=contraseña2) {
 								$("#mensaje7").fadeIn("slow");
 							}
 							else{
 								$("#mensaje7").fadeOut();
 								$('.nav-pills a[href="#'+'paso4'+'"]').tab('show');
 							}
 						}
 					}
 				}

 				
 			})

 			//Limpiar los campos del formulario
 			$('.first').click(function(){
				 $('#miAsistente a:first').tab('show');
				 $("#txt-nombre").val("");
				 $("#txt-apellido").val("");
				 $("#txt-fecha").val("");
				 $("#txt-facebook").val("");
				 $("#txt-twitter").val("");
				 $("#txt-youtube").val("");
				 $("#txt-pagina-web").val("");
				 $("#txt-correo").val("");
				 $("#txt-contraseña").val("");
				 $("#txt-contraseña2").val("");

 			})

});
