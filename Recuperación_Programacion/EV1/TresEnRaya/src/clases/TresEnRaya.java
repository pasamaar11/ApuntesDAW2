package clases;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TresEnRaya {

    // Variables de estado del juego
    private static char[][] tablero = new char[3][3];
    private static Scanner scanner = new Scanner(System.in);
    private static char jugadorActual = 'X';
    private static int movimientos = 0;

    public static void main(String[] args) {
        inicializarTablero();
        jugar();
    }

    /**
     * Inicializa el tablero, llenando todas las celdas con el carácter de espacio ' '.
     */
    private static void inicializarTablero() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                tablero[i][j] = ' ';
            }
        }
    }

    /**
     * Imprime el estado actual del tablero en la consola con un formato de cuadrícula.
     */
    private static void mostrarTablero() {
        System.out.println("\n  1 2 3");
        System.out.println("  -----");
        for (int i = 0; i < 3; i++) {
            System.out.print((i + 1) + " |");
            for (int j = 0; j < 3; j++) {
                System.out.print(tablero[i][j] + "|");
            }
            System.out.println();
        }
        System.out.println("  -----");
    }

    /**
     * Contiene el bucle principal del juego.
     */
    private static void jugar() {
        boolean juegoTerminado = false;

        while (!juegoTerminado) {
            mostrarTablero();
            System.out.println("Turno de **" + jugadorActual + "**. Ingresa Fila y Columna (ej: 1 3):");

            int fila = -1;
            int columna = -1;

            // Bloque para manejar la entrada del usuario y posibles errores
            try {
                // Leemos los valores y restamos 1 para convertirlos a índices del array (0-2)
                fila = scanner.nextInt() - 1; 
                columna = scanner.nextInt() - 1; 
            } catch (InputMismatchException e) {
                System.out.println("❌ Error: Entrada inválida. Usa dos números enteros separados por espacio.");
                scanner.next(); // Limpia el buffer de entrada para evitar un bucle infinito
                continue;
            }

            // Intentar hacer el movimiento
            if (hacerMovimiento(fila, columna)) {
                movimientos++;

                if (verificarGanador()) {
                    mostrarTablero();
                    System.out.println("🎉 ¡El jugador **" + jugadorActual + "** ha ganado!");
                    juegoTerminado = true;
                } else if (movimientos == 9) {
                    mostrarTablero();
                    System.out.println("🤝 ¡Es un empate! No quedan celdas libres.");
                    juegoTerminado = true;
                } else {
                    // Cambiar de jugador para el siguiente turno
                    jugadorActual = (jugadorActual == 'X') ? 'O' : 'X';
                }
            } else {
                System.out.println("⚠️ Movimiento inválido (celda fuera de rango o ya ocupada). Intenta de nuevo.");
            }
        }
        // Cerrar el scanner al finalizar el juego
        scanner.close();
        System.out.println("Fin del juego.");
    }

    /**
     * Verifica si el movimiento es válido (dentro de límites y celda vacía) y lo realiza.
     * @param fila La fila (índice 0-2)
     * @param columna La columna (índice 0-2)
     * @return true si el movimiento fue exitoso, false si fue inválido.
     */
    private static boolean hacerMovimiento(int fila, int columna) {
        // 1. Verificar límites (0 a 2)
        if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3) {
            // 2. Verificar si la celda está vacía
            if (tablero[fila][columna] == ' ') {
                tablero[fila][columna] = jugadorActual;
                return true;
            }
        }
        return false;
    }

    /**
     * Comprueba si el jugador actual ha ganado verificando todas las líneas posibles.
     * @return true si el jugador actual es ganador, false en caso contrario.
     */
    private static boolean verificarGanador() {
        // --- 1. Verificar Filas y Columnas ---
        for (int i = 0; i < 3; i++) {
            // Verificar Fila 'i': (i,0), (i,1), (i,2)
            if (tablero[i][0] != ' ' && tablero[i][0] == tablero[i][1] && tablero[i][1] == tablero[i][2]) {
                return true;
            }
            // Verificar Columna 'i': (0,i), (1,i), (2,i)
            if (tablero[0][i] != ' ' && tablero[0][i] == tablero[1][i] && tablero[1][i] == tablero[2][i]) {
                return true;
            }
        }

        // --- 2. Verificar Diagonales ---
        // Diagonal Principal: (0,0), (1,1), (2,2)
        if (tablero[0][0] != ' ' && tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2]) {
            return true;
        }
        // Diagonal Secundaria: (0,2), (1,1), (2,0)
        if (tablero[0][2] != ' ' && tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0]) {
            return true;
        }

        return false;
    }
}