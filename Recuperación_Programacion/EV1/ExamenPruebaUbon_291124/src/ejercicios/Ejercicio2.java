package ejercicios;

import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        String nombre1, nombre2, nombre3;
        boolean salir = false;

        do {
            System.out.println("Introduce 3 nombres");

            // Pedir los nombres y convertirlos correctamente a minúsculas
            System.out.print("Escribe el 1er nombre: ");
            nombre1 = teclado.nextLine().toLowerCase();

            System.out.print("Escribe el 2do nombre: ");
            nombre2 = teclado.nextLine().toLowerCase();

            System.out.print("Escribe el 3er nombre: ");
            nombre3 = teclado.nextLine().toLowerCase();

            // Comprobar si contiene la palabra "salir"
            if (nombre1.contains("salir") || nombre2.contains("salir") || nombre3.contains("salir")) {
                System.out.println("Saliendo del programa...");
                salir = true; // Establece la variable para salir del bucle
            }

            // Comprobar si son los 3 nombres iguales
            if (nombre1.equals(nombre2) && nombre2.equals(nombre3)) {
                System.out.println("\nHas invocado a " + nombre1 + "!");

                // Si además son iguales, comprobar si contiene "666"
                if (nombre1.contains("666")) { // Solo necesitamos comprobar nombre1 ya que son iguales
                    System.out.println("¡Huye y no mires atrás!");
                    salir = true;
                }
            } else {
                // Si los nombres no son iguales, simplemente se pide de nuevo
                System.out.println("");
            }

        } while (!salir); // El bucle se repite mientras 'salir' sea falso

        teclado.close();
    }
}