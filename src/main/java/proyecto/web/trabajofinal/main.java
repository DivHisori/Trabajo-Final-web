package proyecto.web.trabajofinal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@SpringBootApplication
//todo parte de contacto, limpiar los correo
//todo agregar a que hora se logueo CHOW usuarioPostgreSQL
//todo NO necesario cambiar el texto cambiante
public class main {
    public static void main(String[] args) {
        SpringApplication.run(main.class, args);
    }
}
