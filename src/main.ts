import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true, //para que me muestre solo la data que estoy esperando 
    forbidNonWhitelisted: true, // para que en el form solo este los valores que usaremos
    }));

  await app.listen(3000);
}
main();
