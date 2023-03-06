package es.iesrafaelalberti.api_proyectofinal.dto;
import es.iesrafaelalberti.api_proyectofinal.models.Users;
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
public class UsersDTO implements Serializable {
    private Long id;
    private String nickname;
    private String name;
    private String secondName;
    private String email;
    private String password;
    private Date bornDate;
    private String phone;
    private String image;

    public UsersDTO(Users users) {
        this.id         = users.getId();
        this.nickname   = users.getNickname();
        this.name       = users.getName();
        this.secondName = users.getSecondName();
        this.email      = users.getEmail();
        this.password   = users.getPassword();
        this.bornDate = users.getBornDate();
        this.phone = users.getPhone();
        this.image = users.getImage();
    }
}