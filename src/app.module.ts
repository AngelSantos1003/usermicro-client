import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { MathService } from './math.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
