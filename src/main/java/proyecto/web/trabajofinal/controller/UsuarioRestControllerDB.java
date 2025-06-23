package proyecto.web.trabajofinal.controller;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proyecto.web.trabajofinal.model.UsuarioDB;
import proyecto.web.trabajofinal.repository.UsuarioRepositoryDB; // <-- Importante: aquí está tu repositorio de MongoDB

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRestControllerDB {

    @Autowired
    private UsuarioRepositoryDB usuarioRepository; // <-- ¡Aquí es donde se conecta con MongoDB!

    @PostMapping("/guardar")
    public UsuarioDB guardarUsuario(@RequestBody UsuarioDB usuario) {
        if (usuario.getFechaRegistro() == null) {
            usuario.setFechaRegistro(LocalDate.now()); // Asigna la fecha actual si no viene
        }
        // Cuando llamas a save(), Spring Data MongoDB se encarga de todo.
        // Convierte tu objeto 'Usuario' en un documento BSON y lo guarda en la colección 'usuarios'.
        return usuarioRepository.save(usuario);
    }
}