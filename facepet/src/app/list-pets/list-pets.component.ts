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
  constructor() {
    let pet1: Pet = {
      name: 'Oso',
      type: 'Perro',
      race: 'Labradoodles Australiano',
      age: 5,
      propertyName: 'Maria',
      propertyPhone: '3005171225',
      propertyAdress: 'Carrera 8 3 18',
      vaccine: true,
      image: 'http://springcreeklabradoodles.com/wp-content/uploads/2014/08/1yrCuteDapper.jpg'
    };

    let pet2: Pet = {
      name: 'Minie',
      type: 'Perro',
      race: 'French Poodle',
      age: 9,
      propertyName: 'Diana',
      propertyPhone: '3103536282',
      propertyAdress: 'Calle 2 2 49',
      vaccine: true,
      image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.evisos.com.co%2F2009%2F08%2F12%2Fbusco-novia-french-poodle_c7c75fb0_3.jpg&f=1'
    };

    let pet3: Pet = {
      name: 'Teo',
      type: 'Perro',
      race: 'Mini Toy',
      age: 9,
      propertyName: 'Diana',
      propertyPhone: '3103536282',
      propertyAdress: 'Calle 2 2 49',
      vaccine: true,
      image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.estampas.com%2F2009%2F11%2F15%2Fmascota_bacci.jpg.500.364.thumb&f=1'
    };

    let pet4: Pet = {
      name: 'Lupe',
      type: 'Perro',
      race: 'Criollo',
      age: 1,
      propertyName: 'Lucho',
      propertyPhone: '3103536282',
      propertyAdress: 'Calle 17 4 21',
      vaccine: true,
      image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.adoptamascota.com%2Fimagenes%2Fperdidas%2FLIA.jpg&f=1'
    };
  }

  ngOnInit() {
  }

}
