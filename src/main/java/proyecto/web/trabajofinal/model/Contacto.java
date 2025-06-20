package proyecto.web.trabajofinal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contacto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String correo;
    private String asunto;
    private int celular;
    private String mensaje;

    public Contacto(Long id, String nombre, String correo, String asunto, int celular, String mensaje) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.asunto = asunto;
        this.celular = celular;
        this.mensaje = mensaje;
    }

    public Contacto() {

    }

    public Long getId() {
        return id;
    }

    public Contacto setId(Long id) {
        this.id = id;
        return this;
    }

    public String getNombre() {
        return nombre;
    }

    public Contacto setNombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public String getCorreo() {
        return correo;
    }

    public Contacto setCorreo(String correo) {
        this.correo = correo;
        return this;
    }

    public String getAsunto() {
        return asunto;
    }

    public Contacto setAsunto(String asunto) {
        this.asunto = asunto;
        return this;
    }

    public int getCelular() {
        return celular;
    }

    public Contacto setCelular(int celular) {
        this.celular = celular;
        return this;
    }

    public String getMensaje() {
        return mensaje;
    }

    public Contacto setMensaje(String mensaje) {
        this.mensaje = mensaje;
        return this;
    }
}
