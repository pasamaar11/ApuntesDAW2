package examen;

public class UtilidadesDAM {

	//valida la cadena compuesta por 4 o mas letras
		public static boolean validar(String s) {
			return s.matches("[A-Za-z]{4,}");
		}
		
		//Concatena las cadenas alternando caracteres
		public static String concatena(String s1, String s2) {
			//Calculo la longitud de la cadena mas pequeña
			String resultado="";
			//genero las cadenas menor y mayor
			String menor,mayor;
			if(s1.length()<=s2.length()) {		
				menor=s1;
				mayor=s2;
			}else {
				menor=s2;
				mayor=s1;
			}
			//concateno las cadenas
			for(int i=0;i<menor.length();i++) {
				resultado=resultado+menor.charAt(i)+mayor.charAt(i);
			}
			//añado la parte del mayor no concatenada
			resultado=resultado+mayor.substring(menor.length());
			return resultado;
			
		}
		//metodo que devuelve true si una cadena es un palindromo
		public static boolean esPalindromo(String s) {
			s=s.toUpperCase();
			for(int i=0;i<s.length();i++) {
				if(s.charAt(i)!=s.charAt(s.length()-1-i)) {return false;}
			}
			return true;
		}

}
