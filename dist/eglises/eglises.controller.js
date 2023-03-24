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
exports.EglisesController = void 0;
const common_1 = require("@nestjs/common");
const eglises_service_1 = require("./eglises.service");
const create_eglise_dto_1 = require("./dto/create-eglise.dto");
const update_eglise_dto_1 = require("./dto/update-eglise.dto");
const swagger_1 = require("@nestjs/swagger");
let EglisesController = class EglisesController {
    constructor(eglisesService) {
        this.eglisesService = eglisesService;
    }
    create(createEgliseDto) {
        return this.eglisesService.create(createEgliseDto);
    }
    async findAll() {
        return await this.eglisesService.findAll();
    }
    findOne(id) {
        return this.eglisesService.findOne(+id);
    }
    update(id, updateEgliseDto) {
        return this.eglisesService.update(+id, updateEgliseDto);
    }
    remove(id) {
        return this.eglisesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_eglise_dto_1.CreateEgliseDto]),
    __metadata("design:returntype", void 0)
], EglisesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EglisesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EglisesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_eglise_dto_1.UpdateEgliseDto]),
    __metadata("design:returntype", void 0)
], EglisesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EglisesController.prototype, "remove", null);
EglisesController = __decorate([
    (0, swagger_1.ApiTags)('Eglises'),
    (0, common_1.Controller)('eglises'),
    __metadata("design:paramtypes", [eglises_service_1.EglisesService])
], EglisesController);
exports.EglisesController = EglisesController;
//# sourceMappingURL=eglises.controller.js.map