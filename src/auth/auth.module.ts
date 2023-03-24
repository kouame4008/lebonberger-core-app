import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from './../users/users.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';



dotenv.config();

@Module({
    imports: [
        UsersModule,
        PassportModule.register({
            defaultStrategy : 'jwt',
            session: false
        }),
        JwtModule.register({
            secret : 'secret',
            signOptions: { expiresIn: '3600s' }
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
