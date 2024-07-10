import { Body, Controller, Delete, 
        Get, Param, ParseIntPipe, ParseUUIDPipe, 
        Patch,  Post, 
        UsePipes, 
        ValidationPipe} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe) //decir que todos sus metodos lo usaran
export class CarsController {

    constructor(  
        // y si otra clase usa esta clase de dependencia - eso lo hace reutilizable
        private readonly carsService : CarsService //esta es la inyeccion de dependencias 
    ){}

    @Get() 
    getAllCars() {
        // return this.cars
        return this.carsService.findAll()
    }

    @Get(':id') //para que el argumento se llame id
    getCarById(@Param('id', new ParseUUIDPipe({ version : '4'})) id:string ) {  //el id es que que esta en la url 
        // y si no se le pasa un uuid tendremos el request 400 - que no es un numero (message)
        console.log({id}) //veremos que lo transformo a un numero por el pipe 
        return this.carsService.findOneById(id)
    }
    @Post()
    createCar(@Body() createCardDto: CreateCarDto){
        return this.carsService.create(createCardDto);
    }


    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateCarDto: UpdateCarDto){
        
        return this.carsService.update(id , updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.delete(id)
    }
}
