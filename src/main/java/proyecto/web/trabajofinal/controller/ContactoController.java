package proyecto.web.trabajofinal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import proyecto.web.trabajofinal.model.Contacto;

@Controller
public class ContactoController {

    //capturar los datos
    @GetMapping("/contacto")
    public String contacto(Model model) {
        Contacto contacto = new Contacto();
        model.addAttribute("contacto", contacto);
        return "contacto";
    }
    private String nombre;
    private String correo;
    private String asunto;
    private int celular;
    private String mensaje;

    //para enviar los datos
    @PostMapping("/registrar")
    public String registrar(Model model, Contacto contacto) {
        model.addAttribute("c_nombre", contacto.getNombre());
        model.addAttribute("c_correo", contacto.getCorreo());
        model.addAttribute("c_asunto", contacto.getAsunto());
        model.addAttribute("c_celular", contacto.getCelular());
        model.addAttribute("c_mensaje", contacto.getMensaje());
        System.out.println("c_nombre: " + contacto.getNombre());
        System.out.println("c_correo: " + contacto.getCorreo());
        System.out.println("c_asunto: " + contacto.getAsunto());
        System.out.println("c_celular: " + contacto.getCelular());
        System.out.println("c_mensaje: " + contacto.getMensaje());
        return "contacto";
    }
}
