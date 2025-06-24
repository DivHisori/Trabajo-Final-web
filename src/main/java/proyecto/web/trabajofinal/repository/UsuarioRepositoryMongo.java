package proyecto.web.trabajofinal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import proyecto.web.trabajofinal.model.UsuarioMongo;

import org.springframework.stereotype.Repository;

@Repository // Indica que esta interfaz es un componente de repositorio de Spring
public interface UsuarioRepositoryMongo extends MongoRepository<UsuarioMongo, String> {
    // Spring Data MongoDB generará automáticamente métodos CRUD básicos (save, findById, findAll, delete, etc.)

    // Puedes añadir métodos personalizados aquí, por ejemplo:
    UsuarioMongo findByCorreoElectronico(String correoElectronico);
}