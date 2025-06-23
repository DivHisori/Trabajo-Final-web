package proyecto.web.trabajofinal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
//usuario para el Login de /editor
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String pass;

    public Login(Long id, String name, String pass) {
        this.id = id;
        this.username = name;
        this.pass = pass;
    }

    public Login() {

    }

    public Long getId() {
        return id;
    }

    public Login setId(Long id) {
        this.id = id;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public Login setUsername(String name) {
        this.username = name;
        return this;
    }

    public String getPass() {
        return pass;
    }

    public Login setPass(String pass) {
        this.pass = pass;
        return this;
    }
}
