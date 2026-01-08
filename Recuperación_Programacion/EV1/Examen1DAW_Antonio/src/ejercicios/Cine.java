package ejercicios;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Cine {
	private int filas;
	private int columnas;
	private char[][] sala;
	private static Scanner teclado = new Scanner(System.in);

	// --- Constructor ---
	/**
	 * Constructor de la clase Cine. Inicializa la sala con el número de filas y
	 * columnas especificado, y establece todos los asientos a 'L' (Libre).
	 *
	 * @param _filas    Número de filas de la sala.
	 * @param _columnas Número de columnas de la sala.
	 */

	public Cine(int _filas, int _columnas) {
		this.filas = _filas;
		this.columnas = _columnas;
		this.sala = new char[filas][columnas];

		// Inicializar todos los asientos a L, libres.
		for (int i = 0; i < filas; i++) {
			for (int j = 0; j < columnas; j++) {
				this.sala[i][j] = 'L';
			}
		}
	}

	public void OcuparAsiento() {
		System.out.println("Ocupar asiento");
		int fila = -1, columna = -1;
		boolean entradaValida = false;

		while (!entradaValida) {
			try {
				System.out.print("Introduce la fila (1 a " + filas + "):");
				fila = teclado.nextInt();
				System.out.print("Introduce la columna (1 a " + columnas + "):");
				columna = teclado.nextInt();

				if (fila >= 1 && fila <= filas && columna >= 1 && columna <= columnas) {
					entradaValida = true;
				} else {
					System.out.println("ERROR: Fila o columna fuera de rango");
				}
			} catch (InputMismatchException e) {
				System.out.println("Debes introducir números enteros");
				teclado.next();// limpiamos el buffer
			}
		}

		int f = fila - 1;
		int c = columna - 1;

		if (this.sala[f][c] == 'L') {
			this.sala[f][c] = 'O';
			System.out.println("Asiento (" + fila + ", " + columna + ") ocupado con éxito.");
		} else {
			System.out.println("ERROR: Asiento (" + fila + ", " + columna + ") ya está ocupado.");
		}
	}

	public void LiberarAsiento() {
		System.out.println("Liberar asiento");
		int fila = -1, columna = -1;
		boolean entradaValida = false;

		while (!entradaValida) {
			try {
				System.out.println("Introduce la fila (1 a " + filas + "): ");
				fila = teclado.nextInt();
				System.out.println("Introduce la columna (1 a " + columnas + "): ");
				columna = teclado.nextInt();

				if (fila >= 1 && fila <= filas && columna >= 1 && columna <= columnas) {
					entradaValida = true;
				} else {
					System.out.println("ERROR: Fila o columna fuera de rango.");
				}
			} catch (InputMismatchException e) {
				System.out.println("ERROR: Debes introducir números enteros");
				teclado.next();
			}
		}

		int f = fila - 1;
		int c = columna - 1;

		if (this.sala[f][c] == 'O') {
			this.sala[f][c] = 'L';
			System.out.println("Asiento (" + fila + ", " + columna + ") liberado con éxito.");
		} else {
			System.out.println("ERROR: Asiento (" + fila + ", " + columna + ") ya libre.");
		}
	}

	public void MostrarSala() {
		System.out.println("Estado de la sala");
		System.out.println("   ");
		for (int i = 0; i < columnas; i++) {
			System.out.printf(" %2d", i + 1);
		}

		System.out.println("\n " + "-".repeat(columnas * 3));

		for (int j = 0; j < filas; j++) {
			System.out.printf("%2d |", j + 1);
			for (int k = 0; k < columnas; k++) {
				System.out.printf(" %2c", this.sala[j][k]);
			}

			System.out.println();
		}

		System.out.println("\nLEYENDA: L = Libre, O = Ocupado");
	}

}