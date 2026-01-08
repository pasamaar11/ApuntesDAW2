package examen;

/*
 * jercicio 2.- Crea una clase principal llamada Ejercicio2 y una clase llamada utilidades en la que incluirás todos los métodos del ejercicio. 

Los siguientes métodos de la clase utilidades no se encargarán de la entrada y salida. 
a) En la clase utilidades genera un método llamado validar al que se le pase un String y valides que sólo contiene letras de la A-Z o a-z y que tiene más de 8 caracteres. 
b) En la clase utilidades genera un método llamado unirCadenas al que se le pasen dos String y me devuelva una cadena con la composición de las dos cadenas letra a letra en mayúsculas e intercaladas Por ejemplo si recibe las cadenas “HECTOR” y “Luis”  devolverá la cadena HLEUCITSOR.
c) Genera un método esPalindromo al que le pases una cadena y devuelva un booleano indicando si es un palisandro. 


En la clase main debes generar un programa que realice las siguientes tareas.
a)Pida dos cadenas que deben ser validados utilizando los métodos anteriores. Si no cumplen las condiciones debes de volver a pedir la cadena. 
b) El programa debe de mostrar la cadena unida. Si la cadena unida no es palíndromo deberá seguir pidiendo cadenas en pares hasta que el resultado sea un palíndromo.
 */


//para probar
//s1 =rcnc
//s2=eooer
public class Ejercicio2DAM {

	public static void main(String[] args) {
		//pedir dos cadenas validadas
		String s1="",s2="",cadenaUnida;
		do {
			System.out.println("Introduce dos cadenas que al unitrlas de un palindromo");
			s1=pedirCadena();
			s2=pedirCadena();
			cadenaUnida=UtilidadesDAM.concatena(s1, s2);
			System.out.println(cadenaUnida + (UtilidadesDAM.esPalindromo(cadenaUnida)?" esPalindromo": " no es palindromo"));
			
		}while(!UtilidadesDAM.esPalindromo(cadenaUnida));
		System.out.println("Por fin has introducido un palidromo");

	}

	private static String pedirCadena() {
		String resultado="";
		do {
			resultado=Leer.leerString("Introduce la cadena");
		}while(!UtilidadesDAM.validar(resultado));
		
		return resultado;
	}

}
