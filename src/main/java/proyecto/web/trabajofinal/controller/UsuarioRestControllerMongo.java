package proyecto.web.trabajofinal.controller;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import proyecto.web.trabajofinal.model.UsuarioMongo;
import proyecto.web.trabajofinal.repository.UsuarioRepositoryMongo; // <-- Importante: aquí está tu repositorio de MongoDB

/*
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/usuariosMongo")
*/

public class UsuarioRestControllerMongo {

/*
    @Autowired
    private UsuarioRepositoryMongo usuarioRepository; // <-- ¡Aquí es donde se conecta con MongoDB!


    @PostMapping("/registrar")
    public UsuarioMongo guardarUsuario(@RequestBody UsuarioMongo usuario) {
        if (usuario.getFechaRegistro() == null) {
            usuario.setFechaRegistro(LocalDate.now()); // Asigna la fecha actual si no viene
        }
        // Cuando llamas a save(), Spring Data MongoDB se encarga de todo.
        // Convierte tu objeto 'Usuario' en un documento BSON y lo guarda en la colección 'usuarios'.
        return usuarioRepository.save(usuario);
    }
    @GetMapping("/contacto")
    public String mostrarFormularioContacto(Model model) {
        model.addAttribute("usuarioMongo", new UsuarioMongo());
        return "contacto";
    }


    @PostMapping("/registrar")
    public String guardarContacto(@ModelAttribute UsuarioMongo usuarioMongo) {
        usuarioRepository.save(usuarioMongo);
        return "redirect:/exito";
    }
*/

}