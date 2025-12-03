package ejercicios;

public class Sudoku {
	public static void main(String[] args) {
		int[][] sudoku = {
				// Ojo: En el enunciado original, este tiene un error (dos '2').
				// Si usamos este, el programa dirá que NO es válido (¡lo cual es correcto!).
				{ 1, 4, 7, 9, 2, 3, 8, 5, 6 }, { 6, 3, 2, 8, 7, 5, 4, 9, 1 }, { 9, 5, 8, 1, 6, 4, 3, 7, 2 },
				{ 8, 7, 5, 4, 1, 6, 9, 2, 3 }, { 4, 1, 9, 3, 5, 2, 6, 8, 7 }, { 2, 6, 3, 7, 9, 8, 5, 1, 4 },
				{ 3, 9, 4, 6, 8, 7, 1, 2, 5 },

				{ 5, 2, 6, 2, 4, 1, 7, 3, 8 }, { 7, 8, 1, 5, 3, 9, 2, 6, 4 } };

		System.out.println("--- Sudoku ---");
		mostrarSudoku(sudoku);
		boolean esValido = comprobarFilas(sudoku) && comprobarColumnas(sudoku) && comprobarSubcuadros(sudoku);

		if (esValido) {
			System.out.println("El sudoku SÍ es válido");
		} else {
			System.out.println("El sudoku NO es válido");
		}
	}

	public static void mostrarSudoku(int[][] sudoku) {
		for (int i = 0; i < 9; i++) {// Bucle filas
			for (int j = 0; j < 9; j++) {// Bucle columnas
				System.out.print(sudoku[i][j] + " ");

				if ((j + 1) % 3 == 0 && j != 8) {
					System.out.print("| ");
				}
			}

			System.out.println();

			if ((i + 1) % 3 == 0 && i != 8) {
				System.out.println("----------------------");
			}
		}
	}

	public static boolean comprobarFilas(int[][] sudoku) {
		// recorremos las 9 filas
		for (int i = 0; i < 9; i++) {
			boolean[] visto = new boolean[10];// reiniciamos en cada fila, va de 1 a 9

			// recorre los 9 numeros de la fila
			for (int j = 0; j < 9; j++) {
				int num = sudoku[i][j];

				if (num < 1 || num > 9) {
					return false;
				}

				if (visto[num] == true) {
					return false;
				}

				visto[num] = true;
			}
		}
		return true;
	}

	public static boolean comprobarColumnas(int[][] sudoku) {
		for (int i = 0; i < 9; i++) {
			boolean[] visto = new boolean[10];// reiniciamos en cada fila, va de 1 a 9

			// recorre los 9 numeros de la fila
			for (int j = 0; j < 9; j++) {
				int num = sudoku[j][i];

				if (num < 1 || num > 9) {
					return false;
				}

				if (visto[num] == true) {
					return false;
				}

				visto[num] = true;
			}
		}
		return true;
	}

	public static boolean comprobarSubcuadros(int[][] sudoku) {

		// Itera sobre las filas de inicio del subcuadro (0, 3, 6)
		for (int filaSub = 0; filaSub < 9; filaSub += 3) {
			// Itera sobre las columnas de inicio del subcuadro (0, 3, 6)
			for (int colSub = 0; colSub < 9; colSub += 3) {

				// ¡Reinicia el array visto para CADA NUEVO subcuadro!
				boolean[] visto = new boolean[10];

				// Itera las 3 filas internas del subcuadro (0, 1, 2)
				for (int i = 0; i < 3; i++) {
					// Itera las 3 columnas internas del subcuadro (0, 1, 2)
					for (int j = 0; j < 3; j++) {

						// Calcular la posición real, va del 0 al 2, no del 1 al 3
						int filaReal = filaSub + i;
						int colReal = colSub + j;
						int num = sudoku[filaReal][colReal];

						if (num < 1 || num > 9) {
							return false;
						}

						if (visto[num] == true) {
							return false;

						}

						visto[num] = true;
					}
				}
			}
		}
		return true;
	}
}
