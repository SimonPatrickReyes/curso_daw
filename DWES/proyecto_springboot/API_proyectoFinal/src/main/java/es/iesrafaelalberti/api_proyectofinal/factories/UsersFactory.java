package es.iesrafaelalberti.api_proyectofinal.factories;

import com.github.javafaker.Faker;
import es.iesrafaelalberti.api_proyectofinal.models.Users;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component

public class UsersFactory {
    Faker esFaker = new Faker(new Locale("es-ES"));

    public List<Users> get(int number) {
        return IntStream.range(0, number)
                .mapToObj(x -> new Users(
                        esFaker.name().name(),
                        esFaker.name().name(),
                        esFaker.name().name(),
                        esFaker.internet().emailAddress(),
                        esFaker.internet().password(),
                        esFaker.date().birthday(),
                        esFaker.number().digits(9),
                        esFaker.internet().image()
                )).collect(Collectors.toList());
    }
}