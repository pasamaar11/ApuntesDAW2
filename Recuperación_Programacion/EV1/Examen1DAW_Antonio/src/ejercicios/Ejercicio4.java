package ejercicios;

public class Ejercicio4 {

    public static void main(String[] args) {
        // 1. Crear una sala de cine de 5 filas y 10 columnas
        Cine miCine = new Cine(5, 10);
        
        System.out.println("--- 🎬 Inicialización del Cine ---");
        miCine.MostrarSala();
        
        // 2. Ejemplo de uso de OcuparAsiento
        System.out.println("\n--- Intentando Ocupar Asientos ---");
        miCine.OcuparAsiento(); // Pide al usuario Fila y Columna
        miCine.OcuparAsiento(); // Pide al usuario Fila y Columna
        
        // 3. Mostrar el estado después de ocupar
        miCine.MostrarSala();
        
        // 4. Ejemplo de uso de LiberarAsiento
        System.out.println("\n--- Intentando Liberar Asiento ---");
        miCine.LiberarAsiento(); // Pide al usuario Fila y Columna
        
        // 5. Mostrar el estado final
        miCine.MostrarSala();
    }
}