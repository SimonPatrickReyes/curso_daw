package es.iesrafaelalberti.api_proyectofinal.factories;

import com.github.javafaker.Faker;
import es.iesrafaelalberti.api_proyectofinal.models.Videogame;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component

public class VideogameFactory {
    Faker esFaker = new Faker(new Locale("es-ES"));

    public List<Videogame> get(int number) {
        return IntStream.range(0, number)
                .mapToObj(x -> new Videogame(
                        esFaker.lorem().word(),
                        esFaker.lorem().sentence(20),
                        esFaker.number().randomDouble(2, 5, 80),
                        esFaker.lorem().word(),
                        esFaker.lorem().word(),
                        esFaker.internet().image()
                        )).collect(Collectors.toList());
    }
}