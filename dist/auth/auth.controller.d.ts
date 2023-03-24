import { CredentialsDto } from './dto/credential-dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(credentials: CredentialsDto): Promise<any>;
    loginCore(credentials: CredentialsDto): Promise<any>;
    loginClient(credentials: CredentialsDto): Promise<import("../users/entities/user.entity").UserEntity>;
}
