import { ConfigService } from '@nestjs/config';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';
import * as dotenv from 'dotenv';
import { UsersService } from 'src/users/users.service';



dotenv.config();

interface PayloadInterface {
  telephone : string;
  password : string;
}


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: PayloadInterface) {
    const user = await this.userService.findOneTelephone (payload.telephone);

    if (!user) {
        throw new UnauthorizedException();
    }
    else {
        // const { password, salt, ...result } = user;
        delete user.salt;
        delete user.password;
        
        return user;
    }
}
}
