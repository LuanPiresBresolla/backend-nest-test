import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '.prisma/client';

// Aqui ira ser feito o login do usuario
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Aqui vai verificar se o login e senha do usuario estão corretos
  async validateUser(login: string, password: string) {
    const user = await this.usersService.findByLogin(login);

    if (user) {
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return null;
      }

      delete user.password;

      return user;
    }

    return null;
  }

  // Aqui vai gerar o token do usuário
  async login(user: User) {
    const { id, login } = user;
    const payload = { id, login };

    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }
}
