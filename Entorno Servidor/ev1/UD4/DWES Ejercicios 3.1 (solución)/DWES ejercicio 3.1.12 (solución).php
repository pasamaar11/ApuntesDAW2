<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>Ejercicio 3.1.12</title>
	</head>
	<body>
		<?php
		// Problemas de seguridad por inyección de código SQL malicioso.
		// "SQL Injection" es una técnica de ataque a paginas, que intentan colar código SQL
		// dentro del codigo SQL de la aplicación destino, para romper o acceder a información almacenada en la base de datos.
		// Estas técnicas se basan en añadir código SQL malicioso a través de los formularios de entrada de datos de la aplicación Web.
		// Se muestra aquí un ejemplo clásico de posible inyección de código SQL y una posible solución a este "agujero de seguridad"
		// por medio del uso de la función "mysqli_real_escape_string" que recibe un texto y lo devuelve a formato seguro.
		
		// Mostrar formulario pidiendo usuario y clave:
		if (!isset($_REQUEST['enviar'])) { // "isset" determina si una variable está definida y no es "null".
			print("<h2>Esta zona tiene el acceso restringido.<br/> " . " Para entrar debe identificarse</h2>");
			
			print("<form action='DWES ejercicio 3.1.12 (solución).php' method='get'><br/>");
			
			print("<p>Usuario: ");
			print("<input type='text' name='usuario' size='15' /></p>");
			print("<p>Clave: ");
			print("<input type='text' name='clave' size='15' /></p>");
			print("<p><input type='submit' name='enviar' value='Entrar' /></p>");
			
			print("</form>");
			
			print("<p>NOTA: si no dispone de identificación o tiene problemas
				para entrar<br/>póngase en contacto con el
				<a href='mailto:admin@localhost'>administrador</a> del sitio</p>");
		} else {
			// Comprobar que el usuario está autorizado a consultar la base de datos:
			$conexion = mysqli_connect ("localhost", "jardinero", "jardinero")
				or die ("No se puede conectar con el servidor");
			
			mysqli_select_db ($conexion, "jardineria")
				or die ("No se puede seleccionar la BD");
			
			// Versión insegura: Permite "inyección SQL".
			// Probad ésta introduciendo en el formulario cualquier cosa en usuario y en password: '' or '1'='1'
			// y observad que entonces, la condición WHERE del SELECT siempre se cumple ya que se convierte en:
			// SELECT nombre, clave FROM usuarios WHERE nombre='....' AND clave='' or '1'='1'
			// con lo cual permite acceder sin introducir el usuario y password correctos. FALLO DE SEGURIDAD.
			
			/* $usuario = $_REQUEST['usuario'];
			$clave = $_REQUEST['clave'];
			$sqlcomprobarusuario = "SELECT nombre, clave FROM usuarios WHERE nombre='$usuario' AND clave='$clave'";
			$resulcomprobacion = mysqli_query ($conexion, $sqlcomprobarusuario) or die ("Fallo en acceso a comprobación 1"); */
			
			// Versión más segura: No permite "inyección SQL".
			// Hace uso de función "mysqli_real_scape_string" que recibe un texto y lo devuelve a su formato seguro.
			// Lo que hace es pasar a forma "escapada" los caracteres peligrosos (como comillas, saltos de línea, punto y coma, etc),
			// así, por ejemplo, la comilla simple (') se convierte en (\'), con lo cual no se pueden delimitar nuevas
			// instrucciones o elementos y estaremos más seguros ante una inyección SQL.
			
			/* $usuario = mysqli_real_escape_string ($conexion, $_REQUEST['usuario']);
			$clave = mysqli_real_escape_string ($conexion, $_REQUEST['clave']);
			$sqlcomprobarusuario = "SELECT nombre, clave FROM usuarios WHERE nombre='$usuario' and clave='$clave'";
			$resulcomprobacion = mysqli_query ($conexion, $sqlcomprobarusuario)
				or die ("Fallo en acceso a comprobación 2"); */
			
			// Otra forma de implementar una versión segura (probadlo también):
			
			/* $usuario = $_REQUEST['usuario'];
			$clave = $_REQUEST['clave'];
			$sqlcomprobarusuario = "SELECT nombre, clave FROM usuarios WHERE nombre='$usuario' and clave='$clave'";
			$sqlseguro = mysqli_real_escape_string ($conexion, $sqlcomprobarusuario);
			$resulcomprobacion = mysqli_query ($conexion, $sqlseguro) or die ("Fallo en acceso a comprobación 3"); */
			
			// NOTA: La comprobación de la contraseña encriptada no se realiza de la misma forma que en el ejercicio anterior.
			// No se usa la función "password_verify":
			/* if (mysqli_num_rows($resulcomprobacion)>0) { // Comprobación satisfactoria: Usuario y contraseña correctos.
				$resulconsulta = mysqli_query ($conexion, "SELECT * FROM clientes")
					or die ("Fallo en la consulta");
				$nfilas = mysqli_num_rows ($resulconsulta);
				
				echo '<table border=1>';
				echo '<tr><th>CÓDIGO</th><th>NOMBRE CLIENTE</th><th>NOMBRE CONTACTO</th></tr>';
				for ($f=0; $f<$nfilas; $f++) {
					echo '<tr>';
					$fila = mysqli_fetch_array ($resulconsulta);
					echo '<td>',$fila[0],'</td><td>',$fila[1],'</td><td>',$fila[2],'</td>';
					echo '</tr>';
				}
				echo '</table>';
			} else { // Intento de entrada fallido.
				print ("<br/><br/>");
				print ("<h2>Acceso no autorizado</h2>");
				print ("<p>[ <a href='DWES ejercicio 3.1.12 (solución).php'>Volver a intentar identificarse</a> ]</p>"); */
			}
			
			// En esta versión no segura, se usa la función "password_verify":
			$usuario = $_REQUEST['usuario'];
			$clave = $_REQUEST['clave'];
			
			$sqlcomprobarusuario = "SELECT clave FROM usuarios WHERE nombre='$usuario'";
			$resulcomprobacion = mysqli_query ($conexion, $sqlcomprobarusuario)
				or die ("Fallo en acceso a comprobación 1");
			
			if (mysqli_num_rows($resulcomprobacion)>0) {
				$array_consulta = mysqli_fetch_array ($resulcomprobacion);
				$clave_encriptada = $array_consulta[0];
			} else {
				$clave_encriptada = 0;
			}
			
			if (password_verify ($clave, $clave_encriptada)) { // Comprobación satisfactoria: Usuario y contraseña correctos.
				$resulconsulta = mysqli_query ($conexion, "SELECT * from clientes")
					or die ("Fallo en la consulta");
				$nfilas = mysqli_num_rows ($resulconsulta);
				
				echo '<table border=1>';
				echo '<tr><th>CÓDIGO</th><th>NOMBRE CLIENTE</th><th>NOMBRE CONTACTO</th></tr>';
				for ($f=0; $f<$nfilas; $f++) {
					echo '<tr>';
					$fila = mysqli_fetch_array ($resulconsulta);
					echo '<td>',$fila[0],'</td><td>',$fila[1],'</td><td>',$fila[2],'</td>';
					echo '</tr>';
				}
				echo '</table>';
			} else { // Intento de entrada fallido.
				print ("<br/><br/>");
				print ("<h2>Acceso no autorizado</h2><br>");
				print ("<p>[ <a href='DWES ejercicio 3.1.12 (solución).php'>Volver a intentar identificarse</a> ]</p>");
			}
			
			// NOTA: Se propone al alumnado que realice una versión segura usando la función "password_verify". 
			
			
			mysqli_close ($conexion);
		}
		?>
	</body>
</html>
