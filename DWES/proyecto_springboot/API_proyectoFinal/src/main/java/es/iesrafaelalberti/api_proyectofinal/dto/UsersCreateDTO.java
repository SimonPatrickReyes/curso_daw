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
public class UsersCreateDTO implements Serializable {
    private String nickname;
    private String name;
    private String secondName;
    private String email;
    private String password;
    private Date bornDate;
    private String phone;
    private String image;
}