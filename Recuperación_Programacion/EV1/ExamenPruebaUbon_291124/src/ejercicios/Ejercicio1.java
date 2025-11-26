package ejercicios;

import java.util.Arrays;
import java.util.Scanner;

public class Ejercicio1 {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int num;
		int[] numeros = new int[5];

		for (int i = 0; i < 5; i++) {
			do {
				System.out.println("Escribe número entre -10 y 10");
				num = teclado.nextInt();
			} while (num < -10 || num > 10);
			numeros[i] = num;
		}

		System.out.println("Array original: " + Arrays.toString(numeros));
		Arrays.sort(numeros);
		System.out.println("Array ordenado: " + Arrays.toString(numeros));

		int sumaMultiplos = 0;
		for (int numeroActual : numeros) {
			if (numeroActual % 3 == 0) {
				sumaMultiplos += numeroActual;
			}
		}
		System.out.println("Suma de los múltiplos de 3: " + sumaMultiplos);
		teclado.close();
	}
}
