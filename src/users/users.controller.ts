import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create_users')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put('update_users/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const request = {
      firstname: updateUserDto.firstname,
      lastname: updateUserDto.lastname,
      updatedAt: new Date()
    };
    return this.usersService.update(+id, request);
  }

  @Delete('delete_users/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
