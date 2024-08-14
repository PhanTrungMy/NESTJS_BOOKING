import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserReq } from "src/common/decorator/user.decorator";
import { User } from "@prisma/client";


// decorator:class,method,property,parameter
// @ApiBearerAuth() khoa
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
    
    // @UseGuards(AuthGuard)
    @Get('/users/me')
    // import decorator UserReq
    GetMe(@UserReq() user :User){
     return user;
    }
    // todo : implement api update password
    @Patch('/users/me')
    updateUserInfo( @Body() data: UpdateUserDto){
        return this.userService.update(data);
    }
    // const userId = ..
    // update userInfo of the UserId

 }


