package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @PostMapping("/regKinobilett")
    public List<Kinobilett> reg(Kinobilett kinobilett) {
        Kinobilett.kinobilettRegister.add(kinobilett);
        return Kinobilett.kinobilettRegister;
    }

    @GetMapping("/slett")
    public void slett() {
        Kinobilett.kinobilettRegister.clear();
    }
}
