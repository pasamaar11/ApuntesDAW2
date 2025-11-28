package ejercicios;

import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int numero, resultado1, resultado2, resultado3, random1, random2, random3;

        System.out.print("Escribe el número: ");
        numero = teclado.nextInt();

        random1 = (int) (Math.random() * (50 - 1) + 1);
        random2 = (int) (Math.random() * (50 - 1) + 1);
        random3 = (int) (Math.random() * (50 - 1) + 1);
        resultado1 = numero * random1;
        resultado2 = numero * random2;
        resultado3 = numero * random3;

        System.out.println("Multiplicaciones aleatorioas");
        System.out.println(numero + " x " + random1 + " = " + resultado1 + " (" + esParOImpar(resultado1) + ")");
        System.out.println(numero + " x " + random2 + " = " + resultado2 + " (" + esParOImpar(resultado2) + ")");
        System.out.println(numero + " x " + random3 + " = " + resultado3 + " (" + esParOImpar(resultado3) + ")");

        teclado.close();
    }

    public static String esParOImpar(int resultado) {
        if (resultado % 2 == 0) {
            return ("Es par");
        } else {
            return ("Es impar");
        }
    }
}
