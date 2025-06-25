package proyecto.web.trabajofinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proyecto.web.trabajofinal.model.UsuarioPostgreSQL;

import java.util.Optional;

public interface UsuarioRepositoryPostgreSQL extends JpaRepository<UsuarioPostgreSQL, Long> {
    Optional<UsuarioPostgreSQL> findByUsuario(String usuario);
}