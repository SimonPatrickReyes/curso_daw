package es.iesrafaelalberti.api_proyectofinal.services;
import es.iesrafaelalberti.api_proyectofinal.dto.VideogameCreateDTO;
import es.iesrafaelalberti.api_proyectofinal.dto.UsersCreateDTO;
import es.iesrafaelalberti.api_proyectofinal.models.Videogame;
import es.iesrafaelalberti.api_proyectofinal.models.Users;
import es.iesrafaelalberti.api_proyectofinal.repositories.VideogameRepository;
import es.iesrafaelalberti.api_proyectofinal.repositories.UsersRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsersService {
    @Autowired
    UsersRepository usersRepository;
    public Users usersCreate(UsersCreateDTO newUser) {
        return usersRepository.save(new Users(newUser));
    }
}