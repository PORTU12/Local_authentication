import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { UserService } from './users.service';
import { PostDto } from './dto/create-user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateBookDto } from './dto/update-user.dto';
import { PostEntity } from './entities/user.entity';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) { }
  
  @Post()
  create(@Body() users: PostDto): Promise<PostDto> {
    return this.userService.createUser(users);
  }
  @Get()
  findAll(): Promise<PostDto[]>{
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PostDto> {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto): Promise<UpdateResult>{
    return this.userService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult>{
    return this.userService.remove(+id);
  }
}