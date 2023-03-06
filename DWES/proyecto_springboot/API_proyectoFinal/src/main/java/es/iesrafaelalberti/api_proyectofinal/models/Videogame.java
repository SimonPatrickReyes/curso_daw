package es.iesrafaelalberti.api_proyectofinal.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import es.iesrafaelalberti.api_proyectofinal.dto.UsersCreateDTO;
import es.iesrafaelalberti.api_proyectofinal.dto.VideogameCreateDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
@Entity @NoArgsConstructor
@Getter @Setter
public class Videogame {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String tags;
    private String development;
    private String img;



    public Videogame(String title, String description, Double price, String tags, String development, String img) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.development = development;
        this.img = img;
    }
    public Videogame(VideogameCreateDTO newVideogame) {
        this.title = newVideogame.getTitle();
        this.description = newVideogame.getDescription();
        this.price = newVideogame.getPrice();
        this.tags = newVideogame.getTags();
        this.development = newVideogame.getDevelopment();
        this.img = newVideogame.getImg();
    }
}
