import { Controller, Get } from "@nestjs/common";



@Controller('/health')
export class healthController {

 @Get()
 getHealth() {
return {
    status: 200,
    message: 'success',

}
 }
}