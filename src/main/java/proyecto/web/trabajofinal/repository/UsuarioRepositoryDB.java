package proyecto.web.trabajofinal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import proyecto.web.trabajofinal.model.UsuarioDB;

import org.springframework.stereotype.Repository;

@Repository // Indica que esta interfaz es un componente de repositorio de Spring
public interface UsuarioRepositoryDB extends MongoRepository<UsuarioDB, String> {
    // Spring Data MongoDB generará automáticamente métodos CRUD básicos (save, findById, findAll, delete, etc.)

    // Puedes añadir métodos personalizados aquí, por ejemplo:
    UsuarioDB findByCorreoElectronico(String correoElectronico);
}