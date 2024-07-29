import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Get('post/:id')
  @ApiTags('post')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('feed')
  @ApiTags('post')
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true },
    });
  }

  @Get('filterd-posts/:searchString')
  @ApiTags('post')
  async getFilterdPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          { title: { contains: searchString } },
          { content: { contains: searchString } },
        ],
      },
    });
  }

  @Post('post')
  @ApiTags('post')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Post('user')
  @ApiTags('user')
  async signupUser(
    @Body()
    userData: {
      name?: string;
      email: string;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('user/:id')
  @ApiTags('user')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Get('allUsers')
  @ApiTags('user')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Put('user/:id')
  @ApiTags('user')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: { name?: string; email?: string },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }
}
