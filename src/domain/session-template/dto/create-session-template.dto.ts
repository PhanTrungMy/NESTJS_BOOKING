import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateSessionTemplateDto{
    @ApiProperty(
        {
            type: String,
            required: true,
            description: 'The name of the session template',
            example:'session template 1'
        }
    )
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    name:string;
    
    @ApiProperty(
        {
            type: Number,
            required: true,
            description: 'The duration of the session template',
            example: 30
        }
    )
    @IsNotEmpty()
    @IsNumber()
    @Min(15)
    duration:number;
}