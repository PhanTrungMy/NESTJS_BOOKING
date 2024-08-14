import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private AuthService: AuthService) {}

  // todo :swager
  @Post('auth/sign-in')
  signIn(@Body() data) {
    return this.AuthService.SignIn(data.email, data.password);
  }
}
