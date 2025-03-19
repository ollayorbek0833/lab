package com.example.demo.controllers;

import com.example.demo.Person;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allows external requests
public class HomeController {

    @PostMapping("/submit")
    public Person submitPerson(@RequestParam String name, @RequestParam int age, @RequestParam String address) {
        return new Person(name, age, address);
    }
}
