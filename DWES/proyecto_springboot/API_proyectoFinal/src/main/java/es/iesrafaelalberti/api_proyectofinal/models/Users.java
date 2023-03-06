package es.iesrafaelalberti.api_proyectofinal.models;
import es.iesrafaelalberti.api_proyectofinal.dto.UsersCreateDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity @Table(name = "users")
@NoArgsConstructor
@Getter @Setter
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nickname;
    private String name;
    private String secondName;
    private String email;
    private String password;
    private Date bornDate;
    private String phone;
    private String image;

    public Users(String nickname, String name,String secondName,String email,String password,Date bornDate,String phone,String image) {
        this.nickname = nickname;
        this.name = name;
        this.secondName = secondName;
        this.email = email;
        this.password = password;
        this.bornDate = bornDate;
        this.phone = phone;
        this.image = image;
    }
    public Users(UsersCreateDTO newUsers) {
        this.nickname = newUsers.getNickname();
        this.name       = newUsers.getName();
        this.secondName    = newUsers.getSecondName();
        this.email      = newUsers.getEmail();
        this.password   = newUsers.getPassword();
        this.bornDate = newUsers.getBornDate();
        this.phone = newUsers.getPhone();
        this.image = newUsers.getImage();

    }
}
