import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthController } from './bauth/Auth.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './bauth/Auth.module';
import { CryptModule } from './crypt/crypt.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POST_HOST,
    port: +process.env.POST_PORT,
    username: process.env.POST_USER,
    password: process.env.POST_PASSWORD,
    database: process.env.POST_DATABASE,
    autoLoadEntities: true,
    synchronize: true,
  }), UsersModule, AuthModule, CryptModule],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
