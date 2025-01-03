# El **paradigma de programación orientada a objetos (POO)** es uno de los más utilizados y se centra en la creación de "objetos" que representan conceptos del mundo real y sus relaciones.

## Aquí tienes una explicación detallada pero breve:

### Conceptos Clave de la Programación Orientada a Objetos

1. **Clase**:
   - **Descripción**: Es una plantilla o modelo que define las propiedades (atributos) y comportamientos (métodos) comunes de un grupo de objetos.
   - **Ejemplo**: `class Coche {}`

2. **Objeto**:
   - **Descripción**: Es una instancia de una clase, que posee un estado y un comportamiento específico.
   - **Ejemplo**: `Coche miCoche = new Coche();`

3. **Encapsulamiento**:
   - **Descripción**: Esconder los detalles internos de un objeto y exponer solo lo necesario.
   - **Ejemplo**: Usar métodos `get` y `set` para acceder a los atributos privados.

4. **Herencia**:
   - **Descripción**: Permite crear nuevas clases basadas en clases existentes, reutilizando código y creando una jerarquía de clases.
   - **Ejemplo**: `class CocheDeportivo extends Coche {}`

5. **Polimorfismo**:
   - **Descripción**: Permite a los objetos ser tratados como instancias de su clase padre, mientras se comportan de manera específica según su clase derivada.
   - **Ejemplo**: `Coche miCoche = new CocheDeportivo();`

### Ejemplo en Java

```java
// Definición de la clase
class Coche {
    private String marca;
    private int velocidad;

    public Coche(String marca) {
        this.marca = marca;
        this.velocidad = 0;
    }

    public void acelerar(int incremento) {
        this.velocidad += incremento;
    }

    public int getVelocidad() {
        return this.velocidad;
    }

    public String getMarca() {
        return this.marca;
    }
}

// Herencia y polimorfismo
class CocheDeportivo extends Coche {
    public CocheDeportivo(String marca) {
        super(marca);
    }

    @Override
    public void acelerar(int incremento) {
        super.acelerar(incremento * 2); // Acelera el doble de rápido
    }
}

public class Main {
    public static void main(String[] args) {
        Coche miCoche = new Coche("Toyota");
        CocheDeportivo miCocheDeportivo = new CocheDeportivo("Ferrari");

        miCoche.acelerar(10);
        miCocheDeportivo.acelerar(10);

        System.out.println("Velocidad de mi coche: " + miCoche.getVelocidad());
        System.out.println("Velocidad de mi coche deportivo: " + miCocheDeportivo.getVelocidad());
    }
}
```
Este ejemplo muestra cómo definir una clase `Coche`, crear objetos de esta clase y cómo la herencia y el polimorfismo permiten extender la funcionalidad con `CocheDeportivo`.

