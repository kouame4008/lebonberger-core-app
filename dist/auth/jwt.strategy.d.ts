import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
interface PayloadInterface {
    telephone: string;
    password: string;
}
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UsersService);
    validate(payload: PayloadInterface): Promise<Partial<import("../users/entities/user.entity").UserEntity>>;
}
export {};
