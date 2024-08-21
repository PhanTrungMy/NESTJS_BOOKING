import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import bcrypt from 'bcrypt';
import { BaseService } from 'src/service/base.service';

@Injectable()
export class UserService extends BaseService<

  Prisma.UserCreateInput,
  Prisma.UserUpdateInput
> {
  constructor(private databaseService: DatabaseService) {
    super(databaseService, 'user');
  }

  // findMany() {
  //   return this.databaseService.user.findMany();
  // }

  async createWithHash(data: Prisma.UserCreateInput) {
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
    return this.create(userData);
  }
  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  comparePassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }

  async findOneOrFailByEmail(email: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
