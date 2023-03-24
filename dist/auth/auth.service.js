"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_role_1 = require("./../generic/user-role");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const axios_1 = require("axios");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(telephone, pass) {
        const user = await this.usersService.findOneTelephone(telephone);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(telephone, password) {
        const user = await this.usersService.findByCredentials(telephone);
        if (!user)
            throw new common_1.NotFoundException("Ivalid Credentials !");
        let hashPassword = await bcrypt.hash(password, user.salt);
        if (hashPassword == user.password) {
            const payload = { id: user.id, username: user.username, email: user.email, telephone: user.telephone, role: user.role, salt: user.salt, eglise: user.eglise };
            const accessToken = this.jwtService.sign(payload);
            if (['membre', 'admin'].includes(user.role)) {
                const res = await axios_1.default.post(`${user.eglise.api_url}/auth`, { access_token: accessToken });
                return res.data;
            }
            else {
                throw new common_1.ForbiddenException("Vous n'êtes pas autorisé a accéder a cette page !");
            }
        }
        else {
            throw new common_1.ForbiddenException("Ivalid Password !");
        }
    }
    async loginCore(telephone, password) {
        const user = await this.usersService.findByCredentials(telephone);
        if (!user)
            throw new common_1.ForbiddenException("Ivalid Credentials !");
        let hashPassword = await bcrypt.hash(password, user.salt);
        if (hashPassword == user.password) {
            const payload = { id: user.id, username: user.username, email: user.email, telephone: user.telephone, role: user.role, salt: user.salt, eglise: user.eglise };
            const accessToken = this.jwtService.sign(payload);
            if (user.role === user_role_1.userRoleEnum.SUPER_ADMIN) {
                return { access_token: accessToken };
            }
            else {
                throw new common_1.ForbiddenException("Vous n'êtes pas autorisé a accéder a cette page !");
            }
        }
        else {
            throw new common_1.NotFoundException("Ivalid Password !");
        }
    }
    async loginClient(telephone, password) {
        return await this.usersService.findByCredentials(telephone);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map