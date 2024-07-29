import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, PostService, PrismaService],
})
export class AppModule {}
