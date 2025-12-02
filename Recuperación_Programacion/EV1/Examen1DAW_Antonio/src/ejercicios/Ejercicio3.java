package ejercicios;

import java.util.Scanner;

public class Ejercicio3 {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int opcion, random;

		random = (int) (Math.random() * 3) + 1;
		System.out.println("Vamos a jugar a piedra, papel o tijera, elige una opción:\n" + "1 - Piedra" + "\n2 - Papel"
				+ "\n3 - Tijera" + "\n4 - Salir");

		opcion = teclado.nextInt();
		switch (opcion) {
		case 1:
			System.out.println("Usuario elige Piedra");
			if(random == 3) {
				System.out.println("La máquina elige tijera"
						+ "\nGANA EL USUARIO");
			}else if(random == 2){
				System.out.println("La máquina elige papel"
						+ "\nGANA LA MÁQUINA");
			}else {
				System.out.println("EMPATE");
			}
			break;
		case 2:
			System.out.println("Usuario elige Papel");
			if(random == 1) {
				System.out.println("La máquina elige piedra"
						+ "\nGANA EL USUARIO");
			}else if(random == 3){
				System.out.println("La máquina elige tijera"
						+ "\nGANA LA MÁQUINA");
			}else {
				System.out.println("EMPATE");
			}
			break;
		case 3:
			System.out.println("Usuario elige Tijera");
			if(random == 2) {
				System.out.println("La máquina elige papel"
						+ "\nGANA EL USUARIO");
			}else if(random == 1){
				System.out.println("La máquina elige piedra"
						+ "\nGANA LA MÁQUINA");
			}else {
				System.out.println("EMPATE");
			}
			break;
		case 4:
			System.out.println("Saliendo del programa...");
			System.exit(0);
			break;
		}

		teclado.close();
	}

}
