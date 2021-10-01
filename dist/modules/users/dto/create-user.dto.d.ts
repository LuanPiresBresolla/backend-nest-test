import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    login: string;
    name: string;
    email: string;
    password: string;
}
