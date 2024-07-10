// import { PartialType } from '@nestjs/mapped-types'; //extender un dto basado en otro dto 
// import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from "class-validator";

// // PartialType : todas las propiedades de CreateBrandDto todas sean opcionales
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class UpdateBrandDto {
    // como solo actulizo uno lo usamos de esta manera
    @IsString()
    @MinLength(1)
    name:string
}