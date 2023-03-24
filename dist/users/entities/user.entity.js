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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const timestamp_1 = require("./../../generic/timestamp");
const user_role_1 = require("./../../generic/user-role");
const typeorm_1 = require("typeorm");
const eglise_entity_1 = require("../../eglises/entities/eglise.entity");
let UserEntity = class UserEntity extends timestamp_1.TimeTampsEntitie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true
    }),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true
    }),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean'
    }),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: user_role_1.userRoleEnum,
        default: user_role_1.userRoleEnum.ADMIN
    }),
    (0, swagger_1.ApiProperty)({ enum: ['super_admin', 'admin', 'membre'] }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => eglise_entity_1.EgliseEntity, (eglise) => eglise.user, {
        cascade: true,
        eager: true,
        nullable: true
    }),
    __metadata("design:type", eglise_entity_1.EgliseEntity)
], UserEntity.prototype, "eglise", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)("users")
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map