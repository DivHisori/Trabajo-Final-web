package proyecto.web.trabajofinal.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import proyecto.web.trabajofinal.Login;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLogin(@RequestParam(value = "error", required = false) String error,
                            @RequestParam(value = "logout", required = false) String logout,
                            Model model) {
        if (error != null) {
            model.addAttribute("error", "Usuario o contraseña incorrectos");
        }
        if (logout != null) {
            model.addAttribute("message", "Has cerrado sesión exitosamente");
        }
        return "login";
    }
    @GetMapping("/editor")
    public String editor(){
        return "editor";
    }
    @GetMapping("/acceso-denegado")
    public String accesoDenegado(){
        return "acceso-denegado";
    }

}
