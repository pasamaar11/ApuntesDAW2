package examen;

/*
 * Ejercicio 1.- Crea una clase principal llamada Ejercicio1. 
a) Crea dos array de 10 números enteros llamados arrayA y arrayB que rellenaras en un método con números aleatorios entre uno y 6.
b) Crea un método llamado comparacion que devuelva un array que se generará de la siguiente manera:
a) Una 'A' si el numero en esa posición del arrayA es mayor que el del arrayB, una 'X' si son iguales y una 'B' si el numero del arrayB es mayor que el del arrayA.
c) Muestra utilizando métodos los tres arrays en lineas consecutivas los valores  en columnas dejando tres espacios para cada valor.
d) Muestra el resultado de la comparación de arrays indicando el numero de 'A', 'B' y 'X' 
 */
public class Ejercicio1DAM {

	public static void main(String[] args) {
		// Creación arays (1 punto)
		final int DIMENSION = 10;
		int[] arrayA = new int[DIMENSION];
		int[] arrayB = new int[DIMENSION];
		char[] arrayResultado = new char[DIMENSION];

		// llenar Arrays (2 puntos)
		llenarArray(arrayA);
		llenarArray(arrayB);
		// comparamos vectores (3 puntos)
		arrayResultado = comparacion(arrayA, arrayB);

		// mostrar vectores. Se necesitan dos metodos no hemos visto genericos //(2
		// puntos)
		mostrarArray(arrayA);
		mostrarArray(arrayB);
		mostrarArrayResultados(arrayResultado);
		Object arrayResultados;
		// Ver puntuaciones 2 puntos
		verPuntuaciones(arrayResultado);

	}

	private static void verPuntuaciones(char[] v) {
		int contadorA = 0, contadorB = 0, contadorX = 0;
		for (int i = 0; i < v.length; i++) {
			if (v[i] == 'A') {
				contadorA++;
			} else if (v[i] == 'B') {
				contadorB++;
			} else {
				contadorX++;
			}
		}
		System.out.println("Resultados");
		System.out.println("A: " + contadorA + " B: " + contadorB + " X: " + contadorX);
		String ganador = contadorA > contadorB ? "Array A" : (contadorB > contadorA) ? "ArrayB" : "Empate";
		System.out.println("El ganador es " + ganador);

	}

	private static void mostrarArrayResultados(char[] v) {
		for (int i = 0; i < v.length; i++) {
			System.out.printf("%3c", v[i]);
		}
		System.out.println();

	}

	// muestra el array de eneteros
	private static void mostrarArray(int[] v) {
		for (int i = 0; i < v.length; i++) {
			System.out.printf("%3d", v[i]);
		}
		System.out.println();

	}

	// metodo que rellena el array con numeros aleatorios entre 1 y 6
	private static void llenarArray(int[] v) {
		// recorrer el vector y poner numeros aleatorios
		for (int i = 0; i < v.length; i++) {
			v[i] = (int) (Math.random() * 6 + 1);
		}
	}

	// metodo que genera el Array de caracteres con la comparación de los arrays de
	// números
	public static char[] comparacion(int[] v1, int[] v2) {
		// no comparamos que los vectores tiene la misma dimension
		char[] resultado = new char[v1.length];
		for (int i = 0; i < resultado.length; i++) {
			resultado[i] = (v1[i] > v2[i]) ? 'A' : (v1[i] < v2[i] ? 'B' : 'X'); // se puede hacer con if

		}
		return resultado;

	}

}
