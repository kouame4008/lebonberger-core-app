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
exports.EgliseEntity = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
const typeorm_5 = require("typeorm");
const type_eglise_1 = require("./../../generic/type-eglise");
const typeorm_6 = require("typeorm");
const typeorm_7 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
let EgliseEntity = class EgliseEntity {
};
__decorate([
    (0, typeorm_7.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EgliseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_6.Column)({ nullable: false }),
    __metadata("design:type", Number)
], EgliseEntity.prototype, "code_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({ nullable: false }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "nom_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({
        length: 3,
        nullable: false
    }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "nom_ab_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({
        type: 'enum',
        enum: type_eglise_1.TypeEgliseEnum,
        default: type_eglise_1.TypeEgliseEnum.PRINCIPALE,
        nullable: false
    }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "type_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({
        length: 10,
        nullable: false
    }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "telephone_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "email_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({
        type: 'text',
        nullable: false
    }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "adresse_eglise", void 0);
__decorate([
    (0, typeorm_6.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], EgliseEntity.prototype, "api_url", void 0);
__decorate([
    (0, typeorm_6.Column)({
        type: 'boolean',
        nullable: false
    }),
    __metadata("design:type", Boolean)
], EgliseEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_6.Column)({
        type: 'boolean',
        nullable: false,
        default: false
    }),
    __metadata("design:type", Boolean)
], EgliseEntity.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_4.CreateDateColumn)(),
    __metadata("design:type", String)
], EgliseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_3.UpdateDateColumn)(),
    __metadata("design:type", String)
], EgliseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_2.DeleteDateColumn)(),
    __metadata("design:type", String)
], EgliseEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => user_entity_1.UserEntity, (user) => user.eglise),
    __metadata("design:type", Array)
], EgliseEntity.prototype, "user", void 0);
EgliseEntity = __decorate([
    (0, typeorm_5.Entity)({
        name: 'eglises'
    })
], EgliseEntity);
exports.EgliseEntity = EgliseEntity;
//# sourceMappingURL=eglise.entity.js.map