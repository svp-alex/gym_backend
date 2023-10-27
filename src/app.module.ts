import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './users/entities/user.entity'
import { TrainingsModule } from './trainings/trainings.module'
import * as process from 'process'
import { ConfigModule } from '@nestjs/config'
import { TrainingEntity } from './trainings/entities/training.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [UserEntity, TrainingEntity],
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'dpg-ckt5lao168ec73e3dmhg-a.oregon-postgres.render.com',
    //   port: 5432,
    //   username: 'alex',
    //   password: 'tBCGNCUKTxRqKAzU9y0dsKmjxleieHyQ',
    //   database: 'gym_m077',
    //   entities: [UserEntity],
    //   synchronize: false,
    // }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
