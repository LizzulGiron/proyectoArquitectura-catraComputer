<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>catraComputer</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body class="view">

	<div class="container cuadro">
  		<h1>catraComputer</h1>
  		<!--<p>Practica #1 Programacion Orientada a objetos</p><hr>-->
      <hr>
  		<div class="row bs-wizard" style="border-bottom:0;">
    			<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
             Comenzar
          </button>
  	 </div>
     <hr>
	</div>

	

	<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content well" style="background-color: rgba(0,0,0,0.5) ;border-radius: 25px ">
      <div class="modal-header well" style="background-color: rgba(0,0,0,5) ;border-radius: 25px ">
        <button type="button" class="close" data-dismiss="modal" style="color: white">&times;</button>
        <h4 class="modal-title" style="color: white">LMCC</h4>
      </div>
      <div class="modal-body" id="miAsistente">
          <!-- Progress barra, color verde 
          <div class="progress" style="height: 20px">
              <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 20%; height: 20px">
                   Paso 1 de 4
              </div>
          </div> -->
         
         <!-- Enlaces de navegación  -->
        <div class="navbar">
        
            <div class="navbar-inner col-md-offset-2" style="margin-top: -20px">
                <ul class="nav nav-pills">
                    <li class="active" id="btn-compilar"><a href="#paso1" data-toggle="tab" data-paso="1"><span class="glyphicon glyphicon-user"></span> Compilar</a></li>
                    <li class=""><a href="#paso2" data-toggle="tab" data-paso="2"><span class="glyphicon glyphicon-thumbs-up"></span>Ejecutar</a></li>
                    <li class=""><a href="#paso3" data-toggle="tab" data-paso="3"><span class="glyphicon glyphicon-tasks"></span> Depurar </a></li>
                   <li class="" id="btn-limpiar"><a href="#paso4" data-toggle="tab" data-paso="4"><span class="glyphicon glyphicon glyphicon-floppy-saved"></span>Limpiar</a></li>
                </ul>
            </div>
        </div>
          <!-- Contenido de todos los tabs -->
          <div class="tab-content container-fluid">

              <div class="tab-pane fade in active" id="paso1">
                  <!-- Recuadro que engloba los controles de entrada 
                  <div class="well">
                      <label>Nombres</label>
                      <input class="form-control input-lg" id="txt-nombre">
                      <div id="mensaje1" class="errores" style="display: none;text-align: right;"><b>Campo obligatorio</b></div>
                      <br>
                      <label>Apellidos</label>
                      <input class="form-control input-lg" id="txt-apellido">
                      <div id="mensaje2" class="errores" style="display: none;text-align: right;"><b>Campo obligatorio</b></div>
                      <br>
                      <label>Fecha de Nacimiento</label>
                      <input class="form-control input-lg" id="txt-fecha">
                      <div id="mensaje3" class="errores" style="display: none;text-align: right;"><b>Campo obligatorio</b></div>-->



                 <div class="well" style="background-color: rgba(0,0,0,5) ;border-radius: 25px;text-align: center;color: white;margin-top: -30px">
                    <div class="row">
                      <div class="col-md-4">
                         Ubicacion
                      </div>
                      <div class="col-md-4">
                         Contenido
                      </div>
                      <div class="col-md-4">
                         Instruccion
                      </div>
                      
                    </div>
                    
                 </div>


                 <!--Div que contendra los parametros de ejecucion del programa netamente-->
                 <div class="" style="">
                  <div class="row">
                    <!--Div que contiene cada una de las etiquetas en las que se guardara la informacion-->
                    <div class="col-md-4">
                      <input type="text" name="txt-ubicacion-1" id="txt-ubicacion-1">
                      <input type="text" name="txt-ubicacion-2" id="txt-ubicacion-2">
                      <input type="text" name="txt-ubicacion-3" id="txt-ubicacion-3">
                      <input type="text" name="txt-ubicacion-4" id="txt-ubicacion-4">
                      <input type="text" name="txt-ubicacion-5" id="txt-ubicacion-5">
                      <input type="text" name="txt-ubicacion-6" id="txt-ubicacion-6">
                      <input type="text" name="txt-ubicacion-7" id="txt-ubicacion-7">
                      <input type="text" name="txt-ubicacion-8" id="txt-ubicacion-8">
                      <input type="text" name="txt-ubicacion-9" id="txt-ubicacion-9">
                      <input type="text" name="txt-ubicacion-10" id="txt-ubicacion-10">
                      <input type="text" name="txt-ubicacion-11" id="txt-ubicacion-11">
                      <input type="text" name="txt-ubicacion-12" id="txt-ubicacion-12">
                      <input type="text" name="txt-ubicacion-13" id="txt-ubicacion-13">
                      <input type="text" name="txt-ubicacion-14" id="txt-ubicacion-14">
                      <input type="text" name="txt-ubicacion-15" id="txt-ubicacion-15">
                      <input type="text" name="txt-ubicacion-16" id="txt-ubicacion-16">
                      <input type="text" name="txt-ubicacion-17" id="txt-ubicacion-17">
                      <input type="text" name="txt-ubicacion-18" id="txt-ubicacion-18">
                      <input type="text" name="txt-ubicacion-19" id="txt-ubicacion-19">
                      <input type="text" name="txt-ubicacion-20" id="txt-ubicacion-20">
                      
                    </div>
                    <div class="col-md-4">
                      <input type="text" name="txt-contenido-1" id="txt-contenido-1">
                      <input type="text" name="txt-contenido-2" id="txt-contenido-2">
                      <input type="text" name="txt-contenido-3" id="txt-contenido-3">
                      <input type="text" name="txt-contenido-4" id="txt-contenido-4">
                      <input type="text" name="txt-contenido-5" id="txt-contenido-5">
                      <input type="text" name="txt-contenido-6" id="txt-contenido-6">
                      <input type="text" name="txt-contenido-7" id="txt-contenido-7">
                      <input type="text" name="txt-contenido-8" id="txt-contenido-8">
                      <input type="text" name="txt-contenido-9" id="txt-contenido-9">
                      <input type="text" name="txt-contenido-10" id="txt-contenido-10">
                      <input type="text" name="txt-contenido-11" id="txt-contenido-11">
                      <input type="text" name="txt-contenido-12" id="txt-contenido-12">
                      <input type="text" name="txt-contenido-13" id="txt-contenido-13">
                      <input type="text" name="txt-contenido-14" id="txt-contenido-14">
                      <input type="text" name="txt-contenido-15" id="txt-contenido-15">
                      <input type="text" name="txt-contenido-16" id="txt-contenido-16">
                      <input type="text" name="txt-contenido-17" id="txt-contenido-17">
                      <input type="text" name="txt-contenido-18" id="txt-contenido-18">
                      <input type="text" name="txt-contenido-19" id="txt-contenido-19">
                      <input type="text" name="txt-contenido-20" id="txt-contenido-20">
                      
                    </div>

                    <div class="col-md-4">
                      <input type="text" name="txt-instruccion-1" id="txt-instruccion-1">
                      <input type="text" name="txt-instruccion-2" id="txt-instruccion-2">
                      <input type="text" name="txt-instruccion-3" id="txt-instruccion-3">
                      <input type="text" name="txt-instruccion-4" id="txt-instruccion-4">
                      <input type="text" name="txt-instruccion-5" id="txt-instruccion-5">
                      <input type="text" name="txt-instruccion-6" id="txt-instruccion-6">
                      <input type="text" name="txt-instruccion-7" id="txt-instruccion-7">
                      <input type="text" name="txt-instruccion-8" id="txt-instruccion-8">
                      <input type="text" name="txt-instruccion-9" id="txt-instruccion-9">
                      <input type="text" name="txt-instruccion-10" id="txt-instruccion-10">
                      <input type="text" name="txt-instruccion-11" id="txt-instruccion-11">
                      <input type="text" name="txt-instruccion-12" id="txt-instruccion-12">
                      <input type="text" name="txt-instruccion-13" id="txt-instruccion-13">
                      <input type="text" name="txt-instruccion-14" id="txt-instruccion-14">
                      <input type="text" name="txt-instruccion-15" id="txt-instruccion-15">
                      <input type="text" name="txt-instruccion-16" id="txt-instruccion-16">
                      <input type="text" name="txt-instruccion-17" id="txt-instruccion-17">
                      <input type="text" name="txt-instruccion-18" id="txt-instruccion-18">
                      <input type="text" name="txt-instruccion-19" id="txt-instruccion-19">
                      <input type="text" name="txt-instruccion-20" id="txt-instruccion-20">
                      
                    </div>

                  </div>
                  <a class="btn btn-default next" href="#" id="personal">Continuar</a>
              </div>

              <!-- Tab "paso2" -->
              <div class="tab-pane fade" id="paso2">

                  <div class="well">
                      <label><span class="glyphicon glyphicon-thumbs-up"></span> Facebook</label>
                      <input class="form-control input-lg">
                      <br>
                      <label><span class="glyphicon glyphicon-retweet"></span> Twitter</label>
                      <input class="form-control input-lg">
                      <br>
                      <label><span class="glyphicon glyphicon-expand"></span> Youtube</label>
                      <input class="form-control input-lg">
                      <br>
                      <label><span class="glyphicon glyphicon-globe"></span> Página Web</label>
                      <input class="form-control input-lg">
                  </div>
                  <a class="btn btn-default next" href="#" id="social">Continuar</a>
              </div>
              <!-- Tab "paso3" -->
              <div class="tab-pane fade" id="paso3">
                  <!-- Recuadro que engloba los controles de entrada -->
                  <div class="well"> <h2>Ya Casi!</h2>Ingresa tu información de seguridad para finalizar.</div>
                  <label>Correo electrónico</label>
                  <input class="form-control input-lg" id="txt-correo">
                  <div id="mensaje4" class="errores" style="display: none;text-align: right;"><b>Campo obligatorio</b></div>
                  <div id="mensaje8" class="errores" style="display: none;text-align: right;"><b>Correo no valido</b></div>
                  <br>
                  <label>Contraseña</label>
                  <input class="form-control input-lg" placeholder="Minimo 6 caracteres" id="txt-contraseña">
                  <div id="mensaje5" class="errores" style="display: none;text-align: right;"><b>Campo obligatorio</b></div>
                  <div id="mensaje7" class="errores" style="display: none;text-align: right;"><b>Contraseñas distintas</b></div>
                  <br>
                  <label>Repetir contraseña</label>
                  <input class="form-control input-lg" placeholder="Minimo 6 caracteres" id="txt-contraseña2">
                  <div id="mensaje6" class="errores" style="display: none;text-align: right;"><b>Campo obligatorio</b></div>
                  <br>
                  <a class="btn btn-default next" href="#" id="seguridad">Continuar</a>
              </div>
              <!-- Tab "paso4" -->
              <div class="tab-pane fade" id="paso4">
                  <!-- Recuadro que engloba los controles de entrada -->
                  <div class="well"> <h2>Has finalizado!</h2> Felicidades!, Para continuar con el registro haz clic en enviar.</div>
                  <a class="btn btn-success first" href="#">Volver a Empezar.</a>
              </div>
          </div>
      </div>

       <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button class="btn btn-primary">Enviar</button>
      </div>
      <!-- Fin del contenido del modal -->
      </div>
    </div>
  </div>

	
  <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="js/funcionalidades.js"></script>

</body>
</html>

