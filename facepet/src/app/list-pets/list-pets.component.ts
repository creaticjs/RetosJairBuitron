import { PetService } from './../services/pet.service';
import { Pet } from './../interfaces/pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {
  //esta variable guardara una lista de objetos tipo Pet
  listaPets:Pet[];
  constructor(private petService:PetService) {
    this.listaPets = petService.getPets()
  }

  ngOnInit() {
  }

}
