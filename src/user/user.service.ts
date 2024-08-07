import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import  bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  [x: string]: any;
  constructor(private databaseService: DatabaseService) {}

  findMany() {
    return this.databaseService.user.findMany();
  }

  async create(data: Prisma.UserCreateInput) {
    // hash password
    const hashedPassword = await this.hashPassword(data.password);



    // create userData
    const userData = {
      email: data.email,
      password: hashedPassword,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      timezone: data.timezone,
    };
    // Implement registration logic here
    return this.databaseService.user.create({
      data: userData,
    });

  }
  async hashPassword (password :string){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  
}
