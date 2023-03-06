package es.iesrafaelalberti.api_proyectofinal.boot;
import es.iesrafaelalberti.api_proyectofinal.factories.UsersFactory;
import es.iesrafaelalberti.api_proyectofinal.factories.VideogameFactory;
import es.iesrafaelalberti.api_proyectofinal.models.Users;
import es.iesrafaelalberti.api_proyectofinal.models.Videogame;
import es.iesrafaelalberti.api_proyectofinal.repositories.UsersRepository;

import es.iesrafaelalberti.api_proyectofinal.repositories.VideogameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class Seeder implements CommandLineRunner {
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    VideogameRepository videogameRepository;
    @Autowired
    UsersFactory usersFactory;
    @Autowired
    VideogameFactory videogameFactory;

    @Override
    public void run(String... args) {
        usersRepository.save(new Users("simon", "simon", "dominguez","simon@gmail.com","contraseña",new Date(),"999999999","imagen"));
    }
}
