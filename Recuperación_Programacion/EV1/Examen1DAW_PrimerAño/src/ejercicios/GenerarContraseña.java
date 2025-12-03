package ejercicios;

import java.util.Random;

public class GenerarContraseña {
	private static final String MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
	private static final String MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final String DIGITOS = "0123456789";
	private static final String ESPECIALES = "{@#$%&*}";

	private static String[] historialClaves = new String[100];
	private static int totalClaves = 0;
	private static String ultimaClave = "N/A";

	private static int getPosicionLibre(Random random, int len, boolean[] usadas) {
		int posicion;
		do {
			posicion = random.nextInt(len);
		} while (usadas[posicion]);

		usadas[posicion] = true;
		return posicion;
	}
	
	public static String generaPassword() {
		Random random = new Random();
		
		//Longitud random entre 8 y 12
		// rand.nextInt(rango) + minimo  ->  rand.nextInt(12 - 8 + 1) + 8 = rand.nextInt(5) + 8
		int longitud = random.nextInt(5) + 8;
		char[] password = new char[longitud];
		
		
	}

}
