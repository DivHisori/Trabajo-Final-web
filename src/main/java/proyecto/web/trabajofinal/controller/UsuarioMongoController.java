package proyecto.web.trabajofinal.controller;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import proyecto.web.trabajofinal.model.UsuarioMongo;
import proyecto.web.trabajofinal.repository.UsuarioRepositoryMongo;

@Controller
public class UsuarioMongoController {

    @Autowired
    private UsuarioRepositoryMongo usuarioRepository;

    @GetMapping("/contacto")
    public String mostrarFormularioContacto(Model model) {
        model.addAttribute("usuarioMongo", new UsuarioMongo());
        return "contacto";
    }

    @PostMapping("/registrar")
    public String guardarContacto(@ModelAttribute UsuarioMongo usuarioMongo) {
        usuarioMongo.setFechaRegistro(LocalDate.now());
        usuarioRepository.save(usuarioMongo);
        UsuarioMongo savedUser = usuarioRepository.save(usuarioMongo);
        System.out.println("Usuario guardado con ID: " + savedUser.getId());

        return "/contacto";
    }
}
