package proyecto.web.trabajofinal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//controlador para las referencias de acceso publico
@Controller
public class UsuarioController {


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


}
