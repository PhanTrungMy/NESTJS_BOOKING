import { Public } from 'src/common/decorator/public.decorator';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private AuthService: AuthService) {}

  // todo :swagger
  // ready public for api sign-up. register
  @Public()
  @Post('auth/sign-in')
  signIn(@Body() data) {
    return this.AuthService.SignIn(data.email, data.password);
  }
}
