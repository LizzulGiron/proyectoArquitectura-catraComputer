$(document).ready(function(){
  $('#txt-contenedor-0').val("000");
  $('#txt-contenedor-1').val("001");
  $('#txt-contenedor-2').val("002");
  $('#txt-contenedor-3').val("003");
  $('#txt-contenedor-4').val("004");
  $('#txt-contenedor-5').val("005");
  $('#txt-contenedor-6').val("006");
  $('#txt-contenedor-7').val("007");
  $('#txt-contenedor-8').val("008");
  $('#txt-contenedor-9').val("009");
  $('#txt-contenedor-10').val("010");
  $('#txt-contenedor-11').val("011");
  $('#txt-contenedor-12').val("012");
  $('#txt-contenedor-13').val("013");
  $('#txt-contenedor-14').val("014");
  $('#txt-contenedor-15').val("015");
  $('#txt-contenedor-16').val("016");
  $('#txt-contenedor-17').val("017");
  $('#txt-contenedor-18').val("018");
  $('#txt-contenedor-19').val("019");
  $('#btn-interfaz').hide();
  $('#div-mensaje').hide();


 //
  
//-----------------------------------------------------------------------


for (var i = 0; i < 20; i++) {
    document.getElementById('div-depuracion').innerHTML += '<table style="margin-top:10px;"><tr>'+
                                            '<td>'+
                                                '<label>Instruccion</label>'+
                                                '&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-decodificacion-'+i+'" id="txt-decodificacion-'+i+'" style="width: 50px;border-radius: 8px">'+
                                            '</td>'+
                                            '<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>'+
                                            '<td>'+
                                               '<label>Direccion:</label>'+
                                               '&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-direccion-'+i+'" id="txt-direccion-'+i+'" style="width: 50px;border-radius:8px">'+
                                            '</td>'+
                                            '</tr></table>'+
                                            '<hr>'+
                                            '<table>'+
                                                '<tr>'+
                                                   '<td><label >PC:</label></td>'+
                                                   '<td>&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-pc-'+i+'" id="txt-pc-'+i+'"></td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td><label >Acumulador:</label></td>'+
                                                    '<td>&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-acumulador-'+i+'" id="txt-acumulador-'+i+'"><br></td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td><label>IR:</label></td>'+
                                                    '<td>&nbsp&nbsp&nbsp<input type="text" style="color:black" name="txt-ir-'+i+'" id="txt-ir-'+i+'"></td>'+
                                                '</tr>'+
                                            '</table><hr>';
}

//############################################################################
$('#btn-limpiar').click(function(){
    for (var i = 0; i < 20; i++) {
        var contenido = '#txt-contenido-'+i;
        $(contenido).val(" ");
      
    }
    for (var i = 0; i < 20; i++) {
        var instruccion = '#txt-instruccion-'+i;
        $(instruccion).val(" ");
      
    }

});
//############################################################################
$('#btn-ejecutar').click(function(){
    $("#btn-interfaz").show();
    $("#btn-compilar").hide();
    $("#btn-depurar").hide();
    $("#btn-ejecutar").hide();
    $("#txt-pc-ejecucion").val(" ");
    $("#txt-acumulador-ejecucion").val(" ");
    $("#txt-ir-ejecucion").val(" ");
    $("#txt-resultado").val(" ");
    $("#btn-limpiar").hide();
    compilar();
    if (compilar) {
        ejecutar();
    }
    else{
        compilar();
    }
    
    
});
//############################################################################
function ejecutar(){
    //$("#txt-acumulador-ejecucion").val('000');

    for (var i = 0; i < 20; i++) {
           var input = "#txt-contenido-"+i+"";
           var cadena = $(input).val();
           var subcadena1 = cadena.substring(0,2);
           var subcadena = cadena.substring(2,5);
           switch(subcadena1){
            //-----------------------------------------------------------------------------
             case '10':
                var subcadena = cadena.substring(2,5);
                var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
                var ubicacion = '#txt-ubicacion-'+subcadena;
                $(ubicacion).val(numero);
                if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '11':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido != "") {
                    document.getElementById("txt-pantalla").innerHTML = contenido;
                 }
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    document.getElementById("txt-pantalla").innerHTML = almacenar;
                 }
                 
                 if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                 if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                 }
                 $("#txt-ir-ejecucion").val(cadena);
             break;
//-----------------------------------------------------------------------------
             case '20':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    $("#txt-acumulador-ejecucion").val(almacenar);
                 }
                 if (contenido != "") {
                    $("#txt-acumulador-ejecucion").val(contenido);
                 }
                 if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '21':
                var acumulador = $('#txt-acumulador-ejecucion').val();
                var ubicacion = "#txt-ubicacion-"+subcadena;
                $(ubicacion).val(acumulador);
                if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '30':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar + acumulador1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = contenido1 + acumulador1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '31':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = acumulador1 - almacenar;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   acumulador1 - contenido1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '32':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar / acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   contenido1 / acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '33':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar * acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   contenido1 * acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (i < 10) {
                    var acumuladorEjecucion = "00"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                if (i > 9 && i < 21) {
                    var acumuladorEjecucion = "0"+(i+1);
                    $('#txt-pc-ejecucion').val(acumuladorEjecucion);
                }
                $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '40':
                 if (i < 10 ) {
                    var instruccionInicio = "00" + i;
                    
                 }
                 if (i > 9 && i < 20) {
                    var instruccionInicio = "0" + i;
                    var bifurcacion = "#txt-bifurcacion-"+instruccionInicio;
                 }
                 var instruccionFinal = parseInt(subcadena);
                 var instruccionInicial = parseInt(instruccionInicio);

                 if (instruccionInicial < instruccionFinal) {
                    for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
                        var instruccionBorrar = "#txt-contenido-"+(n+1);
                        if (i < 10) {
                            var bifurcacion = "#txt-bifurcacion-00"+n;
                        }if (i > 9 && i < 20) {
                            var bifurcacion = "#txt-bifurcacion-0"+n;
                        }
                        var respaldoBifurcacion = $(instruccionBorrar).val();
                        $(bifurcacion).val(respaldoBifurcacion);
                        $(instruccionBorrar).val(" ");                     
                    }
                 respaldo(instruccionInicio,subcadena,i);
                 var contenido = parseInt(subcadena);
                 ejecutarBifurcacion(contenido);
                 }
                 $("#txt-ir-ejecucion").val(cadena);
             break;
             //-----------------------------------------------------------------------------
             case '41':
                 if (parseInt($('#txt-acumulador-ejecucion').val()) < 0) {
                    if (i < 10 ) {
                    var instruccionInicio = "00" + i;
                    
                 }
                 if (i > 9 && i < 20) {
                    var instruccionInicio = "0" + i;
                    var bifurcacion = "#txt-bifurcacion-"+instruccionInicio;
                 }
                 var instruccionFinal = parseInt(subcadena);
                 var instruccionInicial = parseInt(instruccionInicio);

                 if (instruccionInicial < instruccionFinal) {
                    for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
                        var instruccionBorrar = "#txt-contenido-"+(n+1);
                        if (i < 10) {
                            var bifurcacion = "#txt-bifurcacion-00"+n;
                        }if (i > 9 && i < 20) {
                            var bifurcacion = "#txt-bifurcacion-0"+n;
                        }
                        var respaldoBifurcacion = $(instruccionBorrar).val();
                        $(bifurcacion).val(respaldoBifurcacion);
                        $(instruccionBorrar).val(" ");                     
                    }
                 respaldo(instruccionInicio,subcadena,i);
                 var contenido = parseInt(subcadena);
                 ejecutarBifurcacion(contenido);
                 }                
                 
                }
             break;
             //-----------------------------------------------------------------------------
             case '42':
                 if (parseInt($('#txt-acumulador-ejecucion').val()) == 0) {
                    if (i < 10 ) {
                    var instruccionInicio = "00" + i;
                    
                 }
                 if (i > 9 && i < 20) {
                    var instruccionInicio = "0" + i;
                    var bifurcacion = "#txt-bifurcacion-"+instruccionInicio;
                 }
                 var instruccionFinal = parseInt(subcadena);
                 var instruccionInicial = parseInt(instruccionInicio);

                 if (instruccionInicial < instruccionFinal) {
                    for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
                        var instruccionBorrar = "#txt-contenido-"+(n+1);
                        if (i < 10) {
                            var bifurcacion = "#txt-bifurcacion-00"+n;
                        }if (i > 9 && i < 20) {
                            var bifurcacion = "#txt-bifurcacion-0"+n;
                        }
                        var respaldoBifurcacion = $(instruccionBorrar).val();
                        $(bifurcacion).val(respaldoBifurcacion);
                        $(instruccionBorrar).val(" ");                     
                    }
                 respaldo(instruccionInicio,subcadena,i);
                 var contenido = parseInt(subcadena);
                 ejecutarBifurcacion(contenido);
                 }
 
            }
             break;
             //-----------------------------------------------------------------------------
             case '43':
                if (i < 10 ) {
                    var instruccionInicio = "00" + i;
                }
                if (i > 9 && i < 20) {
                    var instruccionInicio = "0" + i;
                 }
                 $("#txt-ir-ejecucion").val(cadena);
                 return;
             break;
           }
           var resultado = $('#txt-acumulador-ejecucion').val();
           $('#txt-resultado').val(resultado);

        }
};

//###########################################################################################
function respaldo(inicio,final,i){
    var comienzo = inicio;
    var finalizacion = final;
    var iteracion = i;
    $("#txt-inicio").val(comienzo);
    $("#txt-final").val(final);
    $("#txt-iteracion").val(iteracion);

};

//#########################################################################################
$("#btn-interfaz").click(function(){
     $('#btn-compilar').show();
     $('#btn-depurar').show();
     $('#btn-limpiar').show();
     $('#btn-ejecutar').show();
     $('#btn-interfaz').hide();
     var inicio = $("#txt-inicio").val();
     var final = $("#txt-final").val();
     var i = $("#txt-iteracion").val();
     var instruccionInicial = parseInt(inicio);
     var instruccionFinal = parseInt(final);
    for (var n = instruccionInicial ; n < instruccionFinal - 1; n++) {
        var reemplazo = "#txt-contenido-"+(n+1);
        if (i < 10) {
            var bifurcacion = "#txt-bifurcacion-00"+n;
        }
        if (i > 9 && i < 20) {
            var bifurcacion = "#txt-bifurcacion-0"+n;
        }
        var instruccionRespaldo = $(bifurcacion).val();
        $(reemplazo).val(instruccionRespaldo);
    }

});

//##########################################################################################
function ejecutarBifurcacion(saltoInstruccion){
        var salto = saltoInstruccion;
        var input = "#txt-contenido-"+salto;
        var cadena = $(input).val();
        if (cadena != "") {
            var subcadena1 = cadena.substring(0,2);
           var subcadena = cadena.substring(2,5);
           switch(subcadena1){
//-------------------------------------------------------------------------------------------------------------
             case '10':
                var subcadena = cadena.substring(2,5);
                var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
                var ubicacion = '#txt-ubicacion-'+subcadena;
                $(ubicacion).val(numero);
             break;
//-------------------------------------------------------------------------------------------------------------
             case '11':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var  mensaje = $(ubicacion).val();
             break;
//-------------------------------------------------------------------------------------------------------------
             case '20':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    $("#txt-acumulador-ejecucion").val(almacenar);
                 }
                 if (contenido != "") {
                    $("#txt-acumulador-ejecucion").val(contenido);
                 }
             break;
//-------------------------------------------------------------------------------------------------------------
             case '21':
                var acumulador = $('#txt-acumulador-ejecucion').val();
                var ubicacion = "#txt-ubicacion-"+subcadena;
                $(ubicacion).val(acumulador);
             break;
//-------------------------------------------------------------------------------------------------------------
             case '30':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar + acumulador1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = contenido1 + acumulador1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
             break;
//-------------------------------------------------------------------------------------------------------------
             case '31':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = acumulador1 - almacenar;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   acumulador1 - contenido1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 
                $("#txt-ir-ejecucion").val(cadena);
             break;
//-------------------------------------------------------------------------------------------------------------
             case '32':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar / acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   contenido1 / acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
             break;
//-------------------------------------------------------------------------------------------------------------
             case '33':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar * acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   contenido1 * acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
             break;
//-------------------------------------------------------------------------------------------------------------
             case '40':
                 var contenido = "#txt-contenido-"+subcadena;
                 var instruccion = $(contenido).val();
                 var subcadena1 = instruccion.substring(0,2);
                 var subcadena = instruccion.substring(2,5);
             break;
           
        }
    }
};



//########################################################################## 

$('#btn-compilar').click(function(){
    compilar();
        
});

//##########################################################################


function compilar(){
    var arrayInstrucciones = ["10:Leer un numero      ","11:Escribir en pantalla","20:Cargar en AC         ","21:Almacenar memoria     ","30:Sumar AC               ","31:Restar AC                ","32:Dividir AC               ","33:Multiplicar AC                ","40:Bifurca               ","41:Bifurca negativo               ","42:Bifurca cero               ","43:Fin ejecucion                 "];
    var regex = /^(10|11|20|21|30|31|32|33|40|41|42|43|00)[0-9]{3}$/;
    var comprobacion = 0;
    for (var i = 0; i < 20; i++) {
        var input = "#txt-contenido-"+i+"";
        var input1 = "#txt-instruccion-"+i;
        var cadena = $(input).val();
        if (cadena != "") {
            var contenido = regex.test(cadena.trim());
            var subcadena = cadena.substring(2,5);
            var subcadena1 = cadena.substring(0,2);
            if (contenido ) {
                $(input).css("background-color", "white");
                for (var j = 0; j < 13; j++) {
                    var instruccion = '"'+arrayInstrucciones[j]+'"';
                    var contenidoInstruccion = instruccion.substring(1,3);
                    var contenidoInstruccion1 = instruccion.substring(4,24);
                    if (contenidoInstruccion == subcadena1 ) {
                        $(input1).val(contenidoInstruccion1);
                    }
                }
            }
            else{
                $(input).focus();
                $(":focus").css("background-color", "#D5F5E3");
                $("#div-mensaje").show();
                var comprobacion = comprobacion + 1;
            }
        }
    }
    if ( comprobacion == 0){
        $("#div-mensaje").hide();
        return false;
    }
    return true;
}

//##########################################################################
$('#btn-depurar').click(function(){
    $("#btn-compilar").hide();
    $("#btn-depurar").hide();
    $("#btn-interfaz").show();
    for (var i = 0; i < 20; i++) {
        var input = "#txt-contenido-"+i+"";
        var cadena = $(input).val();
        var subcadena1 = cadena.substring(0,2);
        var subcadena = cadena.substring(2,5);
        var instruccion = "#txt-decodificacion-"+i;
        $(instruccion).val(subcadena1);
        var direccion = "#txt-direccion-"+i;
        $(direccion).val(subcadena);        
        switch(subcadena1){
            case '10':
                var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
                var ubicacion = '#txt-ubicacion-'+subcadena;
                $(ubicacion).val(numero);
                if ( i < 10) {
                    var siguiente = "00"+(i+1);
                }
                if (i > 9 && i < 20) {
                    var siguiente = "0"+(i+1);
                }
                var pc = "#txt-pc-"+i;
                $(pc).val(siguiente);
                var ir = "#txt-ir-"+i;
                $(ir).val(cadena);
            break;
            case '11':
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var acumuladorSiguiente = "#txt-acumulador-"+i;
                $(acumuladorSiguiente).val(contenidoAcumulador1);
                if ( i < 10) {
                    var siguiente = "00"+(i+1);
                }
                if (i > 9 && i < 20) {
                    var siguiente = "0"+(i+1);
                }
                var pc = "#txt-pc-"+i;
                $(pc).val(siguiente);
                var ir = "#txt-ir-"+i;
                $(ir).val(cadena);
            break;
            case '20':
                var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                if (contenido != "") {
                    var acumulador = "#txt-acumulador-"+i;
                    $(acumulador).val(contenido);
                }
                if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    var reemplazo = "#txt-acumulador-"+i;
                    $(reemplazo).val(almacenar);
                 }
                 if ( i < 10) {
                        var siguiente = "00"+(i+1);
                    }
                    if (i > 9 && i < 20) {
                        var siguiente = "0"+(i+1);
                    }
                    var pc = "#txt-pc-"+i;
                    $(pc).val(siguiente);
                    var ir = "#txt-ir-"+i;
                    $(ir).val(cadena);
            break;
            case '21':
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var acumuladorSiguiente = "#txt-acumulador-"+i;
                $(acumuladorSiguiente).val(contenidoAcumulador1);
                //-----------------------------------------------
                var ubicacion = "#txt-ubicacion-"+subcadena;
                $(ubicacion).val(contenidoAcumulador1);
                if ( i < 10) {
                    var siguiente = "00"+(i+1);
                }
                if (i > 9 && i < 20) {
                    var siguiente = "0"+(i+1);
                }
                var pc = "#txt-pc-"+i;
                $(pc).val(siguiente);
                var ir = "#txt-ir-"+i;
                $(ir).val(cadena);
            break;
            case '30':
                var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                var contenido1 = parseInt(contenido);
                if (contenido != "") {
                    var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                    var contenidoAcumulador1 = $(acumuladorAnterior).val();
                    var contenidoAcumulador = parseInt(contenidoAcumulador1);
                    var resultado = contenido1 + contenidoAcumulador;
                    var acumuladorSiguiente = "#txt-acumulador-"+i;
                    $(acumuladorSiguiente).val(resultado);
                }
                if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var anterior = "#txt-contenido-"+(i-1);
                    var contenedor = $(anterior).val()
                    var subcadenaAnterior = contenedor.substring(0,2);
                    if (subcadenaAnterior == '00') {
                        var acumuladorAnterior = "#txt-acumulador-"+(i-2);
                        var contenidoAcumulador1 = $(acumuladorAnterior).val();
                        var contenidoAcumulador = parseInt(contenidoAcumulador1);
                        var resultado = almacenar + contenidoAcumulador;
                        var acumuladorSiguiente = "#txt-acumulador-"+i;
                        $(acumuladorSiguiente).val(resultado);
                    }
                    if (subcadenaAnterior != '00') {
                        var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                        var contenidoAcumulador1 = $(acumuladorAnterior).val();
                        var contenidoAcumulador = parseInt(contenidoAcumulador1);
                        var resultado = almacenar + contenidoAcumulador;
                        var acumuladorSiguiente = "#txt-acumulador-"+i;
                        $(acumuladorSiguiente).val(resultado);
                    }

                    //--------------------------------------------------------------
                    
                }
                if ( i < 10) {
                    var siguiente = "00"+(i+1);
                }
                if (i > 9 && i < 20) {
                    var siguiente = "0"+(i+1);
                }
                var pc = "#txt-pc-"+i;
                $(pc).val(siguiente);
                var ir = "#txt-ir-"+i;
                $(ir).val(cadena);
            break;
        }
    }
});
//##########################################################################
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var paso = $(e.target).data('paso');
        var porcentaje = (parseInt(paso) / 4) * 100;
        $('.progress-bar').css({width: porcentaje + '%'});
        $('.progress-bar').text("Paso " + paso + " de 4");
})        


});
function ciclo(saltoInstruccion,instruccionInicial){
    for (var i = saltoInstruccion; i < instruccionInicial; i++) {
        
    
        var salto = saltoInstruccion;
        var input = "#txt-contenido-"+salto;
        var cadena = $(input).val();
        if (cadena != "") {
            var subcadena1 = cadena.substring(0,2);
           var subcadena = cadena.substring(2,5);
           switch(subcadena1){
             case '10':
                var subcadena = cadena.substring(2,5);
                var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
                var ubicacion = '#txt-ubicacion-'+subcadena;
                $(ubicacion).val(numero);
             break;
             case '11':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var  mensaje = $(ubicacion).val();
             break;
             case '20':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    $("#txt-acumulador-ejecucion").val(almacenar);
                 }
                 if (contenido != "") {
                    $("#txt-acumulador-ejecucion").val(contenido);
                 }
             break;
             case '21':
                var acumulador = $('#txt-acumulador-ejecucion').val();
                var ubicacion = "#txt-ubicacion-"+subcadena;
                $(ubicacion).val(acumulador);
             break;
             case '30':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar + acumulador1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = contenido1 + acumulador1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
             break;
             case '31':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = acumulador1 - almacenar;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   acumulador1 - contenido1;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 
                $("#txt-ir-ejecucion").val(cadena);
             break;
             case '32':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar / acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   contenido1 / acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
             break;
             case '33':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var contenido = $(ubicacion).val();
                 if (contenido == "") {
                    var iteracion = parseInt(subcadena);
                    var instruccion = "#txt-contenido-"+iteracion;
                    var contenidoInput = $(instruccion).val();
                    var almacenar = parseInt(contenidoInput);
                    //--------------------------------------------------------------
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado = almacenar * acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
                 if (contenido != "") {
                    var contenido1 = parseInt(contenido);
                    var acumulador = parseInt($('#txt-acumulador-ejecucion').val());
                    var acumulador1 = parseInt(acumulador);
                    var resultado =   contenido1 * acumulador1 ;
                    $("#txt-acumulador-ejecucion").val(resultado);
                 }
             break;
             case '40':
                 var contenido = "#txt-contenido-"+subcadena;
                 var instruccion = $(contenido).val();
                 var subcadena1 = instruccion.substring(0,2);
                 var subcadena = instruccion.substring(2,5);
             break;
           
        }
        }
        }
};



//#######################################################################################################################

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
function ejecutarBifurcacionDepuracion(saltoInstruccion,i){
        var salto = saltoInstruccion;
        var input = "#txt-contenido-"+salto;
        var cadena = $(input).val();
        if (cadena != "") {
           var subcadena1 = cadena.substring(0,2);
           var subcadena = cadena.substring(2,5);
           switch(subcadena1){
             case '10':
                var subcadena = cadena.substring(2,5);
                var numero = prompt('Ingrese el numero que ingresara en la posicion '+ subcadena+': ','');
                var ubicacion = '#txt-ubicacion-'+subcadena;
                $(ubicacion).val(numero);
             break;
             case '11':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                 var  mensaje = $(ubicacion).val();
                 //--------------------------------------------
                 var acumulador = "#txt-acumulador-"+(i-1);
                 var valorAcumulador = $(acumulador).val();
                 var almacenar = toString(valorAcumulador);
                 alert(valorAcumulador);
                 var valor = "#txt-acumulador-"+(salto);
                 var prueba = $(valor).val();
                 alert(prueba);
                 $(valor).val(almacenar);
                 //--------------------------------------------
             break;
             case '20':
                var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                var acumulador = "#txt-acumulador-"+i;
                $(acumulador).val(contenido);
             break;
             case '21':
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var acumuladorSiguiente = "#txt-acumulador-"+i;
                $(acumuladorSiguiente).val(contenidoAcumulador1);
                //-----------------------------------------------
                var ubicacion = "#txt-ubicacion-"+subcadena;
                $(ubicacion).val(contenidoAcumulador1);
             break;
             case '30':
                var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                var contenido1 = parseInt(contenido);
                //--------------------------------------------------------
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var contenidoAcumulador = parseInt(contenidoAcumulador1);
                var resultado = contenido1 + contenidoAcumulador;
                var acumuladorSiguiente = "#txt-acumulador-"+i;
             break;
             case '31':
                var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                var contenido1 = parseInt(contenido);
                //--------------------------------------------------------
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var contenidoAcumulador = parseInt(contenidoAcumulador1);
                var resultado = contenidoAcumulador - contenido1;
                var acumuladorSiguiente = "#txt-acumulador-"+i;
                $(acumuladorSiguiente).val(resultado);
             break;
             case '32':
                var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                var contenido1 = parseInt(contenido);
                //--------------------------------------------------------
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var contenidoAcumulador = parseInt(contenidoAcumulador1);
                var resultado = contenido1 / contenidoAcumulador ;
                var acumuladorSiguiente = "#txt-acumulador-"+i;
             break;
             case '33':
                 var ubicacion = "#txt-ubicacion-"+subcadena;
                var contenido = $(ubicacion).val();
                var contenido1 = parseInt(contenido);
                //--------------------------------------------------------
                var acumuladorAnterior = "#txt-acumulador-"+(i-1);
                var contenidoAcumulador1 = $(acumuladorAnterior).val();
                var contenidoAcumulador = parseInt(contenidoAcumulador1);
                var resultado = contenido1 * contenidoAcumulador ;
                var acumuladorSiguiente = "#txt-acumulador-"+i;
                $(acumuladorSiguiente).val(resultado);
             break;
           
        }
        }
};