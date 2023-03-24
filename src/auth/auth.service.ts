import { userRoleEnum } from './../generic/user-role';
import { UserEntity } from './../users/entities/user.entity';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import axios from 'axios';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(telephone: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneTelephone(telephone);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(telephone: string, password: string): Promise<any> {

        const user = await this.usersService.findByCredentials(telephone);

        if (!user)
            throw new NotFoundException("Ivalid Credentials !");

        let hashPassword = await bcrypt.hash(password, user.salt);
        // console.log(user.role);

        if (hashPassword == user.password) {
            const payload = { id: user.id, username: user.username, email: user.email, telephone: user.telephone, role: user.role, salt: user.salt, eglise: user.eglise };
            const accessToken = this.jwtService.sign(payload);

            if (['membre', 'admin'].includes(user.role)) {
                const res = await axios.post(`${user.eglise.api_url}/auth`, { access_token: accessToken });
                return res.data;
            }
            else {
                throw new ForbiddenException("Vous n'êtes pas autorisé a accéder a cette page !");
            }
        }
        else {
            throw new ForbiddenException("Ivalid Password !");
        }
    }

    async loginCore(telephone: string, password: string): Promise<any> {

        const user = await this.usersService.findByCredentials(telephone);

        if (!user)
            throw new ForbiddenException("Ivalid Credentials !");

        let hashPassword = await bcrypt.hash(password, user.salt);

        if (hashPassword == user.password) {
            const payload = { id: user.id, username: user.username, email: user.email, telephone: user.telephone, role: user.role, salt: user.salt, eglise: user.eglise };
            const accessToken = this.jwtService.sign(payload);

            if (user.role === userRoleEnum.SUPER_ADMIN) {
                return { access_token: accessToken }
            }
            else {
                throw new ForbiddenException("Vous n'êtes pas autorisé a accéder a cette page !");
            }
        }
        else {
            throw new NotFoundException("Ivalid Password !");
        }
    }

    async loginClient(telephone: string, password: string): Promise<UserEntity> {
        return await this.usersService.findByCredentials(telephone);
    }
}
