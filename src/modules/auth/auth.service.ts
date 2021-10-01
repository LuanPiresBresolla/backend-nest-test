import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';

// Aqui ira ser feito o login do usuario

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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
}
