package proyecto.web.trabajofinal;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails editor = User.withDefaultPasswordEncoder()
                .username("editor")
                .password("1234")
                .roles("EDITOR")
                .build();

        UserDetails user = User.withDefaultPasswordEncoder()
                .username("usuario")
                .password("1234")
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(editor, user);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/editor").hasRole("EDITOR")
                        .anyRequest().permitAll()
                )

                .formLogin(login -> login
                        .defaultSuccessUrl("/editor", true) // Redirige siempre a /editor después del login
                )

                .exceptionHandling(ex -> ex
                        .accessDeniedPage("/acceso-denegado")
                );

        return http.build();
    }

}

