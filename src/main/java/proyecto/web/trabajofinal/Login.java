package proyecto.web.trabajofinal;

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
    private String role;

    public Login(Long id, String name, String pass) {
        this.id = id;
        this.username = name;
        this.pass = pass;
        this.role = "editor";
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

    public String getusername() {
        return username;
    }

    public Login setusername(String name) {
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
