import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { EglisesModule } from './eglises/eglises.module';
import { Evironnement } from './environnement';

dotenv.config();



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Evironnement.DB_HOST,
      port: Evironnement.DB_PORT,
      username: Evironnement.DB_USERNAME,
      password: Evironnement.DB_PASSWORD,
      database: Evironnement.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      // entities: [
      //   UserEntity,
      // ],
      synchronize: true,
    }),
    UsersModule, 
    AuthModule, EglisesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
