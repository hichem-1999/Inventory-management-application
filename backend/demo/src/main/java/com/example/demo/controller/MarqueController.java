package com.example.demo.controller;

import com.example.demo.model.Marque;
import com.example.demo.service.MarqueService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/marque")
@AllArgsConstructor
public class MarqueController {
    private final MarqueService marqueService;

    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Marque> getAllMarque() {
        return marqueService.getAllMarque();
    }

//    @RequestMapping(
//            value = "/allOfThem",
//            method = RequestMethod.GET,
//            produces = MediaType.APPLICATION_JSON_VALUE)


    @PostMapping("/add")
    public ResponseEntity<Marque> addMarque(@RequestBody Marque marque) {
        Marque newMarque = marqueService.addMarque(marque);
        return new ResponseEntity<>(newMarque, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        marqueService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Marque> updateMarque(@RequestBody Marque marque) {
        Marque updateMarque = marqueService.updateMarque(marque);
        return new ResponseEntity<>(updateMarque, HttpStatus.OK);
    }

}
