import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

// decorator:class,method,property,parameter
// @ApiBearerAuth() khoas 
@ApiTags('user')

@Controller()
 export class UserController{
    constructor( private readonly userService: UserService){}
    @ApiOperation({summary: 'Register new user'}) 
    @ApiResponse({status: 201, description: 'User created'})
    @ApiCreatedResponse({description: 'User created'})
    @ApiBadRequestResponse({description: 'validation failed'})  
    @Post('/register')
    register(@Body() data:  CreateUserDto ){
        console.log(data);
        return this.userService.register(data);
    }
 }