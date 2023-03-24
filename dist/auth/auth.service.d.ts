import { UserEntity } from './../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(telephone: string, pass: string): Promise<any>;
    login(telephone: string, password: string): Promise<any>;
    loginCore(telephone: string, password: string): Promise<any>;
    loginClient(telephone: string, password: string): Promise<UserEntity>;
}
