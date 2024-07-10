import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4  as uuid} from 'uuid'
import { CreateCarDto, UpdateCarDto} from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [ //porque es un array de objetos usar []
        // {
        //     id:uuid(),
        //     brand: 'Toyota',
        //     model:'corolla'
        // }
    ]
    findAll(){
        return this.cars;
    }
    findOneById(id: string){
        const car = this.cars.find( car => car.id === id);

        // SI NO EXISTE
        if(!car) throw new NotFoundException(`Car with id ${id } not found`); 
        return car
    }
    create(createCardDto : CreateCarDto){
        const car: Car = {
            id: uuid(),
            ...createCardDto 
            // model: createCardDto.model,
            // brand: createCardDto.brand
        }

        this.cars.push(car);
        return car
    }
    update( id:string, updateCarDto: UpdateCarDto){ //el id es obligatorio

        let carDB = this.findOneById(id) //bucara el carro con el id - si no es uuid mostrar error y no seguira

        // si el id no le pertenece al que estamos actualizando
        if(updateCarDto.id && updateCarDto.id !==  id ){
            throw new BadRequestException(`Car id is not valid inside body`) 
        }

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {
                    ...carDB,//cada uno de sus propiedades del carro que se encontro con el id 
                    ...updateCarDto, //sobrescribe las propiedades anteriores
                    id,//para que no se sobrescriba el id solo lo ponemos aqui por separado que viene de updateCarDto 
                }
            return carDB;
            }
            return car; //si no se encuentra el carro por el id
        })

        return carDB ; //carro actualizado
    }   
    delete(id: string ) {
        const car  = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);
        
    }

    fillCarsWithSeedData(cars : Car[] ){ //recibo los datos del seed
        this.cars = cars;
    }
}
