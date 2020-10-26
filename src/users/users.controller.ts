import { Controller, Post ,Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CrearUser } from './dto/created-user';
import { User } from './user.entity';
import {editFileName, imageFileFilter} from './../utils/file-upload.utils'
import { MathService } from '../math.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService, private mathService: MathService) { }
    @Post()
    create(@Body() user: CrearUser) {
        this.service.createdUser(user);
    }

    @UseInterceptors(
        FileInterceptor('fileUsers', {
          storage: diskStorage({
            destination: './src/users/files',
            filename: editFileName,
          }),
          fileFilter: imageFileFilter,
        }),
      )
    @Post('/upload')
    async Upload(@UploadedFile()  file){
        const response = {
            originalname: file.originalname,
            filename: file.filename,
          };
          const data = await this.service.uploadUsers(file.filename);
          console.log('data');
          console.log(data);
          return this.mathService.Add(data)
    }
}
