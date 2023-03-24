"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEgliseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_eglise_dto_1 = require("./create-eglise.dto");
class UpdateEgliseDto extends (0, mapped_types_1.PartialType)(create_eglise_dto_1.CreateEgliseDto) {
}
exports.UpdateEgliseDto = UpdateEgliseDto;
//# sourceMappingURL=update-eglise.dto.js.map