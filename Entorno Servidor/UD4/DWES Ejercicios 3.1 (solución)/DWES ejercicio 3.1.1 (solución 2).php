<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>Ejercicio 3.1.1</title>
		<link rel="stylesheet" type="text/css" href="estilos.css">
		<link rel="stylesheet" type="text/css" href="estilosimple.css">
	</head>
	<body>
		<?php
		// Conectar con el servidor de base de datos:
		$conexion = mysqli_connect ("localhost", "jardinero", "jardinero")
			or die ("No se puede conectar con el servidor"); // Si hay un error en la conexión, se termina de ejecutar el script PHP.
		
		// Seleccionar base de datos:
		mysqli_select_db ($conexion, "jardineria")
			or die ("No se puede seleccionar la BD");
		
		$consulta = mysqli_query ($conexion, "SELECT * from clientes")
			or die ("Fallo en la consulta");
		
		echo '<table border=1>';
		
		// PARA SACAR LA CABECERA CON LOS NOMBRES DE LOS CAMPOS:
		// Con funciones de mysqli: mysqli_fetch_field
		// Con funciones de mysql se haría con: mysql_field_name
		echo "<tr>";
		while ($finfo = mysqli_fetch_field($consulta)) {
				$nombrecampo = $finfo->name; // Se obtiene el nombre de cada campo.
			echo "<th bgcolor='cyan'>",$nombrecampo,"</th>";
		}
		echo "</tr>";
		
		// PARA SACAR LOS DATOS DE CADA FILA DE CLIENTES:
		$nfilas = mysqli_num_rows ($consulta);
		for ($f=1; $f<=$nfilas; $f++) {
			echo "<tr>";
			//$fila = mysqli_fetch_row ($consulta);
			$fila = mysqli_fetch_assoc ($consulta);
			//$fila = mysqli_fetch_array ($consulta); // !OJO!, éste así lo devuelve y enseña las columnas duplicadas (flag MYSQL_BOTH por defecto).
			foreach ($fila as $columna) {
				if ($columna)
					echo "<td style='background:orange'>$columna</td>";
				else
					echo "<td style='background:red'>$columna</td>";
			}
			echo "</tr>";
		}
		echo "</table>";
		mysqli_close ($conexion);
		?>
	</body>
</html>
