package examen;
/*
 * Ejercicio 3.- Crea una clase Punto según el siguiente diagrama
Punto
x
y
//Representan las coordenadas horizontal y vertical del punto
Punto(x,y) //constructor
Punto()//construcor que genera un punto X=0, y=0;
getters y setters
toString //usalo para imprimir la información del punto
moverX(int cantidad) //Aumenta la coordenada x del punto en cantidad
MoverY(int cantidad) //Aumenta la coordenada y del punto en cantidad.

 */

public class Punto {
	//atributos
	private int x,y;
	
	//constructores
	public Punto() {
		this.x=0;
		this.y=0;
	}
	
	public Punto(int x, int y) {
		this.x=x;
		this.y=y;
	}

	//getters an setters
	
	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	//toString()
	@Override
	public String toString() {
		return "Punto [x=" + x + ", y=" + y + "]";
	}
	
	//metosos aumentarX aumetarY
	
	public void aumentarX(int cantidad) {
		x+=cantidad;
	}
	public void aumentarY(int cantidad) {
		y+=cantidad;
	}
	
	//metodo para comparar dos puntos. (En el examen se podia eincluir en el main)
	public static boolean coinciden(Punto p1, Punto p2) {	
		return (p1.getX()==p2.getX()&&p1.getY()==p2.getY());
	}
	

}
