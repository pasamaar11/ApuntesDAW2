package examen;

/*
 * Luis Lopez Jurado
 * 27/10/2025
 * 
 */
import java.util.Scanner;

public class Leer {
	static Scanner  teclado= new Scanner (System.in);
	
	//metodo que pide un entero por teclado  
	public static int leerEntero()  {
		
		System.out.println("Introduce un numero entero");
		int n;
		n= teclado.nextInt();
		teclado.nextLine();
		return n;
		
	}
	//metodo que pide un entero por teclado y lo devuelve 
	//aqui le pasamos como parametro el mensaje que queremos que muestre al pedir el numero 
	public static int leerEntero(String mensaje)  {

		System.out.println(mensaje);
		int n;
		n= teclado.nextInt();
		teclado.nextLine();
		return n;

	}
	public static double leerDoble(String mensaje)  {

		System.out.println(mensaje);
		double n;
		n= teclado.nextDouble();
		teclado.nextLine();
		return n;
	}
	public static String leerString(String mensaje)  {

		System.out.println(mensaje);
		String s="";
		s= teclado.nextLine();
		return s;
		
	}
}
