import { IsString, IsNotEmpty, IsEmail} from 'class-validator';
import { ApiProperty, ApiConsumes, ApiBody } from '@nestjs/swagger';
export class CrearUser {
    ID:number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Name: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    Email: string;

}
export class FileUploadDto {
    @ApiProperty()
    fileUsers: any;
  }
  