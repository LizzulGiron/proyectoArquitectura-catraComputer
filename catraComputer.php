<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>catraComputer</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body class="view">


<!-- Informacion de las instrucciones-->
  <div class="container cuadro">
    <hr>
      <h1>catraComputer</h1>
    <hr>
      <div class="row bs-wizard" style="border-bottom:0;">
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
             Comenzar
          </button>
     </div>
  </div>

<!--###########################################################################################################-->

  <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content" style="background-color: rgba(0,0,0,0.5) ;border-radius: 25px ">
      <div class="modal-header" style="background-color: rgba(0,0,0,5) ;border-radius: 25px ">
        <button type="button" class="close" data-dismiss="modal" style="color: white">&times;</button>
        <h4 class="modal-title" style="color: white">LMCC</h4>
      </div>
      <div class="modal-body" id="miAsistente">
       


         <!-- Enlaces de navegación  -->
        <div class="navbar">
        
            <div class="navbar-inner col-md-offset-2">
                <ul class="nav nav-pills">
                    <li class="active" id="btn-compilar"><a href="#paso1" data-toggle="tab" data-paso="1"><span class="glyphicon glyphicon-check"></span>  Compilar</a></li>
                    <li class="" id="btn-depurar"><a href="#paso2" data-toggle="tab" data-paso="2"><span class="glyphicon glyphicon-thumbs-up"></span>  Depurar</a></li>
                    <li class="" id="btn-ejecutar"><a href="#paso3" data-toggle="tab" data-paso="3"><span class="glyphicon glyphicon-tasks"></span>  Ejecutar </a></li>
                   <li class="" id="btn-limpiar"><a href="#" data-toggle="tab" data-paso="4"><span class="glyphicon glyphicon glyphicon-trash"></span> Limpiar</a></li>
                   <li class="active" id="btn-interfaz"><a href="#paso1" data-toggle="tab" data-paso="1"><span class="glyphicon glyphicon-user"></span>  Regresar</a></li>
                  </div>
                  <hr>
                  <div class="col-md-12 col-lg-12 alert alert-danger" id="div-mensaje">Formato de instrucciones incorrectas!</div>
                  
                </ul>
                
            </div>
            
        </div>
        


          <!-- Contenido de todos los tabs -->
          <div class="tab-content">

              <div class="tab-pane fade in active" id="paso1">

                  <!-- Definicion de la interfaz grafica -->

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

                  <div>
                    <div class="row">
                    <!--Div que contiene cada una de las etiquetas en las que se guardara la informacion-->
                    <div class="col-md-4">
                      <input type="text" name="txt-contenedor-1" id="txt-contenedor-0">
                      <input type="text" name="txt-contenedor-2" id="txt-contenedor-1">
                      <input type="text" name="txt-contenedor-3" id="txt-contenedor-2">
                      <input type="text" name="txt-contenedor-4" id="txt-contenedor-3">
                      <input type="text" name="txt-contenedor-5" id="txt-contenedor-4">
                      <input type="text" name="txt-contenedor-6" id="txt-contenedor-5">
                      <input type="text" name="txt-contenedor-7" id="txt-contenedor-6">
                      <input type="text" name="txt-contenedor-8" id="txt-contenedor-7">
                      <input type="text" name="txt-contenedor-9" id="txt-contenedor-8">
                      <input type="text" name="txt-contenedor-10" id="txt-contenedor-9">
                      <input type="text" name="txt-contenedor-11" id="txt-contenedor-10">
                      <input type="text" name="txt-contenedor-12" id="txt-contenedor-11">
                      <input type="text" name="txt-contenedor-13" id="txt-contenedor-12">
                      <input type="text" name="txt-contenedor-14" id="txt-contenedor-13">
                      <input type="text" name="txt-contenedor-15" id="txt-contenedor-14">
                      <input type="text" name="txt-contenedor-16" id="txt-contenedor-15">
                      <input type="text" name="txt-contenedor-17" id="txt-contenedor-16">
                      <input type="text" name="txt-contenedor-18" id="txt-contenedor-17">
                      <input type="text" name="txt-contenedor-19" id="txt-contenedor-18">
                      <input type="text" name="txt-contenedor-20" id="txt-contenedor-19">
                      
                    </div>

                    <div class="col-md-4">
                      <input type="text" name="txt-contenido-1" id="txt-contenido-0">
                      <input type="text" name="txt-contenido-2" id="txt-contenido-1">
                      <input type="text" name="txt-contenido-3" id="txt-contenido-2">
                      <input type="text" name="txt-contenido-4" id="txt-contenido-3">
                      <input type="text" name="txt-contenido-5" id="txt-contenido-4">
                      <input type="text" name="txt-contenido-6" id="txt-contenido-5">
                      <input type="text" name="txt-contenido-7" id="txt-contenido-6">
                      <input type="text" name="txt-contenido-8" id="txt-contenido-7">
                      <input type="text" name="txt-contenido-9" id="txt-contenido-8">
                      <input type="text" name="txt-contenido-10" id="txt-contenido-9">
                      <input type="text" name="txt-contenido-11" id="txt-contenido-10">
                      <input type="text" name="txt-contenido-12" id="txt-contenido-11">
                      <input type="text" name="txt-contenido-13" id="txt-contenido-12">
                      <input type="text" name="txt-contenido-14" id="txt-contenido-13">
                      <input type="text" name="txt-contenido-15" id="txt-contenido-14">
                      <input type="text" name="txt-contenido-16" id="txt-contenido-15">
                      <input type="text" name="txt-contenido-17" id="txt-contenido-16">
                      <input type="text" name="txt-contenido-18" id="txt-contenido-17">
                      <input type="text" name="txt-contenido-19" id="txt-contenido-18">
                      <input type="text" name="txt-contenido-20" id="txt-contenido-19">
                      
                    </div>

                    <div class="col-md-4">
                      <input type="text" name="txt-instruccion-1" id="txt-instruccion-0">
                      <input type="text" name="txt-instruccion-2" id="txt-instruccion-1">
                      <input type="text" name="txt-instruccion-3" id="txt-instruccion-2">
                      <input type="text" name="txt-instruccion-4" id="txt-instruccion-3">
                      <input type="text" name="txt-instruccion-5" id="txt-instruccion-4">
                      <input type="text" name="txt-instruccion-6" id="txt-instruccion-5">
                      <input type="text" name="txt-instruccion-7" id="txt-instruccion-6">
                      <input type="text" name="txt-instruccion-8" id="txt-instruccion-7">
                      <input type="text" name="txt-instruccion-9" id="txt-instruccion-8">
                      <input type="text" name="txt-instruccion-10" id="txt-instruccion-9">
                      <input type="text" name="txt-instruccion-11" id="txt-instruccion-10">
                      <input type="text" name="txt-instruccion-12" id="txt-instruccion-11">
                      <input type="text" name="txt-instruccion-13" id="txt-instruccion-12">
                      <input type="text" name="txt-instruccion-14" id="txt-instruccion-13">
                      <input type="text" name="txt-instruccion-15" id="txt-instruccion-14">
                      <input type="text" name="txt-instruccion-16" id="txt-instruccion-15">
                      <input type="text" name="txt-instruccion-17" id="txt-instruccion-16">
                      <input type="text" name="txt-instruccion-18" id="txt-instruccion-17">
                      <input type="text" name="txt-instruccion-19" id="txt-instruccion-18">
                      <input type="text" name="txt-instruccion-20" id="txt-instruccion-19">
                      
                    </div>
                      
                    </div>
                  </div>
              </div>
      <!-- ######################################################################################### -->



              <!-- Tab "paso2" -->
              <div class="tab-pane fade" id="paso2">

                  <div class="well" style="background-color: rgba(0,0,0,5) ;border-radius: 25px;text-align: center;color: white;margin-top: -15px" id="div-Resultado">


                    <div style="text-align: left;" id="div-depuracion">
                      <hr>

                        
                       
                        
                        

                    </div>
                      
                  </div>
              </div>
              <!-- Tab "paso3" -->
              <div class="tab-pane fade" id="paso3">
                  <!-- Recuadro que engloba los controles de entrada -->
                  <div class="well" style="background-color: rgba(0,0,0,5) ;border-radius: 25px;color: white;height: 20px"> <h4 style="margin-top: -10px">Ejecutando...</h4></div>
                  <div class="well" style="background-color: rgba(0,0,0,0.2) ;border-radius: 25px;color: white">
                  <div >
                    <table>
                    <tr>
                      <td>
                        <label>
                          PC:
                        </label>
                      </td>
                      <td>
                        &nbsp&nbsp&nbsp<input type="text" name="txt-pc-ejecucion" id="txt-pc-ejecucion" style="color: black">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          Acumulador:
                        </label>
                      </td>
                      <td>
                        &nbsp&nbsp&nbsp<input type="text" name="txt-acumulador-ejecucion" id="txt-acumulador-ejecucion" style="color: black">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          IR:
                        </label>
                      </td>
                      <td>
                        &nbsp&nbsp&nbsp<input type="text" name="txt-ir-ejecucion" id="txt-ir-ejecucion" style="color: black">
                      </td>
                    </tr>
                  </table>
                  <hr>
                  <div class="well" style="background-color: rgba(0,0,0,8) ;border-radius: 25px;color: white">
                    <label>Pantalla</label>
                    <hr style="margin-top: -7px">
                    <textarea id="txt-pantalla" class="form-control" rows="5"></textarea>
                  </div>

                  <div class="well" style="background-color: rgba(0,0,0,8) ;border-radius: 25px;color: white;text-align: right;">
                    <label>Resultado:</label>
                    &nbsp&nbsp&nbsp<input type="text" name="txt-resultado" id="txt-resultado" style="color: black">
                  </div>

                  </div>
                  <!--<a class="btn btn-default next" href="#" id="seguridad">Continuar</a>-->

              </div>
              <!-- Tab "paso4" -->
              <div class="tab-pane fade" id="paso4">
                      <input type="text" name="txt-ubicacion-001" id="txt-ubicacion-000">
                      <input type="text" name="txt-ubicacion-002" id="txt-ubicacion-001">
                      <input type="text" name="txt-ubicacion-003" id="txt-ubicacion-002">
                      <input type="text" name="txt-ubicacion-004" id="txt-ubicacion-003">
                      <input type="text" name="txt-ubicacion-005" id="txt-ubicacion-004">
                      <input type="text" name="txt-ubicacion-006" id="txt-ubicacion-005">
                      <input type="text" name="txt-ubicacion-007" id="txt-ubicacion-006">
                      <input type="text" name="txt-ubicacion-008" id="txt-ubicacion-007">
                      <input type="text" name="txt-ubicacion-009" id="txt-ubicacion-008">
                      <input type="text" name="txt-ubicacion-010" id="txt-ubicacion-009">
                      <input type="text" name="txt-ubicacion-011" id="txt-ubicacion-010">
                      <input type="text" name="txt-ubicacion-012" id="txt-ubicacion-011">
                      <input type="text" name="txt-ubicacion-013" id="txt-ubicacion-012">
                      <input type="text" name="txt-ubicacion-014" id="txt-ubicacion-013">
                      <input type="text" name="txt-ubicacion-015" id="txt-ubicacion-014">
                      <input type="text" name="txt-ubicacion-016" id="txt-ubicacion-015">
                      <input type="text" name="txt-ubicacion-017" id="txt-ubicacion-016">
                      <input type="text" name="txt-ubicacion-018" id="txt-ubicacion-017">
                      <input type="text" name="txt-ubicacion-019" id="txt-ubicacion-018">
                      <input type="text" name="txt-ubicacion-020" id="txt-ubicacion-019">

                      <input type="number" name="txt-bifurcacion-001" id="txt-bifurcacion-001">
                      <input type="number" name="txt-bifurcacion-002" id="txt-bifurcacion-002">
                      <input type="number" name="txt-bifurcacion-003" id="txt-bifurcacion-003">
                      <input type="number" name="txt-bifurcacion-004" id="txt-bifurcacion-004">
                      <input type="number" name="txt-bifurcacion-005" id="txt-bifurcacion-005">
                      <input type="number" name="txt-bifurcacion-006" id="txt-bifurcacion-006">
                      <input type="number" name="txt-bifurcacion-007" id="txt-bifurcacion-007">
                      <input type="number" name="txt-bifurcacion-008" id="txt-bifurcacion-008">
                      <input type="number" name="txt-bifurcacion-009" id="txt-bifurcacion-009">
                      <input type="number" name="txt-bifurcacion-010" id="txt-bifurcacion-010">
                      <input type="number" name="txt-bifurcacion-011" id="txt-bifurcacion-011">
                      <input type="number" name="txt-bifurcacion-012" id="txt-bifurcacion-012">
                      <input type="number" name="txt-bifurcacion-013" id="txt-bifurcacion-013">
                      <input type="number" name="txt-bifurcacion-014" id="txt-bifurcacion-014">
                      <input type="number" name="txt-bifurcacion-015" id="txt-bifurcacion-015">
                      <input type="number" name="txt-bifurcacion-016" id="txt-bifurcacion-016">
                      <input type="number" name="txt-bifurcacion-017" id="txt-bifurcacion-017">
                      <input type="number" name="txt-bifurcacion-018" id="txt-bifurcacion-018">
                      <input type="number" name="txt-bifurcacion-019" id="txt-bifurcacion-019">
                      <input type="number" name="txt-bifurcacion-020" id="txt-bifurcacion-020">

                      <input type="text" name="txt-inicio" id="txt-inicio">
                      <input type="text" name="txt-final" id="txt-final">
                      <input type="number" name="txt-iteracion" id="txt-iteracion">

                  
              </div>
          </div>
      </div>

       <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
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

