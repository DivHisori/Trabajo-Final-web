package proyecto.web.trabajofinal.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyecto.web.trabajofinal.repository.UsuarioRepositoryDB;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service // Indica que esta clase es un servicio de Spring
public class UsuarioService {

    @Autowired // Inyecta automáticamente el repositorio de usuarios
    private UsuarioRepositoryDB usuarioRepository;

    // Método para guardar un nuevo usuario
    public UsuarioDB guardarUsuario(UsuarioDB usuario) {
        if (usuario.getFechaRegistro() == null) {
            usuario.setFechaRegistro(LocalDate.now()); // Establece la fecha de registro si no está definida
        }
        return usuarioRepository.save(usuario); // ¡Esto guarda el usuario en MongoDB!
    }

    // Método para encontrar un usuario por su ID
    public Optional<UsuarioDB> obtenerUsuarioPorId(String id) {
        return usuarioRepository.findById(id);
    }

    // Método para encontrar un usuario por correo electrónico
    public UsuarioDB obtenerUsuarioPorCorreo(String correo) {
        return usuarioRepository.findByCorreoElectronico(correo);
    }

    // Método para obtener todos los usuarios
    public List<UsuarioDB> obtenerTodosLosUsuarios() {
        return usuarioRepository.findAll();
    }

    // Método para eliminar un usuario
    public void eliminarUsuario(String id) {
        usuarioRepository.deleteById(id);
    }

    // Puedes agregar más lógica de negocio aquí
}
