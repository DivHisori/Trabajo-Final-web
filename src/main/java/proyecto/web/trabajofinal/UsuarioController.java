package proyecto.web.trabajofinal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsuarioController {

    @GetMapping("/contacto")
    public String contacto(){
        return "contacto";
    }
    @GetMapping("/index")
        public String index(){
            return"index";
        }
    @GetMapping("/proyectos")
    public String proyectos(){
        return "proyectos";
    }
    @GetMapping("/sobremi")
    public String sobremi(){
        return "sobremi";
    }
    @GetMapping("/editor")
    public String editor(){
        return "editor";
    }
     @GetMapping("/login")
    public String login(){
        return "login";
    }
}
