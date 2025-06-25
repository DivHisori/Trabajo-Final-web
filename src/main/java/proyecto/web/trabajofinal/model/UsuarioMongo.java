package proyecto.web.trabajofinal.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id; // Importa la anotación Id de Spring Data
import org.springframework.data.mongodb.core.mapping.Document; // Anotación para indicar que es un documento de MongoDB
import org.springframework.data.mongodb.core.mapping.Field; // Para mapear el nombre del campo si es diferente

import java.time.LocalDate; // Ojo: MongoDB guarda fechas como Date, no LocalDate directamente sin conversión
import java.time.LocalDateTime;

@Document(collection = "Usuarios") // <-- ¡Cambio aquí! Esto mapea la clase a la colección 'usuarios' en MongoDB
public class UsuarioMongo {

    @Id // <-- ¡Cambio aquí! Esta es la anotación de ID para MongoDB.
    //MongoDB autogenera un ObjectId si no lo provees
    private String id; // <-- El ID de MongoDB es un String (ObjectId por defecto)

    public String nombre;

    @Field("correo_electronico") // <-- Opcional: Mapea 'correoElectronico' a 'correo_electronico' en MongoDB
    private String correoElectronico;

    @Field("celular") // <-- Opcional: Mapea 'celular' a 'celular' en MongoDB
    private String celular;

    private String asunto;

    private String mensaje;

    @Field("fecha_registro") // <-- Opcional: Mapea 'fechaRegistro' a 'fecha_registro' en MongoDB
    private LocalDateTime fechaRegistro; // MongoDB guarda Date, así que Spring Data hará la conversión

    // Constructor vacío (necesario para Spring Data)
    public UsuarioMongo() {
    }

    // Getters y Setters (Mantén estos, pero actualiza el id)
    public String getId() { // El ID ahora es un String
        return id;
    }

    public void setId(String id) { // El ID ahora es un String
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }
    public String getAsunto() {
        return asunto;
    }

    public UsuarioMongo setAsunto(String asunto) {
        this.asunto = asunto;
        return this;
    }

    public String getMensaje() {
        return mensaje;
    }

    public UsuarioMongo setMensaje(String mensaje) {
        this.mensaje = mensaje;
        return this;
    }

    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(LocalDateTime fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
}
