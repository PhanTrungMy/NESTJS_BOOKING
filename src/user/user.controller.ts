import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dto/update-user.dto";

// decorator:class,method,property,parameter
// @ApiBearerAuth() khoas 
// todo: exclude password from response

@ApiTags('user')

@Controller()
 export class UserController{
    constructor( private readonly userService: UserService){}

    @Get('/users')
    findMany(){
        return this.userService.findMany();
    }
    @ApiOperation({summary: 'Register new user'}) 
    @ApiResponse({status: 201, description: 'User created'})
    @ApiCreatedResponse({description: 'User created'})
    @ApiBadRequestResponse({description: 'validation failed'})  
    @Post('/register')
    create(@Body() data:  CreateUserDto ){
        console.log(data);
        return this.userService.create(data);
    }
    @Patch('/users/:userId')
    updateUserInfo( @Body() data: UpdateUserDto){
        return this.userService.update(data);
    }

 }