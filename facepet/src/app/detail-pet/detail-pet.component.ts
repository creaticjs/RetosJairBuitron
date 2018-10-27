import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../services/pet.service';
import { Pet } from '../interfaces/pet';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.css']
})
export class DetailPetComponent implements OnInit {
  idPet:number;
  listPets:Pet[];
  pet:Pet;
  constructor(private activateRoute:ActivatedRoute,
    private petServices:PetService) {
    this.idPet = this.activateRoute.snapshot.params['id'];
    this.listPets = this.petServices.getPets();
    this.pet = this.listPets.find(record =>
      record.id == this.idPet);
    console.log(this.pet);
  }

  ngOnInit() {
  }

}
