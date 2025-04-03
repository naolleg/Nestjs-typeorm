import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../entity/Post.entity';
import { Profile } from '../entity/Profile.entity';
import { User } from '../entity/User.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
