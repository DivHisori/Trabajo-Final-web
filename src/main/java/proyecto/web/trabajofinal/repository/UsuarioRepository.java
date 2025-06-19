package proyecto.web.trabajofinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proyecto.web.trabajofinal.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
