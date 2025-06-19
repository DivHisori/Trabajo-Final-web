package proyecto.web.trabajofinal.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proyecto.web.trabajofinal.model.Usuario;
import proyecto.web.trabajofinal.repository.UsuarioRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/usuarios")

public class UsuarioRestController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/guardar")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
        if (usuario.getFechaRegistro() == null) {
        usuario.setFechaRegistro(LocalDate.now()); // Si no envía fecha, asigna la actual
    }
        return usuarioRepository.save(usuario);
    }
}
