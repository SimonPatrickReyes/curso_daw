package es.iesrafaelalberti.api_proyectofinal.dto;
import es.iesrafaelalberti.api_proyectofinal.models.Videogame;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.io.Serializable;
import java.util.Date;


@Setter
@AllArgsConstructor
@NoArgsConstructor @Getter
public class VideogameDTO implements Serializable {
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String tags;
    private String development;
    private String img;

    public VideogameDTO(Videogame videogame) {
        this.id  = videogame.getId();
        this.title   = videogame.getTitle();
        this.description = videogame.getDescription();
        this.price = videogame.getPrice();
        this.tags = videogame.getTags();
        this.development = videogame.getDevelopment();
        this.img = videogame.getImg();
    }
}