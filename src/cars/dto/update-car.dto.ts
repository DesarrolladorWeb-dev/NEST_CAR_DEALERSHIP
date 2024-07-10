import { IsOptional, IsString, IsUUID } from "class-validator";


export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string; //el ? para que estas propiedades sean opcionales

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}