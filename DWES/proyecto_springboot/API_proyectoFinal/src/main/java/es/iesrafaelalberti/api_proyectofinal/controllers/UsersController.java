package es.iesrafaelalberti.api_proyectofinal.controllers;
import es.iesrafaelalberti.api_proyectofinal.dto.UsersCreateDTO;
import es.iesrafaelalberti.api_proyectofinal.dto.UsersDTO;
import es.iesrafaelalberti.api_proyectofinal.models.Users;
import es.iesrafaelalberti.api_proyectofinal.repositories.UsersRepository;
import es.iesrafaelalberti.api_proyectofinal.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UsersController {
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    UsersService usersService;

    @GetMapping("/users/")
    public ResponseEntity<Object> index() {
        return new ResponseEntity<>(usersRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}/")
    public ResponseEntity<Object> show(@PathVariable("id") Long id) {
        return new ResponseEntity<>(new UsersDTO(usersRepository.findById(id).get()), HttpStatus.OK);
    }

    @PostMapping("/users/create")
    public ResponseEntity<Object> create(@RequestBody UsersCreateDTO users) {
        return new ResponseEntity<>(new UsersDTO(usersService.usersCreate(users)), HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}/")
    public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
        Optional<Users> users = usersRepository.findById(id);
        users.ifPresent(value -> usersRepository.delete(value));
        return new ResponseEntity<>(users.isPresent(), HttpStatus.OK);
    }

    @PutMapping("/users/{id}/")
    public ResponseEntity<Object> update(@PathVariable("id") Long id, @RequestBody Users user) {
        Optional<Users> oldUser = usersRepository.findById(id);
        if(oldUser.isPresent()) {
            user.setId(id);
            usersRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}

