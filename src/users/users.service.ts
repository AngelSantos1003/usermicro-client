import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

const xlsx = require('node-xlsx').default;
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find()
}
    async createdUser(userDto: User): Promise<User> {
        console.log(userDto);
        const user = new User();
        user.Name = userDto.Name;
        user.Email = userDto.Name;
        return this.usersRepository.save(user);
    }
    async uploadUsers(nameFile: string) {
        try {

            let path = __dirname + "/files/" + nameFile;
            console.log('Path');
            console.log(path);
            const workSheetsFile = xlsx.parse(path);
    //   console.log(workSheetsFile[0].data);
      const dataXLSX = workSheetsFile[0].data;
      dataXLSX.shift();
      return dataXLSX;
            // });
        } catch (error) {
            console.log(error);
        }
    }
}
