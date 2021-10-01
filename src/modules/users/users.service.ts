import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const passwordHash = await hash(createUserDto.password, 10);

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

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByLogin(login: string) {
    return this.prisma.user.findUnique({
      where: { login },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const passwordHash = await hash(updateUserDto.password, 10);

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

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
