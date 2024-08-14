import { JwtService } from '@nestjs/jwt';
import { UserService } from './../../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private jwtService: JwtService,
  ) {}

  async SignIn(email: string, password: string) {
    // email
    // password
    const foundUser = await this.UserService.findOneOrFailByEmail(email);
    const isMatched = await this.UserService.comparePassword(
      password,
      foundUser.password,
    );
    if (!isMatched) {
      throw new UnauthorizedException('password not mismatch');
    }
    const payload = {
      sub: foundUser.id,
      email: foundUser.email,
      //todo : add role 
    };
    const  jwt = await this.jwtService.signAsync(payload)
    return  {
      jwt,
      payload
    };
  }
}
