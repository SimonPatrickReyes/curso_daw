package es.iesrafaelalberti.api_proyectofinal.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class VideogameCreateDTO implements Serializable {
    private String title;
    private String description;
    private Double price;
    private String tags;
    private String development;
    private String img;


}