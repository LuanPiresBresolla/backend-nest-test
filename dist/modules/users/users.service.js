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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const bcrypt_1 = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const passwordHash = await (0, bcrypt_1.hash)(createUserDto.password, 10);
        return this.prisma.user.create({
            data: {
                login: createUserDto.login,
                name: createUserDto.name,
                email: createUserDto.email,
                password: passwordHash,
            },
        });
    }
    findAll() {
        return this.prisma.user.findMany();
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }
    findByLogin(login) {
        return this.prisma.user.findUnique({
            where: { login },
        });
    }
    async update(id, updateUserDto) {
        const passwordHash = await (0, bcrypt_1.hash)(updateUserDto.password, 10);
        return this.prisma.user.update({
            data: {
                login: updateUserDto.login,
                name: updateUserDto.name,
                email: updateUserDto.email,
                password: passwordHash,
            },
            where: { id },
        });
    }
    remove(id) {
        return this.prisma.user.delete({ where: { id } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map