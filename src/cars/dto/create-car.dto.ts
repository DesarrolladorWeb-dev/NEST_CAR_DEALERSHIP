import { IsString } from "class-validator";


export class CreateCarDto {
    // propiedades (form) que estoy esperando en el post 
    // esto sirve para que este bien escrito el key
    @IsString()
    readonly brand: string;
    @IsString()
    readonly model: string;
}