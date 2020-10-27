import { Controller, Post ,Body, UploadedFile, UseInterceptors, Get} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CrearUser, FileUploadDto } from './dto/created-user';
import { User } from './user.entity';
import {editFileName, imageFileFilter} from './../utils/file-upload.utils'
import { MathService } from '../math.service';
import { ApiProperty, ApiConsumes, ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService, private mathService: MathService) { }
    @Post()
    create(@Body() user: CrearUser) {
        this.service.createdUser(user);
    }
    @Get()
    async getUsers(){
        // const dataResult = {
        //     headerResponse:{
        //         code:200,
        //         message:'ok'
        //     },
        //     paylod: this.service.getUsers()
        // }
        // return res.json(dataResult);
        return await this.service.getUsers();
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
    @ApiConsumes('multipart/form-data')
@ApiBody({
  type: FileUploadDto,
})
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
