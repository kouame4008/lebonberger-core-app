import { JwtAuthGuard } from './jwt-auth.guard';
import { CredentialsDto } from './dto/credential-dto';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {

    constructor (
        private authService: AuthService
    ){}

    // @UseGuards(JwtAuthGuard)
    @Post()
    async login (@Body() credentials : CredentialsDto) {
        // console.log (credentials);
        return this.authService.login (credentials.telephone, credentials.password);
    }

    @Post('core')
    async loginCore (@Body() credentials : CredentialsDto) {
        // console.log (credentials);
        return this.authService.loginCore (credentials.telephone, credentials.password);
    }

    @Post('/login-client')
    async loginClient (@Body() credentials : CredentialsDto) {
        return this.authService.loginClient (credentials.telephone, credentials.password);
    }
}
