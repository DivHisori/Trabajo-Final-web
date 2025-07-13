package proyecto.web.trabajofinal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@SpringBootApplication
//todo NO necesario cambiar el texto cambiante del index
//todo mejorar el css del editor, que todo no sea de corrido
//TODO https://uiverse.io/alexruix/cowardly-ape-35 para ventana modal, en porque contratarme? index
//TODO puede ser para los div editor https://uiverse.io/ElSombrero2/tricky-robin-67
public class main {
    public static void main(String[] args) {
        SpringApplication.run(main.class, args);
    }
}
