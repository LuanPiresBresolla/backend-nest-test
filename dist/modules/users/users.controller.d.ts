import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticateService } from './authenticate/authenticate.service';
export declare class UsersController {
    private readonly usersService;
    private readonly authenticateService;
    constructor(usersService: UsersService, authenticateService: AuthenticateService);
    login(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findOne(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
