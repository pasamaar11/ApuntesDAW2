package ejercicios;

import java.util.Scanner;

public class Ejercicio2 {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int numero;
		
		System.out.println("Escribe un número");
		numero = teclado.nextInt();
		
		if(numero < 0) {
			System.out.println("El número es negativo");
		}else if(numero == 0) {
			System.out.println("El número es el 0");
		}else {
			System.out.println("El número es positivo");
		}
		
		teclado.close();
	}
}
