package proyecto.web.trabajofinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proyecto.web.trabajofinal.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
