package es.iesrafaelalberti.api_proyectofinal.controllers;

import es.iesrafaelalberti.api_proyectofinal.dto.VideogameCreateDTO;
import es.iesrafaelalberti.api_proyectofinal.dto.VideogameDTO;
import es.iesrafaelalberti.api_proyectofinal.models.Videogame;
import es.iesrafaelalberti.api_proyectofinal.services.VideogameService;
import es.iesrafaelalberti.api_proyectofinal.repositories.VideogameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
public class VideogameController {
    @Autowired
    VideogameRepository videogameRepository;
    @Autowired
    VideogameService videogameService;

    @GetMapping("/videogame/")
    public ResponseEntity<Object> index() {
        return new ResponseEntity<>(videogameRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/videogame/{id}/")
    public ResponseEntity<Object> show(@PathVariable("id") Long id) {
        return new ResponseEntity<>(new VideogameDTO(videogameRepository.findById(id).get()), HttpStatus.OK);
    }

    @PostMapping("/videogame/create")
    public ResponseEntity<Object> create(@RequestBody VideogameCreateDTO videogame) {
        return new ResponseEntity<>(
        new VideogameDTO(videogameService.videogameCreate(videogame)), HttpStatus.OK);
    }

    @DeleteMapping("/cells/{id}/")
    public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
        Optional<Videogame> cell = videogameRepository.findById(id);
        cell.ifPresent(value -> videogameRepository.delete(value));
        return new ResponseEntity<>(cell.isPresent(), HttpStatus.OK);
    }

    @PutMapping("/cells/{id}/")
    public ResponseEntity<Object> update(@PathVariable("id") Long id, @RequestBody Videogame videogame) {
        Optional<Videogame> oldCell = videogameRepository.findById(id);
        if(oldCell.isPresent()) {
            videogame.setId(id);
            videogameRepository.save(videogame);
            return new ResponseEntity<>(videogame, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}
