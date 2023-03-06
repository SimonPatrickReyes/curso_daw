package es.iesrafaelalberti.api_proyectofinal.models;

import es.iesrafaelalberti.api_proyectofinal.dto.VideogameDTO;
import es.iesrafaelalberti.api_proyectofinal.dto.VideogamePurchaseCreateDTO;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Entity @Getter @Setter @NoArgsConstructor
@Table(name = "videogame_purchase")
public class VideogamePurchase {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn()
    private Videogame videogame;

    @ManyToOne
    @JoinColumn()
    private Users user;
    //@Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private Date purchasedAt;

    public VideogamePurchase(Videogame videogame, Users user) {
        this.videogame = videogame;
        this.user = user;
    }
    public VideogamePurchase(VideogamePurchaseCreateDTO newVideogamePurchase) {
        this.videogame             = newVideogamePurchase.getVideogame();
        this.user               = newVideogamePurchase.getUser();
    }
}