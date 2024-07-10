import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
    // el dto es la informacion que yo espero que reciba o me manden mediante el post 
    @IsString()
    @MinLength(1) //porque un string vacio se considera como una letra
    name : string;
    

}
