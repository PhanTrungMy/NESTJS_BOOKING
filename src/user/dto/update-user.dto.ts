import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { EUserRoles } from "src/common/interface";
export class UpdateUserDto {
    @ApiProperty({
        description: 'User email',
        format: 'email',
        type: 'string',
        required: true,
        minLength: 6,
        maxLength: 255,
        nullable: false,
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MinLength(6)
    @MaxLength(255)
    email: string;

    @ApiProperty({
        description: 'User first name',
        type: 'string',
        required: true,
        minLength: 2,
        maxLength: 50,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    firstName: string;

     @ApiProperty({
        description: 'User last name',
        example: 'Nguyen',
        type:'string',
        required: true,
        minLength: 2,
        maxLength: 50,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    lastName:string;

    @ApiProperty({
        description: 'User phone number',
        example: '+84123456789',
        type:'string',
        required: false,
    })
    @IsString()
    @IsOptional()
   // todo: validate phone number: + 84 123 456 789
    phone?:string;
    @ApiProperty({
        description: 'User timezone',
        example: 'Asia/Ho_Chi_Minh',
        type:'string',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    timezone:string;
    
    @ApiProperty({
        description: 'User role',
        example: EUserRoles.client,
        type:'string',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum([EUserRoles.client, EUserRoles.coach])
    role:string; //coach/client
}