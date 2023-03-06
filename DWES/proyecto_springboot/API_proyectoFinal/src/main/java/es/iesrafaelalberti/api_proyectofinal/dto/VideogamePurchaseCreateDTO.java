package es.iesrafaelalberti.api_proyectofinal.dto;

import es.iesrafaelalberti.api_proyectofinal.models.Users;
import es.iesrafaelalberti.api_proyectofinal.models.Videogame;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class VideogamePurchaseCreateDTO {
    private Videogame videogame;
    private Users user;



}
