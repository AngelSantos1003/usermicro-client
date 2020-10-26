import { IsString, IsNotEmpty, IsEmail} from 'class-validator';

export class CrearUser {
    ID:number;

    @IsString()
    @IsNotEmpty()
    Name: string;

    @IsEmail()
    @IsNotEmpty()
    Email: string;

}