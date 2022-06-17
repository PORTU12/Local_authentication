import { Controller, Get, Request, Post, UseGuards, Body, Put, Delete } from '@nestjs/common';
import { PostDto } from 'src/users/dto/create-user.dto';
import { PostEntity } from 'src/users/entities/user.entity';
import { AuthService } from './Auth.service';
import { JwtAuthGuard } from './jwt-Auth.guards';


@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  /*@Post()
  subscribe(@Body() userdata: PostDto):Promise<PostEntity>{
    return this.authService.subscribe(userdata)
  }*/

  @Put(':id')
  async update(@Body() data) {
    console.log(data);
    
    return this.authService.login(data);
  }

  @Delete(':id')
  async delete(@Body() data) {
    console.log(data);
    
    return this.authService.login(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}