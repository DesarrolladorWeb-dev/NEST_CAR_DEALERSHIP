import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports : [CarsService], //para que todo el mundo pueda usarlo - pueda obtener la info de este servicio
})
export class CarsModule {}
