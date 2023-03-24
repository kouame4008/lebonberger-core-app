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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const eglises_service_1 = require("./../eglises/eglises.service");
const user_repository_1 = require("./user.repository");
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository, egliseService) {
        this.userRepository = userRepository;
        this.egliseService = egliseService;
    }
    async create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.telephone, user.salt);
        user.isDelete = false;
        try {
            await this.userRepository.save(user);
        }
        catch (e) {
            return new common_1.ForbiddenException(e);
        }
        delete user.salt;
        delete user.password;
        return user;
    }
    async findAll() {
        const users = await this.userRepository.find({
            select: ['id', 'username', 'email', 'role', 'telephone', 'createdAt', 'isDelete', 'eglise'],
            order: {
                createdAt: 'DESC'
            },
            where: [{
                    isDelete: false
                }]
        });
        return users;
    }
    async findOne(id) {
        return this.userRepository.preload({ id });
    }
    async findOneTelephone(telephone) {
        return this.userRepository.findOneBy({ telephone: telephone });
    }
    async findByCredentials(telephone) {
        const user = await this.userRepository.findOne({
            where: [{ telephone: telephone }]
        });
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.preload(Object.assign({ id }, updateUserDto));
        try {
            await this.userRepository.save(user);
        }
        catch (error) {
            throw new common_1.ForbiddenException(error);
        }
        delete user.password;
        delete user.salt;
        return user;
    }
    async remove(id) {
        const user = await this.userRepository.preload({ id });
        if (!user)
            return new common_1.ForbiddenException();
        user.isDelete = true;
        user.deletedAt = new Date();
        return await this.userRepository.save(user);
    }
    async findUserByPhoneAndUrl(telephone, egliseId) {
        if (egliseId) {
            const eglise = await this.egliseService.findOne(+egliseId);
            const user = await this.userRepository.createQueryBuilder('users')
                .innerJoinAndSelect('users.eglise', 'eglises')
                .where("eglises.id = :id", { id: eglise.id })
                .andWhere('users.telephone = :telephone', { telephone: telephone })
                .getOne();
            return user;
        }
        else {
            return new common_1.ForbiddenException();
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        eglises_service_1.EglisesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map