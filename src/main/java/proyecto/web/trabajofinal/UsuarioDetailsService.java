package proyecto.web.trabajofinal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import proyecto.web.trabajofinal.model.UsuarioPostgreSQL;
import proyecto.web.trabajofinal.repository.UsuarioRepositoryPostgreSQL;

@Service
public class UsuarioDetailsService implements UserDetailsService {

    @Autowired
    private UsuarioRepositoryPostgreSQL usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UsuarioPostgreSQL usuario = usuarioRepository.findByUsuario(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));
        System.out.println("🟢 Usuario encontrado en BD: " + usuario.getUsuario());
        System.out.println("🔐 Contraseña en BD: " + usuario.getContrasena());

        return org.springframework.security.core.userdetails.User.withUsername(usuario.getUsuario())
                .password(usuario.getContrasena())
                .roles("EDITOR")
                .build();
    }
}