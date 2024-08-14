import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { DatabaseModule } from "src/database/database.module";
import { DatabaseService } from "src/database/database.service";
// ioc container
@Module({   
     imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService,DatabaseService],
    // export usemodule ready from authmodul
    exports:[UserModule]

})

export class UserModule { }