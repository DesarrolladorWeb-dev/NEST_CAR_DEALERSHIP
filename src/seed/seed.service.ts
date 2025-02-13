import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

 //NOTA PARA EJECUTAR ESTO PRIMERO http:/localhost/seed Y LUEGO LAS CONSULTAS

@Injectable()
export class SeedService {

  constructor (
    // hacemos la injeccion para usar el metodo que tiene dentro fillCarsWithSeedData
    private readonly carsService : CarsService,
    private readonly brandsService : BrandsService
  ){}

  populateDB() {

    // CARS_SEED
    // BRANDS_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED);

    return 'Seed executed';  
  }
}
