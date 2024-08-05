import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Match } from "src/common/decorator/match.decorator";
import { EUserRoles } from "src/common/interface";

export class CreateUserDto{
    @ApiProperty({
        example: 'abcd@Example.com',
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
    email:string;
 // todo: must have at least one uppercase, one lowercase, one number, one special character
 // option 1: use regex
    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

 // option 2: use nestjs built-in validation decorators
 // https://github.com/typestack/class-validator#custom-validation-decorators
 // option 3: customer decorator
 // https://medium.com/javascript-in-plain-english/custom-validation-in-typescript-with-class-validator-and-nestjs-c26f0169d882

    @ApiProperty({
        description: 'password',
    })
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(255)
    @IsString()
    
    password:string;

    @ApiProperty({
        description: 'confirm password',
    })
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @IsString()
    @Match('password', { message: 'Passwords must match' })
    confirmPassword:string;

    @ApiProperty({
        description: 'User first name',
        example: 'Trung my',
        type:'string',
        required: true,
        minLength: 2,
        maxLength: 50,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(50)
    firstName:string;
    
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

// dayjs
// todo : validate timezoneCode belong timezones list of days
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