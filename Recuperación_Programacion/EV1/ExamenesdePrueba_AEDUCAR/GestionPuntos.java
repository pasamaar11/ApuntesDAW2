package examen;

import java.util.Scanner;

/*
 * Clase principal del ejercicio 3.
 */
public class GestionPuntos {

	public static void main(String[] args) {
		final int XPUNTO=5;
		final int YPUNTO=7;
		int opcion=0;
		Punto p1=new Punto();//punto a desplazar
		Punto p2=new Punto(XPUNTO,YPUNTO);
		do {
			//muestra coordenadas
			System.out.println("Coordenadas del punto diana: "+ p2);
			System.out.println("Coordenadas del punto a desplazar "+ p1);
			//Mostrar menu
			System.out.println("opciones");
			System.out.println("1.- avanzar x");
			System.out.println("2.- avanzar y");
			//pedir opcion
			opcion=Leer.leerEntero("Introduce opcion");
			
			
			//Ejecutar accion segun opcion
			switch (opcion) {
			case 1:
				p1.aumentarX(Leer.leerEntero("introduce desplazamiento X"));
				break;
			case 2:
				p1.aumentarY(Leer.leerEntero("introduce desplazamiento Y"));
				break;
			default:
				System.out.println("opcion erronea");
				break;
			}					
			
		}while(!Punto.coinciden(p1,p2));
		System.out.println("Los puntos coinciden");

	}

}
