package ejercicios;

import java.util.Scanner;

public class Ejercicio1 {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		String frase;

		do {
			System.out.println("Entrada:");
			frase = teclado.nextLine();
			// System.out.println(frase);
			if (frase.length() > 80) {
				System.out.println("ERROR: Escriba menos de 80 caracteres.");
			}
		} while (frase.length() > 80);

		String[] palabras = frase.split(" ");// hasta el espacio cuenta una palabra
		// Escribe el array de palabras, se separan las palabras con comas
		// System.out.println(Arrays.toString(palabras));

		System.out.println("Salida:");
		for (int i = 0; i < palabras.length; i++) {
			System.out.print("['" + palabras[i] + "']");
		}

		teclado.close();
	}
}
